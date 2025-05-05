
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Utensils, BarChart3, ShoppingBag, FileText, Download } from 'lucide-react';

const NutritionDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-fit-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold heading-gradient mb-2">Nutrition Dashboard</h1>
              <p className="text-fit-neutral-600">
                Welcome back! Track your nutrition plan, view meal plans, and access resources.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center">
              <div className="bg-fit-green-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-fit-green-800">
                  <span className="font-bold">Plan:</span> Nutrition
                </span>
              </div>
              <Button variant="outline" size="sm" className="ml-4 text-fit-green-700 border-fit-green-300">
                Manage Subscription
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Daily Calories</CardTitle>
                <CardDescription>Progress today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-fit-neutral-800 mb-2">
                  1,450 <span className="text-sm text-fit-neutral-500 font-normal">/ 2,000</span>
                </div>
                <Progress value={72} className="h-2 mb-2" />
                <div className="text-xs text-fit-neutral-500">
                  72% of daily goal
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Water Intake</CardTitle>
                <CardDescription>Progress today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-fit-neutral-800 mb-2">
                  5 <span className="text-sm text-fit-neutral-500 font-normal">/ 8 glasses</span>
                </div>
                <Progress value={62.5} className="h-2 mb-2" />
                <div className="text-xs text-fit-neutral-500">
                  62.5% of daily goal
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Next Coach Check-in</CardTitle>
                <CardDescription>Mark your calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-fit-green-600 mr-2" />
                  <span className="text-fit-neutral-800 font-medium">June 15, 2023</span>
                </div>
                <div className="mt-3">
                  <Button variant="outline" size="sm" className="w-full text-fit-green-700 border-fit-green-300">
                    Schedule Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="meal-plan" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="meal-plan">Meal Plan</TabsTrigger>
              <TabsTrigger value="grocery-list">Grocery List</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="meal-plan">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-fit-neutral-800">This Week's Meal Plan</h2>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-1" /> Download PDF
                  </Button>
                </div>
                
                <div className="space-y-8">
                  {/* Monday */}
                  <div>
                    <h3 className="text-lg font-semibold text-fit-neutral-800 mb-3 pb-2 border-b">Monday</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <div className="p-2 rounded-md bg-fit-green-100 mr-2">
                              <Utensils className="h-4 w-4 text-fit-green-600" />
                            </div>
                            <CardTitle className="text-md">Breakfast</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <p className="font-medium text-fit-neutral-800">Greek Yogurt Parfait</p>
                          <p className="text-sm text-fit-neutral-600">Greek yogurt, mixed berries, honey, granola</p>
                          <div className="mt-2 text-xs text-fit-neutral-500">380 calories | 22g protein</div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <div className="p-2 rounded-md bg-fit-green-100 mr-2">
                              <Utensils className="h-4 w-4 text-fit-green-600" />
                            </div>
                            <CardTitle className="text-md">Lunch</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <p className="font-medium text-fit-neutral-800">Mediterranean Salad</p>
                          <p className="text-sm text-fit-neutral-600">Mixed greens, grilled chicken, feta, olives, vinaigrette</p>
                          <div className="mt-2 text-xs text-fit-neutral-500">450 calories | 35g protein</div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <div className="p-2 rounded-md bg-fit-green-100 mr-2">
                              <Utensils className="h-4 w-4 text-fit-green-600" />
                            </div>
                            <CardTitle className="text-md">Dinner</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <p className="font-medium text-fit-neutral-800">Baked Salmon</p>
                          <p className="text-sm text-fit-neutral-600">Baked salmon, quinoa, roasted vegetables</p>
                          <div className="mt-2 text-xs text-fit-neutral-500">520 calories | 40g protein</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Tuesday */}
                  <div>
                    <h3 className="text-lg font-semibold text-fit-neutral-800 mb-3 pb-2 border-b">Tuesday</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <div className="p-2 rounded-md bg-fit-green-100 mr-2">
                              <Utensils className="h-4 w-4 text-fit-green-600" />
                            </div>
                            <CardTitle className="text-md">Breakfast</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <p className="font-medium text-fit-neutral-800">Avocado Toast</p>
                          <p className="text-sm text-fit-neutral-600">Whole grain toast, avocado, poached eggs</p>
                          <div className="mt-2 text-xs text-fit-neutral-500">420 calories | 18g protein</div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <div className="p-2 rounded-md bg-fit-green-100 mr-2">
                              <Utensils className="h-4 w-4 text-fit-green-600" />
                            </div>
                            <CardTitle className="text-md">Lunch</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <p className="font-medium text-fit-neutral-800">Turkey Wrap</p>
                          <p className="text-sm text-fit-neutral-600">Whole grain wrap, turkey, spinach, hummus</p>
                          <div className="mt-2 text-xs text-fit-neutral-500">380 calories | 28g protein</div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <div className="p-2 rounded-md bg-fit-green-100 mr-2">
                              <Utensils className="h-4 w-4 text-fit-green-600" />
                            </div>
                            <CardTitle className="text-md">Dinner</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <p className="font-medium text-fit-neutral-800">Vegetable Stir Fry</p>
                          <p className="text-sm text-fit-neutral-600">Tofu, mixed vegetables, brown rice, teriyaki sauce</p>
                          <div className="mt-2 text-xs text-fit-neutral-500">490 calories | 25g protein</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* View More Button */}
                  <div className="text-center pt-4">
                    <Button variant="outline">View Full Week Plan</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="grocery-list">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-fit-neutral-800">This Week's Grocery List</h2>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-1" /> Download List
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Produce</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <input type="checkbox" id="item1" className="h-4 w-4 mr-2" />
                          <label htmlFor="item1" className="text-fit-neutral-700">Spinach (1 bag)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item2" className="h-4 w-4 mr-2" />
                          <label htmlFor="item2" className="text-fit-neutral-700">Avocados (3)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item3" className="h-4 w-4 mr-2" />
                          <label htmlFor="item3" className="text-fit-neutral-700">Bell peppers (2 red, 1 green)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item4" className="h-4 w-4 mr-2" />
                          <label htmlFor="item4" className="text-fit-neutral-700">Broccoli (1 head)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item5" className="h-4 w-4 mr-2" />
                          <label htmlFor="item5" className="text-fit-neutral-700">Berries (mixed, 1 container)</label>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Protein</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <input type="checkbox" id="item6" className="h-4 w-4 mr-2" />
                          <label htmlFor="item6" className="text-fit-neutral-700">Chicken breast (1 lb)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item7" className="h-4 w-4 mr-2" />
                          <label htmlFor="item7" className="text-fit-neutral-700">Salmon fillets (2)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item8" className="h-4 w-4 mr-2" />
                          <label htmlFor="item8" className="text-fit-neutral-700">Greek yogurt (32 oz)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item9" className="h-4 w-4 mr-2" />
                          <label htmlFor="item9" className="text-fit-neutral-700">Eggs (1 dozen)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item10" className="h-4 w-4 mr-2" />
                          <label htmlFor="item10" className="text-fit-neutral-700">Tofu (1 package, firm)</label>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Grains & Other</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <input type="checkbox" id="item11" className="h-4 w-4 mr-2" />
                          <label htmlFor="item11" className="text-fit-neutral-700">Quinoa (1 bag)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item12" className="h-4 w-4 mr-2" />
                          <label htmlFor="item12" className="text-fit-neutral-700">Whole grain bread (1 loaf)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item13" className="h-4 w-4 mr-2" />
                          <label htmlFor="item13" className="text-fit-neutral-700">Brown rice (1 bag)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item14" className="h-4 w-4 mr-2" />
                          <label htmlFor="item14" className="text-fit-neutral-700">Olive oil (check supply)</label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="item15" className="h-4 w-4 mr-2" />
                          <label htmlFor="item15" className="text-fit-neutral-700">Granola (1 package)</label>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="progress">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-fit-neutral-800 mb-6">Your Progress</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-fit-neutral-800 mb-4">Monthly Progress</h3>
                    <div className="h-64 bg-fit-neutral-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-12 w-12 text-fit-neutral-400" />
                      <span className="ml-2 text-fit-neutral-500">Progress chart visualization</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Meal Plan Adherence</h4>
                        <span className="text-fit-green-600 font-semibold">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Water Intake Goal</h4>
                        <span className="text-fit-green-600 font-semibold">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Calorie Target</h4>
                        <span className="text-fit-green-600 font-semibold">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Protein Goal</h4>
                        <span className="text-fit-green-600 font-semibold">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-fit-neutral-800 mb-6">Nutrition Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center">
                        <ShoppingBag className="h-5 w-5 text-fit-green-600 mr-2" />
                        <CardTitle className="text-lg">Shopping Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-fit-neutral-600 mb-4">Learn how to navigate grocery stores efficiently and select the best ingredients.</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-1" /> Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-fit-green-600 mr-2" />
                        <CardTitle className="text-lg">Recipe Collection</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-fit-neutral-600 mb-4">Access our complete collection of healthy, delicious recipes for any occasion.</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Recipes
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center">
                        <Utensils className="h-5 w-5 text-fit-green-600 mr-2" />
                        <CardTitle className="text-lg">Meal Prep 101</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-fit-neutral-600 mb-4">Master the art of efficient meal preparation with our comprehensive guide.</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Read Guide
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NutritionDashboard;
