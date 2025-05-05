import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';
import { Separator } from '@/components/ui/separator';
import { Check, Activity, MessagesSquare, Clock, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from "axios";

const AllInOnePlan: React.FC = () => {
  const features = [
    "Everything in both Nutrition and Workout plans combined",
    "Monthly 1:1 coaching sessions with certified fitness experts",
    "Premium recipe collection including gourmet healthy options",
    "Exclusive content including specialized workouts and guides",
    "Priority support with 24-hour response guarantee",
    "Monthly progress reports with personalized adjustments"
  ];

  const createSession = async (priceId: string) => {
    const token = localStorage.getItem('token');
    
    const { data: response } = await axios.post(
      "http://localhost:3000/subs/session",
      {
        priceId,
      },
      {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      }
    );
    
    window.location.href = response.url;
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fit-green-50 to-fit-lime-50 py-16 md:py-24">
        <div className="container-85">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left md:pr-12">
              <span className="inline-block bg-gradient-to-r from-fit-green-600 to-fit-lime-600 text-white font-semibold px-4 py-1 rounded-full mb-3">Premium Plan</span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                <span className="heading-gradient">The Complete</span><br />
                <span className="heading-gradient">Fitness Solution</span>
              </h1>
              <p className="text-lg text-fit-neutral-700 mb-8">
                Get the best of both worlds with our All-In-One Plan. Expertly designed workouts and nutrition plans working together to maximize your results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-fit-green-600 to-fit-lime-600 hover:from-fit-green-700 hover:to-fit-lime-700 text-white px-8">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-fit-lime-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-fit-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="FitTargetHub All-In-One Plan"
                  className="relative rounded-xl shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plan Features */}
      <section className="py-16 bg-white">
        <div className="container-85">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-gradient mb-4">The Ultimate Fitness Experience</h2>
            <p className="text-fit-neutral-600 max-w-2xl mx-auto">
              Our All-In-One Plan combines nutrition expertise and workout guidance for a comprehensive approach to health and fitness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-gradient-to-br from-fit-green-100 to-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Integrated Approach</h3>
              <p className="text-fit-neutral-600">
                Experience the power of synchronized nutrition and fitness plans working together to maximize your results.
              </p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-gradient-to-br from-fit-green-100 to-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <MessagesSquare className="h-6 w-6 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">1:1 Expert Coaching</h3>
              <p className="text-fit-neutral-600">
                Monthly private coaching sessions with certified fitness professionals to review progress and refine your strategy.
              </p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-gradient-to-br from-fit-green-100 to-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Premium Content</h3>
              <p className="text-fit-neutral-600">
                Exclusive access to our premium recipes, specialized workouts, and advanced fitness resources.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Compare Plans */}
      <section className="py-16 bg-fit-neutral-50">
        <div className="container-85">
          <h2 className="text-3xl font-bold heading-gradient mb-12 text-center">Everything You Need, In One Plan</h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="font-semibold text-fit-neutral-800">Features</div>
                <div className="font-semibold text-center text-fit-green-700">Nutrition Plan</div>
                <div className="font-semibold text-center text-fit-lime-700">Workout Plan</div>
                <div className="font-semibold text-center text-fit-green-800">All-In-One Plan</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 bg-white p-3 rounded-lg mb-2">
                <div>Personalized Plans</div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-500" /></div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-lime-500" /></div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-800" /></div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 bg-white p-3 rounded-lg mb-2">
                <div>Progress Tracking</div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-500" /></div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-lime-500" /></div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-800" /></div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 bg-white p-3 rounded-lg mb-2">
                <div>1:1 Coaching Sessions</div>
                <div className="text-center">—</div>
                <div className="text-center">—</div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-800" /></div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 bg-white p-3 rounded-lg mb-2">
                <div>Premium Recipe Collection</div>
                <div className="text-center">—</div>
                <div className="text-center">—</div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-800" /></div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 bg-white p-3 rounded-lg mb-2">
                <div>Priority Support</div>
                <div className="text-center">—</div>
                <div className="text-center">—</div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-800" /></div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 bg-white p-3 rounded-lg mb-2">
                <div>Monthly Progress Reports</div>
                <div className="text-center">—</div>
                <div className="text-center">—</div>
                <div className="text-center"><Check className="mx-auto h-5 w-5 text-fit-green-800" /></div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 p-3">
                <div className="font-semibold">Monthly Price</div>
                <div className="text-center">$29.99</div>
                <div className="text-center">$29.99</div>
                <div className="text-center font-semibold text-fit-green-800">$49.99<br /><span className="text-xs text-fit-neutral-600">Save $10/month</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detail Section */}
      <section className="py-16 bg-white">
        <div className="container-85">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Personal training session" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold heading-gradient mb-6">Why Choose Our All-In-One Plan?</h2>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-fit-green-500 mr-2 shrink-0" />
                    <span className="text-fit-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-fit-neutral-50 rounded-lg border border-fit-neutral-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-6 w-6 text-fit-green-500 mr-2" />
                  <h4 className="font-semibold text-fit-neutral-800">Synchronized Planning</h4>
                </div>
                <p className="text-fit-neutral-600 text-sm">
                  Our all-in-one approach ensures your nutrition and workout plans work together in perfect harmony, maximizing your results and minimizing plateaus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-fit-neutral-50">
        <div className="container-85">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold heading-gradient mb-6">Start Your Complete Transformation</h2>
            <p className="text-fit-neutral-600 mb-8">
              Join our premium plan and get everything you need to transform your fitness, nutrition, and lifestyle.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-fit-green-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fit-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </div>
              
              <h3 className="text-2xl font-bold text-fit-neutral-800 mb-2">All-In-One Plan</h3>
              <div className="flex justify-center items-baseline my-4">
                <span className="text-4xl font-extrabold text-fit-green-600">$49.99</span>
                <span className="text-fit-neutral-600 ml-1">/month</span>
              </div>
              
              <Separator className="my-4" />
              
              <ul className="space-y-3 mb-6 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Complete nutrition & workout plans</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Monthly 1:1 coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Premium exclusive content</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Priority support 24/7</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-center mb-4 text-fit-neutral-600 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>14-day money-back guarantee</span>
              </div>
              
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-fit-green-500 hover:bg-fit-green-600"
                  onClick={() => createSession("price_1RKmpyBORf8IrdMNxFxSoQQM")}
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready for a complete transformation?"
        description="Get the ultimate fitness and nutrition package and start your journey to a healthier, stronger you today."
        bgClass="bg-gradient-to-r from-fit-green-700 to-fit-lime-600"
      />
      
      <Footer />
    </>
  );
};

export default AllInOnePlan;
