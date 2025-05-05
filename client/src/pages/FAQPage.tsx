import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const generalFaqs = [
    {
      question: "How does FitTargetHub work?",
      answer: "FitTargetHub provides personalized fitness and nutrition plans based on your goals, preferences, and lifestyle. After signing up, you'll complete a detailed assessment, and our experts will create customized plans for you. You'll receive weekly updates to your plan, along with tools to track your progress."
    },
    {
      question: "Is FitTargetHub suitable for beginners?",
      answer: "Absolutely! Our plans are designed for all fitness levels, from complete beginners to advanced athletes. We adjust the intensity and complexity based on your experience level and gradually progress as you improve."
    },
    {
      question: "How much time do I need to commit each week?",
      answer: "The time commitment varies based on your goals and the plan you choose. Workout plans typically require 3-5 sessions per week, ranging from 30-60 minutes each. Nutrition plans involve some meal prep time, but we provide quick recipes and time-saving tips to make it manageable for busy schedules."
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can change your plan at any time. If you start with the Nutrition Plan and want to add workouts later, you can easily upgrade to the All-In-One Plan. Any changes will be prorated and reflected in your next billing cycle."
    },
    {
      question: "Do you offer a free trial?",
      answer: "While we don't offer a free trial of our paid plans, we do provide free resources like sample meal plans and workout guides to give you a taste of what we offer. Additionally, all plans come with a 14-day money-back guarantee if you're not satisfied."
    }
  ];
  
  const nutritionFaqs = [
    {
      question: "How customized are the meal plans?",
      answer: "Our meal plans are highly customized to your preferences, dietary restrictions, and goals. We take into account factors like allergies, food preferences, cooking skills, and time constraints to create plans that work for your lifestyle."
    },
    {
      question: "Can I follow the nutrition plan if I have dietary restrictions?",
      answer: "Yes, we accommodate various dietary restrictions including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, and more. During your initial assessment, you'll provide details about your dietary needs, and we'll create plans that align with those requirements."
    },
    {
      question: "Will I need to buy special foods or supplements?",
      answer: "No, our nutrition plans focus on whole, accessible foods that you can find at most grocery stores. While we may occasionally recommend specific supplements based on your goals and nutritional needs, they are not required to follow the plan successfully."
    },
    {
      question: "How often are the meal plans updated?",
      answer: "You'll receive new meal plans weekly, with the option to repeat favorite meals or request new options. We also adjust your plan regularly based on your progress and feedback."
    },
    {
      question: "Can I still eat out or have 'cheat meals'?",
      answer: "Absolutely! Our approach focuses on sustainability and balance. We include strategies for navigating restaurant meals and social situations, as well as guidance on incorporating occasional indulgences while still progressing toward your goals."
    }
  ];
  
  const workoutFaqs = [
    {
      question: "Are the workouts beginner-friendly?",
      answer: "Yes, our workout plans are designed for all fitness levels. If you're a beginner, we'll start with fundamental movements and proper form, gradually increasing intensity as you build strength and confidence."
    },
    {
      question: "Do I need special equipment for the workouts?",
      answer: "Not necessarily. We create your workout plan based on the equipment you have access to, whether that's a fully-equipped gym, basic home equipment, or no equipment at all. We focus on making the most of what you have available."
    },
    {
      question: "How long are the workout sessions?",
      answer: "Workout sessions typically range from 30-60 minutes, depending on your goals and schedule. We believe in quality over quantity and design efficient workouts that deliver results without requiring hours in the gym."
    },
    {
      question: "What if I have an injury or physical limitation?",
      answer: "During your assessment, you'll provide information about any injuries or limitations. Our certified trainers will design your program with these in mind, offering modifications and alternative exercises to ensure safe, effective workouts."
    },
    {
      question: "How often will my workout plan change?",
      answer: "Your workout plan will be updated every 4-6 weeks to prevent plateaus and keep your body adapting. We also make adjustments based on your progress and feedback throughout your journey."
    }
  ];
  
  const billingFaqs = [
    {
      question: "How does billing work?",
      answer: "We offer monthly subscription plans with automatic billing. Your card will be charged on the same date each month, and you can cancel or change your plan at any time through your account settings."
    },
    {
      question: "Is there a contract or commitment period?",
      answer: "No, all our plans are month-to-month with no long-term contracts. You can cancel anytime without penalty."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 14-day money-back guarantee on all our plans. If you're not satisfied within the first 14 days, contact us for a full refund. After this period, cancellations will stop future billing but are not eligible for partial refunds."
    },
    {
      question: "Can I pause my subscription?",
      answer: "Yes, you can pause your subscription for up to 3 months through your account settings. During this time, you won't be billed, but you also won't receive new plan updates. You'll still have access to your previous content and can resume your subscription anytime."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, the price you see is what you pay. There are no setup fees, cancellation fees, or other hidden charges."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-fit-neutral-50 py-12 md:py-20">
        <div className="container-85 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 heading-gradient">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-fit-neutral-700 max-w-2xl mx-auto">
            Find answers to common questions about our plans, features, and services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>
      
      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container-85">
          <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="workout">Workout</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <FAQ items={generalFaqs} title="General Questions" />
            </TabsContent>
            
            <TabsContent value="nutrition">
              <FAQ items={nutritionFaqs} title="Nutrition Plan Questions" />
            </TabsContent>
            
            <TabsContent value="workout">
              <FAQ items={workoutFaqs} title="Workout Plan Questions" />
            </TabsContent>
            
            <TabsContent value="billing">
              <FAQ items={billingFaqs} title="Billing & Subscription Questions" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-fit-green-50">
        <div className="container-85 text-center">
          <h2 className="text-2xl md:text-3xl font-bold heading-gradient mb-4">
            Still Have Questions?
          </h2>
          <p className="text-fit-neutral-700 max-w-2xl mx-auto mb-8">
            Our support team is here to help. Reach out to us with any questions or concerns not covered in our FAQ section.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <Button size="lg" className="bg-fit-green-600 hover:bg-fit-green-700">
                Contact Support
              </Button>
            </Link>
            <Link to="/plans">
              <Button size="lg" variant="outline" className="border-fit-green-600 text-fit-green-700 hover:bg-fit-green-50">
                Explore Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default FAQPage;
