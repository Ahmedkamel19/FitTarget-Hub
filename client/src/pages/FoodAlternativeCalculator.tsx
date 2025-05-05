import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Utensils, ChevronRight, Info, ArrowRightIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

// Food data by category
const calorieData = {
  protein: {
    "Chicken Breast (Skinless)": { calories: 165, protein: 31, carbs: 0, fats: 3.6 },
    "Chicken Thigh (Skinless)": { calories: 209, protein: 26, carbs: 0, fats: 10.9 },
    "Turkey Breast": { calories: 120, protein: 25, carbs: 0, fats: 1 },
    "Eggs": { calories: 155, protein: 13, carbs: 1.1, fats: 11 },
    "Egg Whites": { calories: 52, protein: 11, carbs: 0.7, fats: 0.2 },
    "Beef (Ground)": { calories: 250, protein: 26, carbs: 0, fats: 15 },
    "Salmon": { calories: 206, protein: 22, carbs: 0, fats: 13 },
    "Tuna": { calories: 132, protein: 29, carbs: 0, fats: 1 },
    "Mullet Fish": { calories: 150, protein: 24, carbs: 0, fats: 5 },
  },
  legumes: {
    "Lentils": { calories: 116, protein: 9, carbs: 20, fats: 0.4 },
    "Chickpeas": { calories: 164, protein: 9, carbs: 27, fats: 2.6 },
    "Kidney Beans": { calories: 127, protein: 8, carbs: 22, fats: 0.5 },
    "Soybeans": { calories: 173, protein: 17, carbs: 9, fats: 9 },
    "Peas": { calories: 81, protein: 5, carbs: 14, fats: 0.4 },
    "Lupine Beans": { calories: 120, protein: 12, carbs: 10, fats: 2 },
  },
  carbohydrates: {
    "White Rice": { calories: 130, protein: 2.7, carbs: 28, fats: 0.3 },
    "Brown Rice": { calories: 112, protein: 2.6, carbs: 24, fats: 0.9 },
    "Pasta": { calories: 124, protein: 5, carbs: 25, fats: 0.9 },
    "Quinoa": { calories: 120, protein: 4, carbs: 21, fats: 1.9 },
    "Sweet Potatoes": { calories: 90, protein: 2, carbs: 21, fats: 0.2 },
    "Potatoes": { calories: 87, protein: 2, carbs: 20, fats: 0.1 },
    "Koshary": { calories: 169, protein: 5, carbs: 30, fats: 2 },
    "Baladi Bread": { calories: 282, protein: 9, carbs: 49, fats: 3 },
    "Shami Bread": { calories: 266, protein: 8, carbs: 49, fats: 2 },
  },
  fats: {
    "Olive Oil": { calories: 884, protein: 0, carbs: 0, fats: 100 },
    "Avocado": { calories: 160, protein: 2, carbs: 9, fats: 15 },
    "Almonds": { calories: 579, protein: 21, carbs: 22, fats: 50 },
    "Cashews": { calories: 553, protein: 18, carbs: 30, fats: 44 },
    "Pistachios": { calories: 562, protein: 20, carbs: 28, fats: 45 },
    "Peanuts": { calories: 588, protein: 25, carbs: 16, fats: 50 },
    "Chia Seeds": { calories: 486, protein: 16, carbs: 42, fats: 31 },
  },
  vegetables: {
    "Spinach": { calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4 },
    "Broccoli": { calories: 34, protein: 2.8, carbs: 6.6, fats: 0.4 },
    "Carrots": { calories: 41, protein: 0.9, carbs: 10, fats: 0.2 },
    "Tomatoes": { calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2 },
    "Cucumber": { calories: 16, protein: 0.7, carbs: 3.6, fats: 0.1 },
    "Bell Peppers": { calories: 31, protein: 1, carbs: 6, fats: 0.3 },
    "Eggplant": { calories: 25, protein: 1, carbs: 6, fats: 0.2 },
    "Onions": { calories: 40, protein: 1.1, carbs: 9, fats: 0.1 },
  },
  fruits: {
    "Banana": { calories: 89, protein: 1.1, carbs: 23, fats: 0.3 },
    "Apple": { calories: 52, protein: 0.3, carbs: 14, fats: 0.2 },
    "Orange": { calories: 47, protein: 0.9, carbs: 12, fats: 0.1 },
    "Dates": { calories: 282, protein: 2.5, carbs: 75, fats: 0.4 },
    "Grapes": { calories: 69, protein: 0.7, carbs: 18, fats: 0.2 },
    "Watermelon": { calories: 30, protein: 0.6, carbs: 7.6, fats: 0.2 },
    "Mango": { calories: 60, protein: 0.8, carbs: 15, fats: 0.4 },
    "Pomegranate": { calories: 83, protein: 1.7, carbs: 19, fats: 1.2 },
  },
  dairy: {
    "Whole Milk": { calories: 61, protein: 3.2, carbs: 4.8, fats: 3.3 },
    "Skim Milk": { calories: 34, protein: 3.4, carbs: 5, fats: 0.1 },
    "Greek Yogurt": { calories: 90, protein: 10, carbs: 3.6, fats: 5 },
    "Cottage Cheese": { calories: 98, protein: 11, carbs: 3.4, fats: 4.3 },
    "Almond Milk": { calories: 13, protein: 0.5, carbs: 0.6, fats: 1.1 },
    "Oat Milk": { calories: 40, protein: 1, carbs: 7, fats: 1.5 },
    "Buffalo Milk": { calories: 97, protein: 3.7, carbs: 5.2, fats: 6.9 },
  },
  ramadan_sweets: {
    "Qatayef": { calories: 303, protein: 6, carbs: 50, fats: 9 },
    "Kunafa with Cream": { calories: 422, protein: 6, carbs: 50, fats: 22 },
    "Kunafa with Nutella": { calories: 574, protein: 7, carbs: 70, fats: 30 },
    "Basbousa": { calories: 576, protein: 6, carbs: 75, fats: 28 },
    "Basbousa with Nuts": { calories: 720, protein: 9, carbs: 81, fats: 40 },
    "Zalabia": { calories: 430, protein: 4, carbs: 45, fats: 26 },
  },
  ramadan_drinks: {
    "Qamar El-Din": { calories: 120, protein: 1, carbs: 30, fats: 0 },
    "Carob Drink": { calories: 80, protein: 1, carbs: 20, fats: 0.5 },
    "Hibiscus": { calories: 40, protein: 0.5, carbs: 10, fats: 0 },
    "Sobia": { calories: 135, protein: 2, carbs: 25, fats: 4 },
    "Tamarind Drink": { calories: 100, protein: 0.5, carbs: 25, fats: 0.2 },
    "Licorice Drink": { calories: 90, protein: 0.5, carbs: 22, fats: 0 },
  }
};

