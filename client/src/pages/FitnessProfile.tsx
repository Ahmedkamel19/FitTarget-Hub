import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FitnessForm from '@/components/FitnessForm';

const FitnessProfile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container-85 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 heading-gradient">Your Fitness Profile</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-8">
              Please fill out your fitness profile to get a personalized plan. This information helps us create a plan tailored to your specific needs and goals.
            </p>
            <FitnessForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FitnessProfile; 