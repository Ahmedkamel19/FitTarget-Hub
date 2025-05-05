import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Activity, ClipboardList, Utensils, Dumbbell, Apple, Coffee, Pizza, Salad, AlertTriangle } from 'lucide-react';

const YourPlan: React.FC = () => {
  const [plan, setPlan] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [debugInfo, setDebugInfo] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlan();
  }, []);

  const fetchPlan = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('Please log in to view your plan');
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:3000/bot",
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.msg) {
        setError(response.data.msg);
        setPlan("");
      } else {
        setPlan(response.data.genPlan);
        setError("");
      }
    } catch (error: any) {
      console.error('Error fetching plan:', error);
      if (error.response?.data?.msg) {
        setError(error.response.data.msg);
      } else if (error.response?.status === 400) {
        setError('Please complete your fitness data form first');
      } else {
        setError('Error fetching your plan. Please try again later.');
      }
      setPlan("");
    }
  };

  const handleUpdateProfile = () => {
    navigate('/fitness-profile');
  };

  const formatPlanContent = (content: string) => {
    // First, check if the content is in markdown format or simple text format
    const isMarkdownFormat = content.includes('### **') || content.includes('---');
    
    // Check for workout plan with --- separators but no ### headers
    const isWorkoutOnlyFormat = !content.includes('### **') && 
                                content.includes('---') && 
                                content.includes('**Day 1:');
    
    if (isWorkoutOnlyFormat) {
      // Handle workout-only format with intro text
      const introEndIndex = content.indexOf('**Day 1:');
      const introText = introEndIndex > 0 ? content.substring(0, introEndIndex).trim() : '';
      
      // Extract workout days using regex
      const workoutDays = content.split(/---/).filter(s => s.trim());
      
      // Find notes at the end (if any)
      const notesMatch = content.match(/(?:Please note|Also)[^*]*$/);
      const notes = notesMatch ? notesMatch[0].trim() : '';
      
      return (
        <>
          {introText && (
            <div className="mb-8 bg-fit-neutral-50 p-4 rounded-lg">
              <p className="text-gray-700">{introText}</p>
            </div>
          )}
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-fit-green-700 mb-6 flex items-center">
              <Dumbbell className="mr-3 h-6 w-6" />
              Workout Plan
            </h2>
            
            <div className="space-y-6">
              {workoutDays.map((day, idx) => {
                const dayTitleMatch = day.match(/\*\*Day \d+: ([^*]+)\*\*/);
                if (!dayTitleMatch && idx > 0) return null; // Skip non-day sections except first item (intro)
                
                if (!dayTitleMatch && idx === 0) {
                  // This is the intro section that didn't match the split pattern
                  return (
                    <div key={idx} className="mb-4 bg-fit-neutral-50 p-4 rounded-lg">
                      <p className="text-gray-700">{day.trim()}</p>
                    </div>
                  );
                }
                
                // Extract exercises using regex
                const exercises = day.match(/- \*\*Exercise\*\*:([^-]+)/g) || [];
                const targets = day.match(/- \*\*Target Muscles\*\*:([^-]+)/g) || [];
                const categories = day.match(/- \*\*Category\*\*:([^-]+)/g) || [];
                const intensities = day.match(/- \*\*Intensity\*\*:([^-]+)/g) || [];
                
                return (
                  <div key={idx} className="bg-white rounded-lg shadow-sm border border-fit-neutral-100 overflow-hidden">
                    <div className="bg-fit-neutral-800 text-white p-3">
                      <h3 className="text-lg font-medium flex items-center">
                        <Dumbbell className="mr-2 h-5 w-5" />
                        {dayTitleMatch[1].trim()}
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        {exercises.map((exercise, exIdx) => {
                          const exerciseText = exercise.replace(/- \*\*Exercise\*\*:/, '').trim();
                          const targetText = targets[exIdx] ? targets[exIdx].replace(/- \*\*Target Muscles\*\*:/, '').trim() : '';
                          const categoryText = categories[exIdx] ? categories[exIdx].replace(/- \*\*Category\*\*:/, '').trim() : '';
                          const intensityText = intensities[exIdx] ? intensities[exIdx].replace(/- \*\*Intensity\*\*:/, '').trim() : '';
                          
                          return (
                            <div key={exIdx} className="border-b border-fit-neutral-100 pb-4 last:border-b-0 last:pb-0">
                              <p className="font-semibold text-fit-neutral-800">{exerciseText}</p>
                              <div className="grid grid-cols-2 gap-2 mt-2">
                                {targetText && (
                                  <div className="bg-fit-neutral-50 p-2 rounded">
                                    <p className="text-xs text-fit-neutral-500 uppercase">Target Muscles</p>
                                    <p className="text-fit-neutral-900">{targetText}</p>
                                  </div>
                                )}
                                {categoryText && (
                                  <div className="bg-fit-neutral-50 p-2 rounded">
                                    <p className="text-xs text-fit-neutral-500 uppercase">Category</p>
                                    <p className="text-fit-neutral-900">{categoryText}</p>
                                  </div>
                                )}
                                {intensityText && (
                                  <div className="bg-fit-neutral-50 p-2 rounded">
                                    <p className="text-xs text-fit-neutral-500 uppercase">Intensity</p>
                                    <p className="text-fit-neutral-900">{intensityText}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {notes && (
              <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-800">{notes}</p>
              </div>
            )}
          </div>
        </>
      );
    } else if (isMarkdownFormat) {
      // Handle markdown format (existing implementation)
      const mainSections = content.split(/(?=### \*\*[^*]+\*\*)/g);
      
      return (
        <>
          {mainSections.map((section, sectionIndex) => {
            // Check if this is a nutrition plan section
            const nutritionMatch = section.match(/### \*\*Nutrition Plan\*\*/i);
            // Check if this is a workout plan section
            const workoutMatch = section.match(/### \*\*Workout Plan\*\*/i);
            
            if (!nutritionMatch && !workoutMatch && sectionIndex === 0) {
              // This is likely the introduction text
              return (
                <div key={sectionIndex} className="mb-8 bg-fit-neutral-50 p-4 rounded-lg">
                  <p className="text-gray-700">{section.trim()}</p>
                </div>
              );
            }
            
            if (nutritionMatch) {
              // Parse nutrition plan section
              const goalMatch = section.match(/\*\*User Goal:\s*([^*]+)/);
              const caloricTargetMatch = section.match(/\*\*Daily Caloric Target:\s*([^*]+)/);
              
              // Extract meals using regex
              const mealSections = section.split(/---/).filter(s => s.trim());
              
              const mealIcons = [Coffee, Pizza, Apple, Salad];
              
              return (
                <div key={sectionIndex} className="mb-12">
                  <h2 className="text-2xl font-bold text-fit-green-700 mb-6 flex items-center">
                    <Utensils className="mr-3 h-6 w-6" />
                    Nutrition Plan
                  </h2>
                  
                  {goalMatch && (
                    <div className="mb-4 bg-fit-green-50 p-3 rounded-lg border-l-4 border-fit-green-500">
                      <p className="font-medium text-fit-green-800">
                        Goal: <span className="font-bold">{goalMatch[1].trim()}</span>
                      </p>
                      {caloricTargetMatch && (
                        <p className="font-medium text-fit-green-800">
                          Daily Calories: <span className="font-bold">{caloricTargetMatch[1].trim()}</span>
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mealSections.map((meal, idx) => {
                      const mealTitleMatch = meal.match(/\*\*Meal \d+: ([^*]+)\*\*/);
                      const ingredientsMatch = meal.match(/\*\*Ingredients\*\*:\s*([^\n]+)/);
                      const caloriesMatch = meal.match(/\*\*Calories\*\*:\s*([^\n]+)/);
                      const macrosMatch = meal.match(/\*\*Macro breakdown\*\*:\s*([^\n]+)/);
                      
                      if (!mealTitleMatch) return null;
                      
                      const MealIcon = mealIcons[idx % mealIcons.length];
                      
                      return (
                        <div key={idx} className="bg-white rounded-lg shadow-sm border border-fit-neutral-100 overflow-hidden">
                          <div className="bg-fit-neutral-800 text-white p-3">
                            <h3 className="text-lg font-medium flex items-center">
                              <MealIcon className="mr-2 h-5 w-5" />
                              {mealTitleMatch[1].trim()}
                            </h3>
                          </div>
                          <div className="p-4">
                            {ingredientsMatch && (
                              <div className="mb-3">
                                <p className="text-xs text-fit-neutral-500 uppercase">Ingredients</p>
                                <p className="text-fit-neutral-800 font-medium">{ingredientsMatch[1].trim()}</p>
                              </div>
                            )}
                            
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              {caloriesMatch && (
                                <div className="bg-fit-neutral-50 p-2 rounded">
                                  <p className="text-xs text-fit-neutral-500 uppercase">Calories</p>
                                  <p className="text-fit-neutral-900 font-bold">{caloriesMatch[1].trim()}</p>
                                </div>
                              )}
                              
                              {macrosMatch && (
                                <div className="bg-fit-neutral-50 p-2 rounded">
                                  <p className="text-xs text-fit-neutral-500 uppercase">Macros</p>
                                  <p className="text-fit-neutral-900 font-bold">{macrosMatch[1].trim()}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            
            if (workoutMatch) {
              // Parse workout plan section
              const goalMatch = section.match(/\*\*User Goal:\s*([^*]+)/);
              const splitMatch = section.match(/\*\*Workout Plan for the Week \(([^)]+)\)/);
              
              // Extract workout days using regex
              const workoutDays = section.split(/---/).filter(s => s.trim());
              
              return (
                <div key={sectionIndex} className="mb-12">
                  <h2 className="text-2xl font-bold text-fit-green-700 mb-6 flex items-center">
                    <Dumbbell className="mr-3 h-6 w-6" />
                    Workout Plan
          </h2>
                  
                  {(goalMatch || splitMatch) && (
                    <div className="mb-6 bg-fit-green-50 p-3 rounded-lg border-l-4 border-fit-green-500">
                      {goalMatch && (
                        <p className="font-medium text-fit-green-800">
                          Goal: <span className="font-bold">{goalMatch[1].trim()}</span>
                        </p>
                      )}
                      {splitMatch && (
                        <p className="font-medium text-fit-green-800">
                          Split: <span className="font-bold">{splitMatch[1].trim()}</span>
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    {workoutDays.map((day, idx) => {
                      const dayTitleMatch = day.match(/\*\*Day \d+: ([^*]+)\*\*/);
                      if (!dayTitleMatch) return null;
                      
                      // Extract exercises using regex
                      const exercises = day.match(/- \*\*Exercise\*\*:([^-]+)/g) || [];
                      const targets = day.match(/- \*\*Target Muscles\*\*:([^-]+)/g) || [];
                      const categories = day.match(/- \*\*Category\*\*:([^-]+)/g) || [];
                      const intensities = day.match(/- \*\*Intensity\*\*:([^-]+)/g) || [];
                      
                      return (
                        <div key={idx} className="bg-white rounded-lg shadow-sm border border-fit-neutral-100 overflow-hidden">
                          <div className="bg-fit-neutral-800 text-white p-3">
                            <h3 className="text-lg font-medium flex items-center">
                              <Dumbbell className="mr-2 h-5 w-5" />
                              {dayTitleMatch[1].trim()}
                            </h3>
                          </div>
                          <div className="p-4">
                            <div className="space-y-4">
                              {exercises.map((exercise, exIdx) => {
                                const exerciseText = exercise.replace(/- \*\*Exercise\*\*:/, '').trim();
                                const targetText = targets[exIdx] ? targets[exIdx].replace(/- \*\*Target Muscles\*\*:/, '').trim() : '';
                                const categoryText = categories[exIdx] ? categories[exIdx].replace(/- \*\*Category\*\*:/, '').trim() : '';
                                const intensityText = intensities[exIdx] ? intensities[exIdx].replace(/- \*\*Intensity\*\*:/, '').trim() : '';
                                
                                return (
                                  <div key={exIdx} className="border-b border-fit-neutral-100 pb-4 last:border-b-0 last:pb-0">
                                    <p className="font-semibold text-fit-neutral-800">{exerciseText}</p>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                      {targetText && (
                                        <div className="bg-fit-neutral-50 p-2 rounded">
                                          <p className="text-xs text-fit-neutral-500 uppercase">Target Muscles</p>
                                          <p className="text-fit-neutral-900">{targetText}</p>
                                        </div>
                                      )}
                                      {categoryText && (
                                        <div className="bg-fit-neutral-50 p-2 rounded">
                                          <p className="text-xs text-fit-neutral-500 uppercase">Category</p>
                                          <p className="text-fit-neutral-900">{categoryText}</p>
                                        </div>
                                      )}
                                      {intensityText && (
                                        <div className="bg-fit-neutral-50 p-2 rounded">
                                          <p className="text-xs text-fit-neutral-500 uppercase">Intensity</p>
                                          <p className="text-fit-neutral-900">{intensityText}</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            
            // Fallback for any unmatched section
            return (
              <div key={sectionIndex} className="mb-8">
          <div className="pl-4 border-l-2 border-fit-green-100">
                  {section.split('\n').map((line, i) => (
                    <p key={i} className="mb-2 text-gray-600">{line.trim()}</p>
            ))}
          </div>
        </div>
      );
          })}
        </>
      );
    } else {
      // Handle simple text format
      const mealIcons = [Coffee, Pizza, Apple, Salad];
      
      // Check if this is a nutrition plan by looking for meal patterns
      const hasMeals = content.match(/Meal \d+:/g);
      
      // Check if this is a workout plan by looking for day patterns
      const hasWorkoutDays = content.match(/\*\*Day \d+:/g);
      
      if (hasWorkoutDays) {
        // This is a workout-only plan format
        
        // Extract introduction text (everything before first Day section)
        const introEndIndex = content.indexOf('**Day 1:');
        const introText = introEndIndex > 0 ? content.substring(0, introEndIndex).trim() : '';
        
        // Extract workout days
        const workoutDays = content.split(/---/).filter(s => s.trim());
        
        // Find notes at the end (if any)
        const notesMatch = content.match(/(?:Please note|Also)[^*]*$/);
        const notes = notesMatch ? notesMatch[0].trim() : '';
        
        return (
          <>
            {introText && (
              <div className="mb-8 bg-fit-neutral-50 p-4 rounded-lg">
                <p className="text-gray-700">{introText}</p>
              </div>
            )}
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fit-green-700 mb-6 flex items-center">
                <Dumbbell className="mr-3 h-6 w-6" />
                Workout Plan
              </h2>
              
              <div className="space-y-6">
                {workoutDays.map((day, idx) => {
                  const dayTitleMatch = day.match(/\*\*Day \d+:([^*]+)\*\*/);
                  if (!dayTitleMatch) return null;
                  
                  // Extract exercises using regex
                  const exercises = day.match(/- \*\*Exercise\*\*:([^\n]+)(?:\n- \*\*Target Muscles\*\*:([^\n]+))?(?:\n- \*\*Category\*\*:([^\n]+))?(?:\n- \*\*Intensity\*\*:([^\n]+))?/g) || [];
                  const targets = day.match(/- \*\*Target Muscles\*\*:([^\n]+)/g) || [];
                  const categories = day.match(/- \*\*Category\*\*:([^\n]+)/g) || [];
                  const intensities = day.match(/- \*\*Intensity\*\*:([^\n]+)/g) || [];
                  
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border border-fit-neutral-100 overflow-hidden">
                      <div className="bg-fit-neutral-800 text-white p-3">
                        <h3 className="text-lg font-medium flex items-center">
                          <Dumbbell className="mr-2 h-5 w-5" />
                          {dayTitleMatch[1].trim()}
                        </h3>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          {exercises.map((exercise, exIdx) => {
                            const exerciseText = exercise.replace(/- \*\*Exercise\*\*:/, '').trim();
                            const targetText = targets[exIdx] ? targets[exIdx].replace(/- \*\*Target Muscles\*\*:/, '').trim() : '';
                            const categoryText = categories[exIdx] ? categories[exIdx].replace(/- \*\*Category\*\*:/, '').trim() : '';
                            const intensityText = intensities[exIdx] ? intensities[exIdx].replace(/- \*\*Intensity\*\*:/, '').trim() : '';
                            
                            return (
                              <div key={exIdx} className="border-b border-fit-neutral-100 pb-4 last:border-b-0 last:pb-0">
                                <p className="font-semibold text-fit-neutral-800">{exerciseText}</p>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  {targetText && (
                                    <div className="bg-fit-neutral-50 p-2 rounded">
                                      <p className="text-xs text-fit-neutral-500 uppercase">Target Muscles</p>
                                      <p className="text-fit-neutral-900">{targetText}</p>
                                    </div>
                                  )}
                                  {categoryText && (
                                    <div className="bg-fit-neutral-50 p-2 rounded">
                                      <p className="text-xs text-fit-neutral-500 uppercase">Category</p>
                                      <p className="text-fit-neutral-900">{categoryText}</p>
                                    </div>
                                  )}
                                  {intensityText && (
                                    <div className="bg-fit-neutral-50 p-2 rounded">
                                      <p className="text-xs text-fit-neutral-500 uppercase">Intensity</p>
                                      <p className="text-fit-neutral-900">{intensityText}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {notes && (
                <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800">{notes}</p>
                </div>
              )}
            </div>
          </>
        );
      } else if (hasMeals) {
        // This is a nutrition-only plan
        // Extract target calories if present
        const calorieTargetMatch = content.match(/User Target Calories:\s*([0-9.]+)/);
        const calorieTarget = calorieTargetMatch ? calorieTargetMatch[1] : null;
        
        // Extract all meal sections manually using a different approach
        // First, let's split by "Meal X:" pattern to get each meal section
        const mealSections = content.split(/Meal \d+:/).slice(1); // Skip first element (before first meal)
        
        // Now extract meal details from each section
        const meals: Array<{
          title: string;
          ingredients: string;
          calories: string;
          macros: string;
        }> = [];
        
        // Find meal titles (Breakfast, Lunch, etc.)
        const mealTitles = content.match(/Meal \d+:\s*([^\n-]+)/g)?.map(m => {
          const match = m.match(/Meal \d+:\s*(.+)/);
          return match ? match[1].trim() : "";
        }) || [];
        
        mealSections.forEach((section, idx) => {
          const ingredientsMatch = section.match(/Ingredients:\s*([^\n-]+)/);
          const caloriesMatch = section.match(/Calories:\s*([^\n-]+)/);
          const macrosMatch = section.match(/Macro breakdown:\s*([^\n]+)/);
          
          if (ingredientsMatch && caloriesMatch && macrosMatch) {
            meals.push({
              title: mealTitles[idx] || `Meal ${idx + 1}`,
              ingredients: ingredientsMatch[1].trim(),
              calories: caloriesMatch[1].trim(),
              macros: macrosMatch[1].trim()
            });
          }
        });
        
        // Extract any notes at the end
        const notesMatch = content.match(/(?:Please note|Remember)[\s\S]+$/);
        const notes = notesMatch ? notesMatch[0].trim() : null;
        
        const debugOutput = `Found ${hasMeals.length} meal markers and extracted ${meals.length} complete meals\nMeal titles: ${mealTitles.join(', ')}`;
        
        return (
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-fit-green-700 mb-6 flex items-center">
                <Utensils className="mr-3 h-6 w-6" />
                Nutrition Plan
              </h2>
              
              {calorieTarget && (
                <div className="mb-4 bg-fit-green-50 p-3 rounded-lg border-l-4 border-fit-green-500">
                  <p className="font-medium text-fit-green-800">
                    Daily Calories: <span className="font-bold">{calorieTarget} calories</span>
                  </p>
                </div>
              )}
              
              {meals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {meals.map((meal, idx) => {
                    const MealIcon = mealIcons[idx % mealIcons.length];
                    
                    return (
                      <div key={idx} className="bg-white rounded-lg shadow-sm border border-fit-neutral-100 overflow-hidden">
                        <div className="bg-fit-neutral-800 text-white p-3">
                          <h3 className="text-lg font-medium flex items-center">
                            <MealIcon className="mr-2 h-5 w-5" />
                            {meal.title}
                          </h3>
                        </div>
                        <div className="p-4">
                          <div className="mb-3">
                            <p className="text-xs text-fit-neutral-500 uppercase">Ingredients</p>
                            <p className="text-fit-neutral-800 font-medium">{meal.ingredients}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="bg-fit-neutral-50 p-2 rounded">
                              <p className="text-xs text-fit-neutral-500 uppercase">Calories</p>
                              <p className="text-fit-neutral-900 font-bold">{meal.calories}</p>
                            </div>
                            
                            <div className="bg-fit-neutral-50 p-2 rounded">
                              <p className="text-xs text-fit-neutral-500 uppercase">Macros</p>
                              <p className="text-fit-neutral-900 font-bold">{meal.macros}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // In case we found meal markers but couldn't extract complete meals
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        We found {hasMeals.length} meals but couldn't properly parse them. 
                        Displaying the plan in raw format below.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* If no meals were parsed correctly, display the raw content */}
              {meals.length === 0 && (
                <div className="prose">
                  {content.split('\n').map((line, i) => (
                    <p key={i} className="mb-2 text-gray-700">{line.trim()}</p>
                  ))}
                </div>
              )}
              
              {notes && (
                <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800">{notes}</p>
                </div>
              )}
            </div>
          </>
        );
      } else {
        // If we can't detect a specific format, just render as a fallback
        return (
          <div className="prose">
            {content.split('\n').map((line, i) => (
              <p key={i} className="mb-2 text-gray-700">{line.trim()}</p>
            ))}
          </div>
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container-85 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="h-8 w-8 text-fit-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">Your Personalized Plan</h1>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            {error ? (
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600">{error}</p>
                </div>
                {error.includes('fitness data') && (
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleUpdateProfile}
                      className="bg-fit-green-500 hover:bg-fit-green-600 text-white font-medium px-6 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow"
                    >
                      Complete Fitness Profile
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="prose max-w-none">
                {plan ? (
                  <div className="space-y-6">
                    {formatPlanContent(plan)}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-12 space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fit-green-600"></div>
                    <p className="text-gray-500">Loading your personalized plan...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default YourPlan;