// Category display names
const categoryLabels = {
  protein: "Protein",
  legumes: "Legumes",
  carbohydrates: "Carbohydrates",
  fats: "Healthy Fats",
  vegetables: "Vegetables",
  fruits: "Fruits",
  dairy: "Dairy & Alternatives",
  ramadan_sweets: "Ramadan Sweets",
  ramadan_drinks: "Ramadan Drinks"
};

const FoodAlternativeCalculator: React.FC = () => {
  const [category, setCategory] = useState<string>("protein");
  const [originalFood, setOriginalFood] = useState<string>("");
  const [alternativeFood, setAlternativeFood] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Set initial foods when category changes
  useEffect(() => {
    const foods = Object.keys(calorieData[category as keyof typeof calorieData]);
    if (foods.length > 0) {
      setOriginalFood(foods[0]);
      setAlternativeFood(foods.length > 1 ? foods[1] : foods[0]);
    }
  }, [category]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setShowResult(false);
  };

  const handleCalculate = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const foodData = calorieData[category as keyof typeof calorieData][originalFood];
    const alternativeData = calorieData[category as keyof typeof calorieData][alternativeFood];
    
    const amountValue = parseFloat(amount);
    const foodTotalCalories = (foodData.calories * amountValue) / 100;
    const alternativeAmount = (foodTotalCalories / (alternativeData.calories / 100));

    // Calculate macros for the original food
    const foodProtein = ((foodData.protein * amountValue) / 100);
    const foodCarbs = ((foodData.carbs * amountValue) / 100);
    const foodFats = ((foodData.fats * amountValue) / 100);

    // Calculate macros for the alternative food
    const alternativeProtein = ((alternativeData.protein * alternativeAmount) / 100);
    const alternativeCarbs = ((alternativeData.carbs * alternativeAmount) / 100);
    const alternativeFats = ((alternativeData.fats * alternativeAmount) / 100);

    setResult({
      original: {
        name: originalFood,
        amount: amountValue,
        calories: foodTotalCalories,
        protein: foodProtein,
        carbs: foodCarbs,
        fats: foodFats,
      },
      alternative: {
        name: alternativeFood,
        amount: alternativeAmount,
        calories: foodTotalCalories,
        protein: alternativeProtein,
        carbs: alternativeCarbs,
        fats: alternativeFats,
      }
    });

    setShowResult(true);
  };

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-fit-green-50 py-12 md:py-20">
        <div className="container-85 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 heading-gradient">
            Food Alternative Calculator
          </h1>
          <p className="text-lg text-fit-neutral-700 max-w-3xl mx-auto">
            Find healthy alternatives to your favorite foods with equivalent nutritional values.
          </p>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-85">
          <div className="max-w-4xl mx-auto">
            <div className="bg-fit-neutral-50 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-fit-neutral-800 mb-4">Select Food Category</h2>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <Button
                      key={key}
                      variant={category === key ? "default" : "outline"}
                      onClick={() => handleCategoryChange(key)}
                      className={category === key ? 
                        "bg-fit-green-600 hover:bg-fit-green-700" : 
                        "text-fit-green-600 border-fit-green-200 hover:bg-fit-green-50"
                      }
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-fit-neutral-800 mb-4">Calculate Equivalents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="original-food" className="text-base font-medium mb-2 block">
                          Original Food
                        </Label>
                        <select
                          id="original-food"
                          value={originalFood}
                          onChange={(e) => setOriginalFood(e.target.value)}
                          className="w-full p-2 border border-fit-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fit-green-500"
                        >
                          {Object.keys(calorieData[category as keyof typeof calorieData] || {}).map(food => (
                            <option key={food} value={food}>{food}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="amount" className="text-base font-medium mb-2 block">
                          Amount (grams)
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          min="1"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Enter amount in grams"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="alternative-food" className="text-base font-medium mb-2 block">
                          Alternative Food
                        </Label>
                        <select
                          id="alternative-food"
                          value={alternativeFood}
                          onChange={(e) => setAlternativeFood(e.target.value)}
                          className="w-full p-2 border border-fit-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fit-green-500"
                        >
                          {Object.keys(calorieData[category as keyof typeof calorieData] || {}).map(food => (
                            <option key={food} value={food}>{food}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="pt-8">
                        <Button 
                          onClick={handleCalculate}
                          className="w-full bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white rounded-lg py-3 h-auto"
                        >
                          <span className="flex items-center">
                            <Utensils className="mr-2 h-5 w-5" />
                            Calculate Alternative
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {showResult && result && (
                  <div className="mt-8 pt-8 border-t border-fit-neutral-200">
                    <h2 className="text-2xl font-bold text-fit-neutral-800 mb-6">Results</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="overflow-hidden border-0 bg-white shadow-md p-0">
                        <div className="bg-fit-green-600 text-white p-4">
                          <h3 className="text-xl font-bold">Original Food</h3>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <span className="text-lg font-semibold text-fit-neutral-800">{result.original.name}</span>
                            <p className="text-fit-neutral-600">{result.original.amount.toFixed(1)} grams</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Calories</p>
                              <p className="text-fit-neutral-900 font-bold">{result.original.calories.toFixed(1)}</p>
                            </div>
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Protein</p>
                              <p className="text-fit-neutral-900 font-bold">{result.original.protein.toFixed(1)}g</p>
                            </div>
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Carbs</p>
                              <p className="text-fit-neutral-900 font-bold">{result.original.carbs.toFixed(1)}g</p>
                            </div>
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Fats</p>
                              <p className="text-fit-neutral-900 font-bold">{result.original.fats.toFixed(1)}g</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="overflow-hidden border-0 bg-white shadow-md p-0">
                        <div className="bg-fit-green-500 text-white p-4">
                          <h3 className="text-xl font-bold">Alternative Equivalent</h3>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <span className="text-lg font-semibold text-fit-neutral-800">{result.alternative.name}</span>
                            <p className="text-fit-neutral-600">{result.alternative.amount.toFixed(1)} grams</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Calories</p>
                              <p className="text-fit-neutral-900 font-bold">{result.alternative.calories.toFixed(1)}</p>
                            </div>
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Protein</p>
                              <p className="text-fit-neutral-900 font-bold">{result.alternative.protein.toFixed(1)}g</p>
                            </div>
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Carbs</p>
                              <p className="text-fit-neutral-900 font-bold">{result.alternative.carbs.toFixed(1)}g</p>
                            </div>
                            <div className="bg-fit-neutral-50 p-3 rounded-lg">
                              <p className="text-xs uppercase text-fit-neutral-500">Fats</p>
                              <p className="text-fit-neutral-900 font-bold">{result.alternative.fats.toFixed(1)}g</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Button
                        variant="outline"
                        onClick={() => setShowResult(false)}
                        className="text-fit-green-600 border-fit-green-200"
                      >
                        Calculate Another Alternative
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nutrition Tips Section */}
      <section className="py-16 bg-fit-green-50">
        <div className="container-85">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Healthy Food Swap Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Protein Sources</h3>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Swap red meat for lean poultry or fish</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Try legumes like lentils and chickpeas instead of meat</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use egg whites instead of whole eggs to reduce fat</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Carbohydrates</h3>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Choose brown rice over white rice</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Whole grain bread instead of white bread</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sweet potatoes instead of regular potatoes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Ramadan Sweets</h3>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Choose kunafa with less syrup and more nuts</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dates stuffed with nuts instead of sugar-heavy sweets</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce portion sizes of traditional desserts</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Cooking Methods</h3>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Bake or grill instead of frying</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use olive oil instead of butter</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-fit-green-500 mt-0.5 flex-shrink-0" />
                    <span>Steam vegetables instead of boiling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default FoodAlternativeCalculator; 