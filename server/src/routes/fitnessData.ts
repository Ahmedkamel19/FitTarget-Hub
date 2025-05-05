import express from 'express';
import { checkAuth } from "../middleware/checkAuth";

import FitnessData from '../models/fitnessData';
// import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Get fitness data for the authenticated user
router.get('/', checkAuth, async (req: any, res) => {
  try {
    const fitnessData = await FitnessData.findOne({ email: req.user });
    res.json(fitnessData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fitness data' });
  }
});


router.post('/', checkAuth, async (req: any, res) => {
  try {
    const { weight, height, gender, activeDays, goal } = req.body;

    // Calculate BMR based on gender
    let bmr;
    const age = 30; // Set a default age or pass it from the request if needed

    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate Total Daily Energy Expenditure (TDEE) based on activity level
    let activityMultiplier;
    switch (activeDays) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightly_active':
        activityMultiplier = 1.375;
        break;
      case 'moderately_active':
        activityMultiplier = 1.55;
        break;
      case 'very_active':
        activityMultiplier = 1.725;
        break;
      case 'super_active':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.375; // Default to lightly active
    }

    const calories = bmr * activityMultiplier;

    // Store fitness data in the database
    const fitnessData = await FitnessData.findOneAndUpdate(
      { email: req.user },
      {
        weight: Number(weight),
        height: Number(height),
        gender,
        activeDays,
        goal,
        calories, // Save the calculated calories instead of BMI
        email: req.user
      },
      {
        new: true,
        upsert: true,
        runValidators: true // Ensure validation runs on update
      }
    );

    console.log('Saved fitness data:', fitnessData);
    res.json(fitnessData);
  } catch (error: any) {
    console.error('Error saving fitness data:', error);
    res.status(500).json({
      message: 'Error saving fitness data',
      error: error.message,
      details: error
    });
  }
});
export default router; 


