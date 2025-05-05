import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';
import { useAuth } from '@/lib/auth-context';

const FitnessForm: React.FC = () => {
  const { user } = useAuth();
  const [fitnessData, setFitnessData] = useState({
    weight: '',
    height: '',
    bmi: '',
    goal: 'weight_loss',
    calories: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchFitnessData();
  }, []);

  const calculateBMI = (weight: number, height: number) => {
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(1);
  };

  const calculateCalories = (weight: number, height: number, goal: string) => {
    // Basic BMR calculation (Harris-Benedict equation)
    const bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * 25); // Assuming age 25 for simplicity
    
    // Adjust calories based on goal
    switch (goal) {
      case 'weight_loss':
        return Math.round(bmr * 1.2 - 500); // 500 calorie deficit
      case 'muscle_gain':
        return Math.round(bmr * 1.2 + 300); // 300 calorie surplus
      case 'maintenance':
        return Math.round(bmr * 1.2);
      case 'endurance':
        return Math.round(bmr * 1.4); // Higher for endurance training
      case 'flexibility':
        return Math.round(bmr * 1.2);
      default:
        return Math.round(bmr * 1.2);
    }
  };

  const fetchFitnessData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/fitness-data', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if (response.data) {
        setFitnessData({
          weight: response.data.weight?.toString() || '',
          height: response.data.height?.toString() || '',
          bmi: response.data.bmi?.toString() || '',
          goal: response.data.goal || 'weight_loss',
          calories: response.data.calories?.toString() || ''
        });
      }
    } catch (error) {
      console.error('Error fetching fitness data:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Please log in to save fitness data');
        return;
      }

      const weight = Number(fitnessData.weight);
      const height = Number(fitnessData.height);
      const bmi = calculateBMI(weight, height);
      const calories = calculateCalories(weight, height, fitnessData.goal);

      const response = await axios.post('http://localhost:3000/api/fitness-data', {
        weight,
        height,
        bmi,
        goal: fitnessData.goal,
        calories
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data) {
        setMessage('Fitness data saved successfully!');
        setFitnessData(prev => ({
          ...prev,
          bmi: response.data.bmi.toString(),
          calories: response.data.calories.toString()
        }));
      }
    } catch (error: any) {
      console.error('Error details:', error.response?.data || error);
      setMessage(error.response?.data?.message || 'Error saving fitness data');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFitnessData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container-85 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Fitness Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={fitnessData.weight}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fit-green-500 focus:ring-fit-green-500"
                required
                min="30"
                max="200"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={fitnessData.height}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fit-green-500 focus:ring-fit-green-500"
                required
                min="100"
                max="250"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
                Fitness Goal
              </label>
              <select
                id="goal"
                name="goal"
                value={fitnessData.goal}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fit-green-500 focus:ring-fit-green-500"
                required
              >
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>

            {fitnessData.bmi && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900">Your Results</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-600">
                    BMI: <span className="font-medium">{fitnessData.bmi}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Recommended Daily Calories: <span className="font-medium">{fitnessData.calories}</span>
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-fit-green-600 text-white btn-sm rounded-md hover:bg-fit-green-700 focus:outline-none focus:ring-2 focus:ring-fit-green-500 focus:ring-offset-2"
            >
              Calculate & Save
            </button>

            {message && (
              <p className={`text-center ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FitnessForm; 