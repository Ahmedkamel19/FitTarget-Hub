import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FreeResources from '@/components/FreeResources';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { Utensils, Dumbbell, Activity, ArrowRight, CheckCircle2, Users, Trophy, Clock, MessagesSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundIcons from '@/components/BackgroundIcons';
import axios from "axios";

const Index: React.FC = () => {
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <BackgroundIcons />
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 relative bg-neutral-50">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-neutral-100/10 to-neutral-200/20 backdrop-blur-sm -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-neutral-200/10 via-transparent to-transparent -z-10" />
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-neutral-300/20 via-transparent to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-neutral-200/20 via-transparent to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="w-[85%] max-w-[85%] mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-fit-green-600 font-semibold mb-5 px-4 py-1 bg-fit-green-50 rounded-full border border-fit-green-100 shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Why Choose FitTargetHub
            </motion.span>
            
            <div className="relative mb-6">
              <motion.h2 
                className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight relative z-10 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="block text-fit-neutral-900">Your Success is</span>
                <span className="block text-fit-green-600 relative">
                  Our Priority
                  <motion.div 
                    className="absolute -bottom-3 left-0 right-0 h-3 bg-fit-green-400/30 rounded-full mx-auto w-48"
                    initial={{ width: 0 }}
                    animate={{ width: '12rem' }}
                    transition={{ delay: 1, duration: 0.6 }}
                  ></motion.div>
                </span>
              </motion.h2>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-fit-green-50 rounded-full opacity-20 -z-10"></div>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-fit-neutral-600 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We combine expertise, personalization, and dedication to help you achieve your fitness goals.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-fit-green-100/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fit-green-500/5 to-fit-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-14 w-14 bg-gradient-to-br from-fit-green-100 to-fit-emerald-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-7 w-7 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Personalized Plans</h3>
              <p className="text-fit-neutral-600 group-hover:text-fit-neutral-700 transition-colors duration-300">
                Customized to your goals, preferences, and lifestyle for optimal results.
              </p>
            </motion.div>
            
            <motion.div
              className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-fit-green-100/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fit-green-500/5 to-fit-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-14 w-14 bg-gradient-to-br from-fit-green-100 to-fit-emerald-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Expert Support</h3>
              <p className="text-fit-neutral-600 group-hover:text-fit-neutral-700 transition-colors duration-300">
                Access to certified trainers and nutritionists whenever you need guidance.
              </p>
            </motion.div>
            
            <motion.div
              className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-fit-green-100/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fit-green-500/5 to-fit-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-14 w-14 bg-gradient-to-br from-fit-green-100 to-fit-emerald-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-7 w-7 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Proven Results</h3>
              <p className="text-fit-neutral-600 group-hover:text-fit-neutral-700 transition-colors duration-300">
                Join thousands of members who have achieved their fitness goals with us.
              </p>
            </motion.div>
            
            <motion.div
              className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-fit-green-100/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fit-green-500/5 to-fit-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-14 w-14 bg-gradient-to-br from-fit-green-100 to-fit-emerald-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-7 w-7 text-fit-green-600" />
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3">Flexible Schedule</h3>
              <p className="text-fit-neutral-600 group-hover:text-fit-neutral-700 transition-colors duration-300">
                Work out and eat well on your own time, at your own pace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-padding bg-white">
        <div className="container-85">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600">Find the perfect plan for your fitness journey</p>
          </div>
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

      {/* How It Works Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-fit-lime-50/20 to-fit-green-50/20 backdrop-blur-sm -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-fit-lime-200/10 via-transparent to-transparent -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,_var(--tw-gradient-stops))] from-fit-green-200/10 via-transparent to-transparent -z-10" />
        <HowItWorks />
      </motion.div>
      
      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-fit-lime-50/20 to-fit-green-50/20 backdrop-blur-sm -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fit-lime-200/10 via-transparent to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fit-green-200/10 via-transparent to-transparent -z-10" />
        
        <Testimonials />
      </motion.div>
      
      {/* Free Resources Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-fit-emerald-50/20 to-fit-teal-50/20 backdrop-blur-sm -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,_var(--tw-gradient-stops))] from-fit-emerald-200/10 via-transparent to-transparent -z-10" />
        <FreeResources />
      </motion.div>
      
      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-fit-lime-50/20 to-fit-green-50/20 backdrop-blur-sm -z-10" />
        <FAQ />
      </motion.div>
      
      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-fit-teal-50/20 to-fit-emerald-50/20 backdrop-blur-sm -z-10" />
        <CTASection />
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
