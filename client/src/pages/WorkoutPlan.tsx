import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';
import { Separator } from '@/components/ui/separator';
import { Check, Dumbbell, Video, BarChart3, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from "axios";

const WorkoutPlan: React.FC = () => {
  const features = [
    "Personalized workout routines based on your goals and fitness level",
    "Video demonstrations of all exercises with proper form guidance",
    "Progress tracking to monitor your improvements",
    "Quarterly fitness assessments to adjust your program",
    "Access to our comprehensive workout library"
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
      <section className="bg-fit-lime-50 py-16 md:py-24">
        <div className="container-85">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left md:pr-12">
              <span className="inline-block text-fit-lime-600 font-semibold mb-3">FitTargetHub Workout Plan</span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                <span className="heading-gradient">Train Smarter,</span><br />
                <span className="heading-gradient">Get Stronger</span>
              </h1>
              <p className="text-lg text-fit-neutral-700 mb-8">
                Expert-designed workout programs tailored to your fitness level, goals, and available equipment. No guesswork, just results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button className="bg-fit-lime-600 hover:bg-fit-lime-700 text-white px-6">
                    Start Training Now
                  </Button>
                </Link>
                <Button variant="outline" className="border-fit-lime-600 text-fit-lime-700 hover:bg-fit-lime-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Person working out" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Plan Features */}
      <section className="py-16 bg-white">
        <div className="container-85">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-gradient mb-4">What's Included in Your Workout Plan</h2>
            <p className="text-fit-neutral-600 max-w-2xl mx-auto">
              Everything you need to transform your fitness and achieve your physical goals, whether you're a beginner or experienced.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-fit-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Tailored Workout Programs</h3>
              <p className="text-fit-neutral-600">
                Receive customized workout routines designed specifically for your fitness level, goals, and available equipment.
              </p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-fit-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Video Demonstrations</h3>
              <p className="text-fit-neutral-600">
                Learn proper form with HD video demonstrations of each exercise to maximize results and prevent injury.
              </p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-fit-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Progress Tracking</h3>
              <p className="text-fit-neutral-600">
                Monitor your improvements with intuitive tracking tools that show your progress over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detail Section */}
      <section className="py-16 bg-fit-neutral-50">
        <div className="container-85">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Person working out" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold heading-gradient mb-6">Why Choose Our Workout Plan?</h2>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-fit-lime-500 mr-2 shrink-0" />
                    <span className="text-fit-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-fit-lime-100">
                <div className="flex items-center mb-3">
                  <Dumbbell className="h-6 w-6 text-fit-lime-500 mr-2" />
                  <h4 className="font-semibold text-fit-neutral-800">Equipment Flexibility</h4>
                </div>
                <p className="text-fit-neutral-600 text-sm">
                  Whether you work out at home with minimal equipment or at a fully-stocked gym, we'll create plans that work with what you have available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container-85">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold heading-gradient mb-6">Start Your Fitness Journey Today</h2>
            <p className="text-fit-neutral-600 mb-8">
              Join thousands who have transformed their bodies with our expert-designed workout programs.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-fit-lime-100">
              <h3 className="text-2xl font-bold text-fit-neutral-800 mb-2">Workout Plan</h3>
              <div className="flex justify-center items-baseline my-4">
                <span className="text-4xl font-extrabold text-fit-lime-600">$29.99</span>
                <span className="text-fit-neutral-600 ml-1">/month</span>
              </div>
              
              <Separator className="my-4" />
              
              <ul className="space-y-3 mb-6 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-lime-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Personalized workout routines</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-lime-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Video exercise demonstrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-lime-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Progress tracking tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-lime-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Access to workout library</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-center mb-4 text-fit-neutral-600 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>14-day money-back guarantee</span>
              </div>
              
              <Button
                size="lg"
                className="w-full bg-fit-lime-600 hover:bg-fit-lime-700"
                onClick={() => createSession("price_1RKmmqBORf8IrdMNCqaTaX6Z")}
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to transform your fitness?"
        description="Join our workout plan today and start building strength, improving endurance, and achieving your physical goals."
        bgClass="bg-gradient-to-r from-fit-lime-600 to-fit-green-500"
      />
      
      <Footer />
    </>
  );
};

export default WorkoutPlan;
