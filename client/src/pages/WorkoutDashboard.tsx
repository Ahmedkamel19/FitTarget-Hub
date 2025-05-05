
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Dumbbell, BarChart3, Video, FileText, Download } from 'lucide-react';

const WorkoutDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-fit-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold heading-gradient mb-2">Workout Dashboard</h1>
              <p className="text-fit-neutral-600">
                Welcome back! Track your fitness progress, view your workouts, and access training resources.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center">
              <div className="bg-fit-lime-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-fit-lime-800">
                  <span className="font-bold">Plan:</span> Workout
                </span>
              </div>
              <Button variant="outline" size="sm" className="ml-4 text-fit-lime-700 border-fit-lime-300">
                Manage Subscription
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Weekly Workouts</CardTitle>
                <CardDescription>Progress this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-fit-neutral-800 mb-2">
                  3 <span className="text-sm text-fit-neutral-500 font-normal">/ 5 complete</span>
                </div>
                <Progress value={60} className="h-2 mb-2" />
                <div className="text-xs text-fit-neutral-500">
                  60% of weekly goal
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Strength Progress</CardTitle>
                <CardDescription>Since last month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-fit-neutral-800 mb-2">
                  +8% <span className="text-sm text-fit-green-500 font-normal">↑</span>
                </div>
                <Progress value={8} className="h-2 mb-2 bg-fit-neutral-200">
                  <div className="bg-fit-green-500 h-full" />
                </Progress>
                <div className="text-xs text-fit-neutral-500">
                  Good progress! Keep it up
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
                  <Calendar className="h-5 w-5 text-fit-lime-600 mr-2" />
                  <span className="text-fit-neutral-800 font-medium">June 18, 2023</span>
                </div>
                <div className="mt-3">
                  <Button variant="outline" size="sm" className="w-full text-fit-lime-700 border-fit-lime-300">
                    Schedule Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="workouts" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="workouts">Workouts</TabsTrigger>
              <TabsTrigger value="exercises">Exercise Library</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="workouts">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-fit-neutral-800">This Week's Workouts</h2>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-1" /> Download Plan
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Monday Workout */}
                  <Card className="border-fit-lime-200">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-fit-lime-100 mr-2">
                            <Dumbbell className="h-4 w-4 text-fit-lime-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">Upper Body Strength</CardTitle>
                            <CardDescription>Monday - 45 minutes</CardDescription>
                          </div>
                        </div>
                        <div className="bg-fit-green-100 px-3 py-1 rounded-full text-fit-green-700 text-xs font-medium">
                          Completed
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Push-ups</div>
                          <div className="text-xs text-fit-neutral-600">3 sets x 12 reps</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Dumbbell Rows</div>
                          <div className="text-xs text-fit-neutral-600">3 sets x 10 reps each side</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Shoulder Press</div>
                          <div className="text-xs text-fit-neutral-600">3 sets x 12 reps</div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm" variant="ghost" className="text-fit-lime-700">View Full Workout</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Wednesday Workout */}
                  <Card className="border-fit-lime-200">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-fit-lime-100 mr-2">
                            <Dumbbell className="h-4 w-4 text-fit-lime-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">Lower Body Strength</CardTitle>
                            <CardDescription>Wednesday - 50 minutes</CardDescription>
                          </div>
                        </div>
                        <div className="bg-fit-green-100 px-3 py-1 rounded-full text-fit-green-700 text-xs font-medium">
                          Completed
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Squats</div>
                          <div className="text-xs text-fit-neutral-600">4 sets x 12 reps</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Lunges</div>
                          <div className="text-xs text-fit-neutral-600">3 sets x 10 reps each leg</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Calf Raises</div>
                          <div className="text-xs text-fit-neutral-600">3 sets x 15 reps</div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm" variant="ghost" className="text-fit-lime-700">View Full Workout</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Friday Workout */}
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-fit-lime-100 mr-2">
                            <Dumbbell className="h-4 w-4 text-fit-lime-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">Full Body HIIT</CardTitle>
                            <CardDescription>Friday - 30 minutes</CardDescription>
                          </div>
                        </div>
                        <div className="bg-fit-neutral-100 px-3 py-1 rounded-full text-fit-neutral-700 text-xs font-medium">
                          Upcoming
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Jump Squats</div>
                          <div className="text-xs text-fit-neutral-600">4 sets x 45 seconds</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Mountain Climbers</div>
                          <div className="text-xs text-fit-neutral-600">4 sets x 45 seconds</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Burpees</div>
                          <div className="text-xs text-fit-neutral-600">4 sets x 10 reps</div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm" variant="ghost" className="text-fit-lime-700">View Full Workout</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Saturday Workout */}
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-fit-lime-100 mr-2">
                            <Dumbbell className="h-4 w-4 text-fit-lime-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">Core & Flexibility</CardTitle>
                            <CardDescription>Saturday - 40 minutes</CardDescription>
                          </div>
                        </div>
                        <div className="bg-fit-neutral-100 px-3 py-1 rounded-full text-fit-neutral-700 text-xs font-medium">
                          Upcoming
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Plank Variations</div>
                          <div className="text-xs text-fit-neutral-600">3 variations x 30 seconds each</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Russian Twists</div>
                          <div className="text-xs text-fit-neutral-600">3 sets x 20 reps</div>
                        </div>
                        <div className="bg-fit-neutral-50 p-3 rounded-md">
                          <div className="text-sm font-medium text-fit-neutral-800 mb-1">Yoga Flow</div>
                          <div className="text-xs text-fit-neutral-600">15 minute sequence</div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm" variant="ghost" className="text-fit-lime-700">View Full Workout</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="exercises">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-fit-neutral-800">Exercise Library</h2>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search exercises..." 
                      className="py-2 px-4 pr-10 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-fit-lime-300 focus:border-transparent"
                    />
                    <svg className="absolute right-3 top-2.5 h-5 w-5 text-fit-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <div className="h-40 bg-fit-neutral-200 rounded-t-lg flex items-center justify-center">
                      <Video className="h-12 w-12 text-fit-neutral-400" />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-semibold text-fit-neutral-800">Push-up Variations</h3>
                      <p className="text-xs text-fit-neutral-500 mt-1 mb-3">Chest, Shoulders, Triceps</p>
                      <Button size="sm" variant="outline" className="w-full text-fit-lime-700 border-fit-lime-300">
                        View Exercise
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <div className="h-40 bg-fit-neutral-200 rounded-t-lg flex items-center justify-center">
                      <Video className="h-12 w-12 text-fit-neutral-400" />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-semibold text-fit-neutral-800">Squat Form Guide</h3>
                      <p className="text-xs text-fit-neutral-500 mt-1 mb-3">Quadriceps, Hamstrings, Glutes</p>
                      <Button size="sm" variant="outline" className="w-full text-fit-lime-700 border-fit-lime-300">
                        View Exercise
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <div className="h-40 bg-fit-neutral-200 rounded-t-lg flex items-center justify-center">
                      <Video className="h-12 w-12 text-fit-neutral-400" />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-semibold text-fit-neutral-800">Plank Technique</h3>
                      <p className="text-xs text-fit-neutral-500 mt-1 mb-3">Core, Shoulders, Back</p>
                      <Button size="sm" variant="outline" className="w-full text-fit-lime-700 border-fit-lime-300">
                        View Exercise
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Exercises</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="progress">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-fit-neutral-800 mb-6">Your Progress</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-fit-neutral-800 mb-4">Strength Progress</h3>
                    <div className="h-64 bg-fit-neutral-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-12 w-12 text-fit-neutral-400" />
                      <span className="ml-2 text-fit-neutral-500">Progress chart visualization</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Workout Attendance</h4>
                        <span className="text-fit-lime-600 font-semibold">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Strength Gain</h4>
                        <span className="text-fit-lime-600 font-semibold">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Endurance Improvement</h4>
                        <span className="text-fit-lime-600 font-semibold">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-fit-neutral-800">Flexibility Progress</h4>
                        <span className="text-fit-lime-600 font-semibold">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-fit-neutral-800 mb-6">Training Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center">
                        <Video className="h-5 w-5 text-fit-lime-600 mr-2" />
                        <CardTitle className="text-lg">Proper Form Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-fit-neutral-600 mb-4">Master the correct form for all fundamental exercises to maximize results and prevent injury.</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Watch Videos
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-fit-lime-600 mr-2" />
                        <CardTitle className="text-lg">Recovery Guidelines</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-fit-neutral-600 mb-4">Learn essential recovery techniques to improve performance and reduce soreness.</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-1" /> Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center">
                        <Dumbbell className="h-5 w-5 text-fit-lime-600 mr-2" />
                        <CardTitle className="text-lg">Home Workout Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-fit-neutral-600 mb-4">No equipment? No problem! Discover effective workouts you can do anywhere.</p>
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

export default WorkoutDashboard;
