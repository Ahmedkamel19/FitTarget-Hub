
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Activity, BarChart3, Video, FileText, Download, MessagesSquare, Utensils, Dumbbell } from 'lucide-react';

const AllInOneDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-fit-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold heading-gradient mb-2">All-In-One Dashboard</h1>
              <p className="text-fit-neutral-600">
                Welcome back! Your complete fitness and nutrition hub is ready.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center">
              <div className="bg-gradient-to-r from-fit-green-100 to-fit-lime-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-fit-green-800">
                  <span className="font-bold">Plan:</span> All-In-One
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
                <CardTitle className="text-lg">Overall Progress</CardTitle>
                <CardDescription>This month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-fit-neutral-800 mb-2">
                  87% <span className="text-sm text-fit-green-500 font-normal">↑</span>
                </div>
                <Progress value={87} className="h-2 mb-2" />
                <div className="text-xs text-fit-neutral-500">
                  Great job! You're on track
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Next 1:1 Coaching</CardTitle>
                <CardDescription>Mark your calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-fit-green-600 mr-2" />
                  <span className="text-fit-neutral-800 font-medium">June 12, 2023 - 2:00 PM</span>
                </div>
                <div className="mt-3">
                  <Button variant="outline" size="sm" className="w-full text-fit-green-700 border-fit-green-300">
                    Change Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Goal Completion</CardTitle>
                <CardDescription>Towards target weight</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-fit-neutral-800 mb-2">
                  65% <span className="text-sm text-fit-green-500 font-normal">↑</span>
                </div>
                <Progress value={65} className="h-2 mb-2" />
                <div className="text-xs text-fit-neutral-500">
                  7 lbs to go. Keep it up!
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="workouts">Workouts</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="coaching">Coaching</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Today's Plan */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Today's Plan</CardTitle>
                    <CardDescription>Wednesday, June 10</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-fit-green-50 p-4 rounded-lg border border-fit-green-100">
                      <div className="flex items-center mb-2">
                        <Utensils className="h-5 w-5 text-fit-green-600 mr-2" />
                        <h3 className="font-medium text-fit-neutral-800">Nutrition</h3>
                      </div>
                      <div className="space-y-2 pl-7">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-fit-green-400 mr-2"></div>
                          <span className="text-sm text-fit-neutral-700">Breakfast: Greek Yogurt Parfait</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-fit-green-400 mr-2"></div>
                          <span className="text-sm text-fit-neutral-700">Lunch: Mediterranean Salad</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-fit-green-400 mr-2"></div>
                          <span className="text-sm text-fit-neutral-700">Dinner: Baked Salmon with Quinoa</span>
                        </div>
                      </div>
                      <div className="mt-2 text-right">
                        <Button variant="ghost" size="sm" className="text-xs text-fit-green-600">
                          View Meal Plan
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-fit-lime-50 p-4 rounded-lg border border-fit-lime-100">
                      <div className="flex items-center mb-2">
                        <Dumbbell className="h-5 w-5 text-fit-lime-600 mr-2" />
                        <h3 className="font-medium text-fit-neutral-800">Workout</h3>
                      </div>
                      <div className="pl-7">
                        <p className="text-sm text-fit-neutral-700 mb-2">
                          <span className="font-medium">Lower Body Strength</span> - 50 minutes
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-fit-lime-400 mr-2"></div>
                            <span className="text-sm text-fit-neutral-700">Squats: 4 sets x 12 reps</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-fit-lime-400 mr-2"></div>
                            <span className="text-sm text-fit-neutral-700">Lunges: 3 sets x 10 reps each leg</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-fit-lime-400 mr-2"></div>
                            <span className="text-sm text-fit-neutral-700">Calf Raises: 3 sets x 15 reps</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-right">
                        <Button variant="ghost" size="sm" className="text-xs text-fit-lime-600">
                          View Full Workout
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Weekly Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Weekly Summary</CardTitle>
                    <CardDescription>June 4 - June 10</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-fit-neutral-700">Workouts Completed</span>
                          <span className="text-sm font-medium text-fit-green-600">4/5</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-fit-neutral-700">Nutrition Plan Adherence</span>
                          <span className="text-sm font-medium text-fit-green-600">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-fit-neutral-700">Water Intake</span>
                          <span className="text-sm font-medium text-fit-green-600">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-fit-neutral-700">Sleep Quality</span>
                          <span className="text-sm font-medium text-fit-green-600">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      
                      <div className="pt-2">
                        <h3 className="text-sm font-medium text-fit-neutral-800 mb-2">Notes from Your Coach</h3>
                        <div className="bg-fit-neutral-100 p-3 rounded-lg text-sm text-fit-neutral-700">
                          Great progress this week! Your consistency with workouts is paying off. Let's focus on improving sleep quality this coming week. Try the relaxation technique we discussed.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Upcoming Schedule */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Schedule</CardTitle>
                    <CardDescription>Next 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-2 bg-fit-neutral-50 rounded-lg">
                        <div className="w-16 h-16 bg-fit-green-100 rounded-lg flex flex-col items-center justify-center mr-3">
                          <span className="text-xs text-fit-green-800">THU</span>
                          <span className="text-lg font-bold text-fit-green-800">11</span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <Dumbbell className="h-4 w-4 text-fit-lime-600 mr-1" />
                            <span className="text-sm font-medium text-fit-neutral-800">Rest Day</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Utensils className="h-4 w-4 text-fit-green-600 mr-1" />
                            <span className="text-sm text-fit-neutral-700">Regular Nutrition Plan</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-2 bg-fit-neutral-50 rounded-lg">
                        <div className="w-16 h-16 bg-fit-green-100 rounded-lg flex flex-col items-center justify-center mr-3">
                          <span className="text-xs text-fit-green-800">FRI</span>
                          <span className="text-lg font-bold text-fit-green-800">12</span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <Dumbbell className="h-4 w-4 text-fit-lime-600 mr-1" />
                            <span className="text-sm font-medium text-fit-neutral-800">Full Body HIIT - 30 min</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Utensils className="h-4 w-4 text-fit-green-600 mr-1" />
                            <span className="text-sm text-fit-neutral-700">High Protein Day</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <MessagesSquare className="h-4 w-4 text-fit-green-600 mr-1" />
                            <span className="text-sm font-medium text-fit-neutral-800">1:1 Coaching - 2:00 PM</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-2 bg-fit-neutral-50 rounded-lg">
                        <div className="w-16 h-16 bg-fit-green-100 rounded-lg flex flex-col items-center justify-center mr-3">
                          <span className="text-xs text-fit-green-800">SAT</span>
                          <span className="text-lg font-bold text-fit-green-800">13</span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <Dumbbell className="h-4 w-4 text-fit-lime-600 mr-1" />
                            <span className="text-sm font-medium text-fit-neutral-800">Core & Flexibility - 40 min</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Utensils className="h-4 w-4 text-fit-green-600 mr-1" />
                            <span className="text-sm text-fit-neutral-700">Regular Nutrition Plan</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" size="sm" className="text-fit-green-700">
                        View Full Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Premium Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Premium Resources</CardTitle>
                    <CardDescription>Exclusive content for All-In-One members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-fit-green-50 p-4 rounded-lg border border-fit-green-100">
                        <div className="flex items-center mb-2">
                          <FileText className="h-5 w-5 text-fit-green-600 mr-2" />
                          <h3 className="font-medium text-fit-neutral-800">Stress Management Guide</h3>
                        </div>
                        <p className="text-xs text-fit-neutral-600 mb-3">
                          Learn techniques to manage stress and improve recovery.
                        </p>
                        <Button size="sm" variant="outline" className="w-full text-xs">View Guide</Button>
                      </div>
                      
                      <div className="bg-fit-lime-50 p-4 rounded-lg border border-fit-lime-100">
                        <div className="flex items-center mb-2">
                          <Video className="h-5 w-5 text-fit-lime-600 mr-2" />
                          <h3 className="font-medium text-fit-neutral-800">Advanced Technique Videos</h3>
                        </div>
                        <p className="text-xs text-fit-neutral-600 mb-3">
                          Master complex exercises with our detailed tutorials.
                        </p>
                        <Button size="sm" variant="outline" className="w-full text-xs">Watch Videos</Button>
                      </div>
                      
                      <div className="bg-fit-neutral-50 p-4 rounded-lg border border-fit-neutral-100">
                        <div className="flex items-center mb-2">
                          <Utensils className="h-5 w-5 text-fit-neutral-600 mr-2" />
                          <h3 className="font-medium text-fit-neutral-800">Gourmet Recipe Collection</h3>
                        </div>
                        <p className="text-xs text-fit-neutral-600 mb-3">
                          Premium healthy recipes for special occasions.
                        </p>
                        <Button size="sm" variant="outline" className="w-full text-xs">View Recipes</Button>
                      </div>
                      
                      <div className="bg-fit-neutral-50 p-4 rounded-lg border border-fit-neutral-100">
                        <div className="flex items-center mb-2">
                          <Activity className="h-5 w-5 text-fit-neutral-600 mr-2" />
                          <h3 className="font-medium text-fit-neutral-800">Recovery Protocols</h3>
                        </div>
                        <p className="text-xs text-fit-neutral-600 mb-3">
                          Optimize your recovery with these expert techniques.
                        </p>
                        <Button size="sm" variant="outline" className="w-full text-xs">Learn More</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="nutrition">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-fit-neutral-800">Nutrition Plan</h2>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-1" /> Download Plan
                  </Button>
                </div>
                
                {/* Similar to NutritionDashboard content */}
                <p className="text-center text-fit-neutral-600">
                  The nutrition section contains your meal plans, grocery lists, and nutrition tracking.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="workouts">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-fit-neutral-800">Workout Plan</h2>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-1" /> Download Plan
                  </Button>
                </div>
                
                {/* Similar to WorkoutDashboard content */}
                <p className="text-center text-fit-neutral-600">
                  The workout section contains your training schedule, exercise library, and fitness tracking.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="progress">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-fit-neutral-800 mb-6">Your Progress</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-fit-neutral-800 mb-4">Comprehensive Progress</h3>
                    <div className="h-64 bg-fit-neutral-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-12 w-12 text-fit-neutral-400" />
                      <span className="ml-2 text-fit-neutral-500">Progress chart visualization</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Weight Progress</h4>
                        <span className="text-fit-green-600 font-semibold">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Strength Gain</h4>
                        <span className="text-fit-green-600 font-semibold">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Body Composition</h4>
                        <span className="text-fit-green-600 font-semibold">58%</span>
                      </div>
                      <Progress value={58} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Overall Fitness Level</h4>
                        <span className="text-fit-green-600 font-semibold">70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="coaching">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-fit-neutral-800 mb-6">1:1 Coaching</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Your Coach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="h-16 w-16 rounded-full bg-fit-neutral-200 mr-4"></div>
                        <div>
                          <h3 className="font-semibold text-fit-neutral-800">Michael Rodriguez</h3>
                          <p className="text-sm text-fit-neutral-600">Certified Strength Coach & Nutritionist</p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline" className="text-fit-green-700 border-fit-green-300 text-xs">
                              <MessagesSquare className="h-3 w-3 mr-1" /> Send Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Upcoming Session</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <Calendar className="h-5 w-5 text-fit-green-600 mr-2" />
                        <div>
                          <span className="text-fit-neutral-800 font-medium">Friday, June 12, 2023</span>
                          <p className="text-sm text-fit-neutral-600">2:00 PM - 2:30 PM (Eastern Time)</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button size="sm" className="w-full bg-fit-green-600 hover:bg-fit-green-700">
                          Join Session
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          Reschedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Coaching Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-fit-neutral-50 p-4 rounded-lg border border-fit-neutral-100">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-semibold text-fit-neutral-800">Last Session Summary</span>
                            <span className="text-xs text-fit-neutral-500">June 5, 2023</span>
                          </div>
                          <p className="text-sm text-fit-neutral-700">
                            We discussed your progress with the lower body strength workouts and made adjustments to your squat form. Your nutrition plan is working well, but we added more protein to your breakfast to help with muscle recovery. Continue focusing on hydration throughout the day.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-fit-neutral-800 mb-2">Topics for Next Session</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-fit-green-100 flex items-center justify-center text-fit-green-700 text-xs mr-2 mt-0.5">1</div>
                              <span className="text-sm text-fit-neutral-700">Review of your progress photos and measurements</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-fit-green-100 flex items-center justify-center text-fit-green-700 text-xs mr-2 mt-0.5">2</div>
                              <span className="text-sm text-fit-neutral-700">Adjustments to your workout intensity based on strength gains</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-fit-green-100 flex items-center justify-center text-fit-green-700 text-xs mr-2 mt-0.5">3</div>
                              <span className="text-sm text-fit-neutral-700">Discussion about sleep quality improvement strategies</span>
                            </li>
                          </ul>
                        </div>
                      </div>
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

export default AllInOneDashboard;
