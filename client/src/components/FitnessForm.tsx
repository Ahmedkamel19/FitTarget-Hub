import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const FitnessForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    gender: '',
    activeDays: '',
    goal: ''
  });
  const [loading, setLoading] = useState(false);
  const [hasExistingData, setHasExistingData] = useState(false);

  useEffect(() => {
    fetchExistingData();
  }, []);

  const fetchExistingData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.get('http://localhost:3000/fitdata', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data) {
        setHasExistingData(true);
        setFormData({
          weight: response.data.weight.toString(),
          height: response.data.height.toString(),
          gender: response.data.gender,
          activeDays: response.data.activeDays,
          goal: response.data.goal
        });
      }
    } catch (error) {
      console.error('Error fetching existing fitness data:', error);
      // If we get a 404, it means no data exists, which is fine
      if (error.response?.status !== 404) {
        toast.error('Error fetching your fitness data');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please log in to submit your fitness data');
        navigate('/login');
        return;
      }

      // Validate all required fields
      if (!formData.weight || !formData.height || !formData.gender || !formData.activeDays || !formData.goal) {
        toast.error('Please fill in all fields');
        setLoading(false);
        return;
      }

      // Convert string values to numbers for weight and height
      const data = {
        ...formData,
        weight: Number(formData.weight),
        height: Number(formData.height)
      };

      await axios.post(
        'http://localhost:3000/fitdata',
        data,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      toast.success('Fitness profile updated successfully!');
      setHasExistingData(true);
      navigate('/your-plan'); // Redirect to plan page after successful submission
    } catch (error: any) {
      console.error('Error submitting fitness data:', error);
      const errorMessage = error.response?.data?.message || error.response?.data?.error || 'Failed to update fitness profile';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      {hasExistingData && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            You already have a fitness profile. Your plan has been generated based on this data. 
            To modify your profile, please contact support.
          </p>
        </div>
      )}
      
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
          Weight (kg)
        </label>
        <Input
          id="weight"
          name="weight"
          type="number"
          required
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Enter your weight in kilograms"
          className="mt-1"
          min="30"
          max="300"
          disabled={hasExistingData}
        />
      </div>

      <div>
        <label htmlFor="height" className="block text-sm font-medium text-gray-700">
          Height (cm)
        </label>
        <Input
          id="height"
          name="height"
          type="number"
          required
          value={formData.height}
          onChange={handleInputChange}
          placeholder="Enter your height in centimeters"
          className="mt-1"
          min="100"
          max="250"
          disabled={hasExistingData}
        />
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <Select
          value={formData.gender}
          onValueChange={(value) => handleSelectChange('gender', value)}
          required
          disabled={hasExistingData}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select your gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="activeDays" className="block text-sm font-medium text-gray-700">
          Activity Level
        </label>
        <Select
          value={formData.activeDays}
          onValueChange={(value) => handleSelectChange('activeDays', value)}
          required
          disabled={hasExistingData}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select your activity level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sedentary">Sedentary (Little to no exercise)</SelectItem>
            <SelectItem value="lightly_active">Lightly Active (1-3 days/week)</SelectItem>
            <SelectItem value="moderately_active">Moderately Active (3-5 days/week)</SelectItem>
            <SelectItem value="very_active">Very Active (6-7 days/week)</SelectItem>
            <SelectItem value="super_active">Super Active (Athletic/Physical job)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
          Fitness Goal
        </label>
        <Select
          value={formData.goal}
          onValueChange={(value) => handleSelectChange('goal', value)}
          required
          disabled={hasExistingData}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select your fitness goal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weight_loss">Weight Loss</SelectItem>
            <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
            <SelectItem value="endurance">Endurance</SelectItem>
            <SelectItem value="flexibility">Flexibility</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full bg-fit-green-500 hover:bg-fit-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading || hasExistingData}
      >
        {loading ? 'Updating...' : hasExistingData ? 'Profile Already Exists' : 'Update Fitness Profile'}
      </Button>

      {hasExistingData && (
        <Button
          type="button"
          className="w-full mt-2"
          variant="outline"
          onClick={() => navigate('/your-plan')}
        >
          View Your Plan
        </Button>
      )}
    </form>
  );
};

export default FitnessForm; 