import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, ChevronRight, Info } from 'lucide-react';

const CaloriesCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activityLevel: 'moderate',
    goal: 'maintain'
  });
  
  const [result, setResult] = useState<null | {
    bmr: number;
    maintenance: number;
    target: number;
  }>(null);

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

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse values and ensure they're valid numbers
    const age = parseInt(formData.age) || 0;
    const height = parseInt(formData.height) || 0;
    const weight = parseInt(formData.weight) || 0;
    
    // Validation
    if (age < 15 || age > 100 || height < 100 || height > 250 || weight < 30 || weight > 300) {
      alert("Please enter valid values for age, height, and weight.");
      return;
    }
    
    // Calculate BMR using Mifflin-St Jeor Equation
    // Men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) + 5
    // Women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) - 161
    let bmr;
    if (formData.gender === 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    // Activity level multiplier
    let activityMultiplier;
    switch (formData.activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2; // Sedentary (little or no exercise)
        break;
      case 'light':
        activityMultiplier = 1.375; // Light exercise 1-3 days/week
        break;
      case 'moderate':
        activityMultiplier = 1.55; // Moderate exercise 3-5 days/week
        break;
      case 'active':
        activityMultiplier = 1.725; // Active, exercise 6-7 days/week
        break;
      case 'very':
        activityMultiplier = 1.9; // Very active, hard exercise 6-7 days/week
        break;
      default:
        activityMultiplier = 1.55;
    }
    
    // Calculate maintenance calories (TDEE - Total Daily Energy Expenditure)
    const maintenance = Math.round(bmr * activityMultiplier);
    
    // Calculate target calories based on goal
    let target;
    switch (formData.goal) {
      case 'extreme-lose':
        target = Math.max(1200, Math.round(maintenance - 1000)); // Ensure minimum calories
        break;
      case 'lose':
        target = Math.max(1200, Math.round(maintenance - 500)); // Ensure minimum calories
        break;
      case 'gain':
        target = Math.round(maintenance + 500); // Caloric surplus for weight gain
        break;
      case 'extreme-gain':
        target = Math.round(maintenance + 1000); // Extreme caloric surplus
        break;
      default:
        target = maintenance; // Maintenance calories
    }
    
    setResult({
      bmr: Math.round(bmr),
      maintenance,
      target
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-fit-green-50 py-12 md:py-20">
        <div className="container-85 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 heading-gradient">
            Calorie Calculator
          </h1>
          <p className="text-lg text-fit-neutral-700 max-w-3xl mx-auto">
            Calculate your caloric needs based on your personal metrics and fitness goals.
          </p>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-85">
          <div className="max-w-4xl mx-auto">
            <div className="bg-fit-neutral-50 rounded-2xl p-8 md:p-10 shadow-sm">
              <form onSubmit={calculateCalories} className="space-y-8">
                {/* Personal Information Section */}
                <div>
                  <h2 className="text-xl font-bold text-fit-neutral-800 mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    {/* Gender Selection */}
                    <div>
                      <Label className="text-base font-medium mb-2 block">Gender</Label>
                      <Select 
                        value={formData.gender}
                        onValueChange={(value) => handleSelectChange('gender', value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="age" className="text-base font-medium mb-2 block">Age</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          placeholder="Years"
                          min="15"
                          max="100"
                          value={formData.age}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="weight" className="text-base font-medium mb-2 block">Weight (kg)</Label>
                        <Input
                          id="weight"
                          name="weight"
                          type="number"
                          placeholder="kg"
                          min="30"
                          max="300"
                          value={formData.weight}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="height" className="text-base font-medium mb-2 block">Height (cm)</Label>
                        <Input
                          id="height"
                          name="height"
                          type="number"
                          placeholder="cm"
                          min="100"
                          max="250"
                          value={formData.height}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Activity Level */}
                <div>
                  <h2 className="text-xl font-bold text-fit-neutral-800 mb-4">Activity Level</h2>
                  <Select 
                    value={formData.activityLevel}
                    onValueChange={(value) => handleSelectChange('activityLevel', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Activity Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                      <SelectItem value="light">Lightly Active (light exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderately Active (exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="active">Very Active (hard exercise 6-7 days/week)</SelectItem>
                      <SelectItem value="very">Extra Active (very hard exercise & physical job)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Diet Target */}
                <div>
                  <h2 className="text-xl font-bold text-fit-neutral-800 mb-4">Your Goal</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Instead of radio buttons, using cards with a select for better UX */}
                    <Select 
                      value={formData.goal}
                      onValueChange={(value) => handleSelectChange('goal', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="extreme-lose">Extreme Weight Loss</SelectItem>
                        <SelectItem value="lose">Weight Loss</SelectItem>
                        <SelectItem value="maintain">Maintain Weight</SelectItem>
                        <SelectItem value="gain">Weight Gain</SelectItem>
                        <SelectItem value="extreme-gain">Extreme Weight Gain</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="md:col-span-3 mt-3">
                      <div className="text-sm text-fit-neutral-600 p-3 bg-fit-green-50 rounded-lg border border-fit-green-100">
                        {formData.goal === 'extreme-lose' && (
                          <p>A deficit of 1000 calories per day for faster weight loss. This is more aggressive and should be approached carefully. Not recommended for extended periods.</p>
                        )}
                        {formData.goal === 'lose' && (
                          <p>A modest deficit of 500 calories per day for gradual, sustainable weight loss (about 0.5 kg or 1 lb per week).</p>
                        )}
                        {formData.goal === 'maintain' && (
                          <p>Balanced caloric intake to maintain your current weight.</p>
                        )}
                        {formData.goal === 'gain' && (
                          <p>A surplus of 500 calories per day for steady weight gain (about 0.5 kg or 1 lb per week), ideal for muscle building when combined with resistance training.</p>
                        )}
                        {formData.goal === 'extreme-gain' && (
                          <p>A surplus of 1000 calories per day for faster weight gain (about 1 kg or 2 lbs per week). Best for those who struggle to gain weight or athletes in intense training.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-fit-green-600 hover:bg-fit-green-700 text-white"
                    size="lg"
                  >
                    <Calculator className="mr-2 h-5 w-5" /> Calculate Calories
                  </Button>
                </div>
              </form>
              
              {/* Results Section */}
              {result && (
                <div className="mt-10 pt-8 border-t border-fit-neutral-200">
                  <h2 className="text-2xl font-bold text-fit-neutral-800 mb-6 text-center">Your Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <p className="text-fit-neutral-600 mb-2">Basal Metabolic Rate</p>
                      <p className="text-3xl font-bold text-fit-green-600">{result.bmr}</p>
                      <p className="text-sm text-fit-neutral-500 mt-1">calories/day</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <p className="text-fit-neutral-600 mb-2">
                        {formData.goal === 'lose' ? 'Weight Loss' : 
                         formData.goal === 'extreme-lose' ? 'Extreme Weight Loss' :
                         formData.goal === 'gain' ? 'Weight Gain' : 
                         formData.goal === 'extreme-gain' ? 'Extreme Weight Gain' :
                         'Maintenance'} Target
                      </p>
                      <p className="text-3xl font-bold text-fit-green-600">{result.target}</p>
                      <p className="text-sm text-fit-neutral-500 mt-1">calories/day</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <p className="text-fit-neutral-600 mb-2">Maintenance Calories</p>
                      <p className="text-3xl font-bold text-fit-green-600">{result.maintenance}</p>
                      <p className="text-sm text-fit-neutral-500 mt-1">calories/day</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-5 bg-fit-green-50 rounded-xl border border-fit-green-100">
                    <div className="flex">
                      <div className="shrink-0">
                        <Info className="h-5 w-5 text-fit-green-600 mr-3 mt-0.5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-fit-neutral-800 mb-1">What this means</h3>
                        <p className="text-sm text-fit-neutral-600 mb-2">
                          These calculations use the Mifflin-St Jeor Equation, which research has shown to be the most accurate for most people. Your calorie needs may vary based on your specific body composition, genetics, and other factors.
                        </p>
                        <p className="text-sm text-fit-neutral-600 mb-3">
                          <span className="font-medium">BMR</span> (Basal Metabolic Rate) is the energy your body needs at complete rest.
                          <span className="font-medium ml-2">Maintenance</span> is your total energy needs including daily activities.
                          <span className="font-medium ml-2">Target</span> is adjusted based on your weight goal.
                        </p>
                        <p className="text-sm text-fit-neutral-600">
                          For personalized nutrition advice and a customized meal plan tailored to your specific goals, consider our Nutrition Plan.
                        </p>
                        <div className="mt-4">
                          <Button 
                            variant="outline" 
                            className="text-fit-green-700 border-fit-green-300 hover:bg-fit-green-50"
                            size="sm"
                            asChild
                          >
                            <a href="/plans/nutrition">
                              View Nutrition Plans <ChevronRight className="ml-1 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default CaloriesCalculator; 