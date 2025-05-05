import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Clock, Award, Users, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Sustainable Results",
      description: "We focus on long-term success through sustainable habits, not quick fixes. Our approach creates lasting change."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "All our programs are created by certified professionals with years of experience in their respective fields."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalization",
      description: "We believe there's no one-size-fits-all approach to fitness. Every plan is tailored to your unique needs and goals."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Holistic Wellness",
      description: "We consider all aspects of health, from nutrition and exercise to recovery and mental wellbeing."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-fit-neutral-50 py-16 md:py-24">
        <div className="container-85 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 heading-gradient">
            Our Mission & Story
          </h1>
          <p className="text-lg md:text-xl text-fit-neutral-700 max-w-3xl mx-auto">
            At FitTargetHub, we're committed to providing personalized fitness and nutrition solutions that help you achieve your goals and transform your life.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-85">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our story" 
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold heading-gradient mb-6">Our Story</h2>
              <p className="text-fit-neutral-700 mb-4">
                FitTargetHub was founded in 2019 with a simple mission: to make personalized fitness and nutrition accessible to everyone. Our founder, Ahmed Mohamed Kamel, struggled for years trying to find a fitness solution that worked for his unique needs and busy schedule.
              </p>
              <p className="text-fit-neutral-700 mb-4">
                After transforming his own health through personalized nutrition and workout plans, Ahmed Mohamed Kamel assembled a team of top fitness and nutrition experts to create a platform that could provide the same level of customization to others.
              </p>
              <p className="text-fit-neutral-700">
                Today, FitTargetHub has helped thousands of members worldwide achieve their goals through science-based, personalized approaches to health and fitness. We're proud to be part of so many incredible transformation journeys.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 md:py-20 bg-fit-neutral-50">
        <div className="container-85">
          <h2 className="text-3xl font-bold heading-gradient mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-fit-neutral-100 hover:shadow-md transition-all duration-300 hover:border-fit-green-200">
                <div className="h-14 w-14 bg-fit-green-100 rounded-full flex items-center justify-center mb-5 text-fit-green-600 transform transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">{value.title}</h3>
                <p className="text-fit-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to join our community?"
        description="Start your fitness journey with guidance from our expert team."
        buttonText="Join Now"
      />
      
      <Footer />
    </>
  );
};

export default AboutUs;
