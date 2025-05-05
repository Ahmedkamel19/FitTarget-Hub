import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';
import { Separator } from '@/components/ui/separator';
import { Check, Apple, Calendar, Clock, ShoppingBag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from "axios";

const NutritionPlan: React.FC = () => {
  const features = [
    "Personalized meal plans based on your goals",
    "Weekly grocery lists to make shopping easy",
    "100+ healthy recipes tailored to your preferences",
    "Nutrition education and guidance",
    "Calorie and macronutrient tracking tools"
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
      <section className="bg-fit-green-50 py-16 md:py-24">
        <div className="container-85">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left md:pr-12">
              <span className="inline-block text-fit-green-600 font-semibold mb-3">FitTargetHub Nutrition Plan</span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                <span className="heading-gradient">Fuel Your Body,</span><br />
                <span className="heading-gradient">Achieve Your Goals</span>
              </h1>
              <p className="text-lg text-fit-neutral-700 mb-8">
                Our nutrition plans are carefully crafted by certified nutritionists, designed specifically for your goals, dietary preferences, and lifestyle needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button className="bg-fit-green-600 hover:bg-fit-green-700 text-white px-6">
                    Get Started Now
                  </Button>
                </Link>
                <Button variant="outline" className="border-fit-green-600 text-fit-green-700 hover:bg-fit-green-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthy meal preparation" 
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
            <h2 className="text-3xl font-bold heading-gradient mb-4">What's Included in Your Nutrition Plan</h2>
            <p className="text-fit-neutral-600 max-w-2xl mx-auto">
              Everything you need to transform your eating habits and fuel your body for optimal performance and health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Weekly Meal Plans</h3>
              <p className="text-fit-neutral-600">
                Get new meal plans every week based on your goals, preferences, and dietary restrictions. No more wondering what to eat.
              </p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Shopping Lists</h3>
              <p className="text-fit-neutral-600">
                We provide complete grocery lists for each week, making shopping simple and ensuring you have everything you need.
              </p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Recipe Collection</h3>
              <p className="text-fit-neutral-600">
                Access our extensive recipe database with detailed instructions, nutritional information, and meal prep tips.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detail Section */}
      <section className="py-16 bg-fit-neutral-50">
        <div className="container-85">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthy food preparation" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold heading-gradient mb-6">Why Choose Our Nutrition Plan?</h2>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-fit-green-500 mr-2 shrink-0" />
                    <span className="text-fit-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-fit-green-100">
                <div className="flex items-center mb-3">
                  <Apple className="h-6 w-6 text-fit-green-500 mr-2" />
                  <h4 className="font-semibold text-fit-neutral-800">Dietary Accommodations</h4>
                </div>
                <p className="text-fit-neutral-600 text-sm">
                  We accommodate all dietary needs including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, and more. Your meal plan will be fully customized to your specific needs.
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
            <h2 className="text-3xl font-bold heading-gradient mb-6">Start Your Nutrition Journey Today</h2>
            <p className="text-fit-neutral-600 mb-8">
              Join thousands who have transformed their eating habits with our personalized nutrition guidance.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-fit-green-100">
              <h3 className="text-2xl font-bold text-fit-neutral-800 mb-2">Nutrition Plan</h3>
              <div className="flex justify-center items-baseline my-4">
                <span className="text-4xl font-extrabold text-fit-green-600">$29.99</span>
                <span className="text-fit-neutral-600 ml-1">/month</span>
              </div>
              
              <Separator className="my-4" />
              
              <ul className="space-y-3 mb-6 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Weekly customized meal plans</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Complete grocery shopping lists</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Access to recipe database</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fit-green-500 mr-2 shrink-0" />
                  <span className="text-fit-neutral-700">Nutrition tracking tools</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-center mb-4 text-fit-neutral-600 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>14-day money-back guarantee</span>
              </div>
              
              <Button
                size="lg"
                className="w-full bg-fit-green-500 hover:bg-fit-green-600"
                onClick={() => createSession("price_1RKmkYBORf8IrdMNTvMxAzbS")}
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to transform your nutrition?"
        description="Join our nutrition plan today and start eating healthier, feeling better, and achieving your goals."
      />
      
      <Footer />
    </>
  );
};

export default NutritionPlan;
