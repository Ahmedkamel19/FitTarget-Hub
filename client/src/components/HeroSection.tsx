import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Trophy, Clock, Dumbbell, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-[90vh] relative overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Fitness Background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fit-green-50/80 via-white/60 to-white/70 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-fit-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-fit-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Animated shapes */}
      <motion.div 
        className="absolute left-[15%] top-[20%] w-12 h-12 bg-fit-green-100 rounded-lg hidden md:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute right-[15%] bottom-[20%] w-16 h-16 bg-fit-green-200 rounded-full hidden md:block"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute right-[25%] top-[25%] w-10 h-10 border-2 border-fit-green-300 rounded-lg hidden md:block"
        animate={{
          rotate: [0, 180, 0],
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="w-[85%] max-w-[85%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-fit-green-100/50 text-fit-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-fit-green-500" />
              <span>Personalized Fitness Solutions</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block gradient-text">Transform Your</span>
              <span className="block gradient-text">Fitness Journey</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-fit-neutral-700 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Customized workout routines and meal plans designed specifically for your goals. Take the guesswork out of your fitness journey with our expert guidance.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white font-medium px-5 py-2 h-auto rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/plans">
                <Button size="lg" variant="outline" className="border-fit-green-500 text-fit-green-700 hover:bg-fit-green-50 px-5 py-2 h-auto rounded-full transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                  Explore Plans
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl font-bold text-fit-green-600">500+</div>
                  <Users className="h-4 w-4 text-fit-green-500" />
                </div>
                <div className="text-sm text-fit-neutral-600">Active Members</div>
              </motion.div>
              <motion.div 
                className="text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl font-bold text-fit-green-600">98%</div>
                  <Trophy className="h-4 w-4 text-fit-green-500" />
                </div>
                <div className="text-sm text-fit-neutral-600">Success Rate</div>
              </motion.div>
              <motion.div 
                className="text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl font-bold text-fit-green-600">24/7</div>
                  <Clock className="h-4 w-4 text-fit-green-500" />
                </div>
                <div className="text-sm text-fit-neutral-600">Support</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -right-6 w-56 h-56 bg-fit-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-56 h-56 bg-fit-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              />
              
              <motion.div 
                className="relative glass-effect rounded-2xl shadow-xl p-6 overflow-hidden z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-fit-green-300/20 to-fit-green-200/10 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 15, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Healthy Lifestyle"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-fit-green-100 rounded-lg flex items-center justify-center">
                      <Dumbbell className="h-5 w-5 text-fit-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fit-neutral-800">Expert Guidance</h3>
                      <p className="text-sm text-fit-neutral-600">Personalized support from certified trainers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-fit-green-100 rounded-lg flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-fit-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fit-neutral-800">Proven Results</h3>
                      <p className="text-sm text-fit-neutral-600">Track your progress with our tools</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-fit-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-fit-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fit-neutral-800">Flexible Schedule</h3>
                      <p className="text-sm text-fit-neutral-600">Work out on your own time</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 