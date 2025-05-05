import mongoose from "mongoose";
const { Schema } = mongoose;

const fitnessDataSchema = new Schema({
  email: {
    type: String,
    ref: 'User',
    required: true,
    unique: true
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  activeDays: {
    type: String,
    required: true,
    enum: ['sedentary', 'lightly_active', 'moderately_active', 'very_active', 'super_active']
  },
  goal: {
    type: String,
    required: true,
    enum: ['weight_loss', 'muscle_gain', 'maintenance', 'endurance', 'flexibility']
  },
  calories: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("FitnessData", fitnessDataSchema);
