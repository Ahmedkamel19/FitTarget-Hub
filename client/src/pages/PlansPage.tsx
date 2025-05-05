import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import axios from "axios";

const PlansPage: React.FC = () => {
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
      
      {/* Page Header */}
      <div className="bg-fit-green-50 py-12 md:py-24">
        <div className="container-85 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 heading-gradient">
            Choose Your Plan
          </h1>
          <p className="text-lg md:text-xl text-fit-neutral-700 max-w-3xl mx-auto">
            Each plan is tailored to help you achieve your unique fitness goals and transform your lifestyle.
          </p>
        </div>
      </div>
      
      {/* Plan Comparison Section */}
      <section className="section-padding bg-white">
        <div className="container-85">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nutrition Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h1 className="text-2xl font-bold mb-4">Nutrition Plan</h1>
              <div className="mb-6">
                <span className="text-3xl font-bold">$29.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-fit-green-500 hover:bg-fit-green-600"
                  onClick={() => createSession("price_1RKmkYBORf8IrdMNTvMxAzbS")}
                >
                  Buy now
                </Button>
                <Link to="/plans/nutrition" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-fit-green-500 text-fit-green-600 hover:bg-fit-green-50"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Workout Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h1 className="text-2xl font-bold mb-4">Workout Plan</h1>
              <div className="mb-6">
                <span className="text-3xl font-bold">$29.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-fit-green-500 hover:bg-fit-green-600"
                  onClick={() => createSession("price_1RKmmqBORf8IrdMNCqaTaX6Z")}
                >
                  Buy now
                </Button>
                <Link to="/plans/workout" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-fit-green-500 text-fit-green-600 hover:bg-fit-green-50"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>

            {/* All-In-One Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h1 className="text-2xl font-bold mb-4">All-In-One Plan</h1>
              <div className="mb-6">
                <span className="text-3xl font-bold">$49.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-fit-green-500 hover:bg-fit-green-600"
                  onClick={() => createSession("price_1RKmpyBORf8IrdMNxFxSoQQM")}
                >
                  Buy now
                </Button>
                <Link to="/plans/all-in-one" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-fit-green-500 text-fit-green-600 hover:bg-fit-green-50"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plans Description Section */}
      <section className="py-16 bg-gradient-to-b from-fit-green-50 to-white">
        <div className="container-85">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold heading-gradient mb-4">Understanding Our Plans</h2>
            <p className="text-lg text-fit-neutral-700">
              Each plan is carefully designed to help you achieve specific fitness goals. Choose the one that best matches your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fit-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Nutrition Plan</h3>
              <p className="text-fit-neutral-600 mb-4">
                Focused on dietary guidance and meal planning to help you eat better and reach your nutritional goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-green-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Personalized meal plans</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-green-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Calorie and macro tracking</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-green-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Recipe recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-fit-neutral-100">
              <div className="h-12 w-12 bg-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fit-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Workout Plan</h3>
              <p className="text-fit-neutral-600 mb-4">
                Tailored exercise regimens designed to improve strength, endurance, and overall fitness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-lime-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Custom workout routines</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-lime-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Exercise techniques & form</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-lime-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Progress tracking tools</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-fit-green-300 relative">
              <div className="absolute -top-3 right-6 bg-fit-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Best Value
              </div>
              <div className="h-12 w-12 bg-gradient-to-br from-fit-green-100 to-fit-lime-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fit-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">All-In-One Plan</h3>
              <p className="text-fit-neutral-600 mb-4">
                The complete fitness solution combining nutrition, exercise, and personalized coaching.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-green-600 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700"><strong>Everything</strong> in both plans</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-green-600 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">1:1 coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-green-600 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Priority 24/7 support</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fit-green-600 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-fit-neutral-700">Premium content access</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-fit-neutral-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 heading-gradient">How to Choose the Right Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-fit-neutral-800 mb-2">Choose the Nutrition Plan if:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="text-fit-green-500 mr-2">•</span>
                    <span>Your primary focus is improving your diet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fit-green-500 mr-2">•</span>
                    <span>You already have a workout routine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fit-green-500 mr-2">•</span>
                    <span>You need help with meal planning and recipes</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-fit-neutral-800 mb-2">Choose the Workout Plan if:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="text-fit-lime-500 mr-2">•</span>
                    <span>You want to focus on exercise and fitness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fit-lime-500 mr-2">•</span>
                    <span>You already manage your nutrition well</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fit-lime-500 mr-2">•</span>
                    <span>You need structured workout guidance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-fit-neutral-800 mb-2">Choose the All-In-One Plan if:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="text-fit-green-600 mr-2">•</span>
                    <span>You want a complete fitness transformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fit-green-600 mr-2">•</span>
                    <span>You value personalized expert guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fit-green-600 mr-2">•</span>
                    <span>You want the best value and most features</span>
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

export default PlansPage;
