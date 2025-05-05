import React from 'react';
import { CheckCircle, Clock, BarChart3, ArrowRight, ClipboardList, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-12 w-12 text-fit-green-500" />,
      title: "Create Your Profile",
      description: "Complete your fitness profile with your goals, preferences, and current fitness level.",
      color: "from-fit-green-500 to-fit-emerald-400"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-fit-green-500" />,
      title: "Receive Your Custom Plan",
      description: "Our experts design a personalized nutrition and workout program specifically for you.",
      color: "from-fit-green-500 to-fit-emerald-400"
    },
    {
      icon: <Trophy className="h-12 w-12 text-fit-lime-500" />,
      title: "Achieve Real Results",
      description: "Follow your plan, track your progress, and watch your fitness goals become reality.",
      color: "from-fit-lime-500 to-fit-green-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-fit-green-50/20 to-fit-lime-50/30 -z-10" />
      
      <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 bg-fit-green-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-fit-lime-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="relative w-[85%] max-w-[85%] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block p-2 px-4 bg-fit-green-50 rounded-full text-fit-green-600 font-medium text-sm mb-4">
            Simple Three-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fit-green-600 via-fit-teal-500 to-fit-green-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto text-lg">
            Transform your fitness journey with our personalized approach. Just three simple steps stand between you and your health goals.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fit-green-200 via-fit-teal-200 to-fit-lime-200 hidden lg:block -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative z-10"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all group h-full flex flex-col">
                <div className={`flex justify-center items-center mb-6 relative`}>
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-fit-green-500 to-fit-green-600 text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  {/* Icon container with gradient background */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} p-1 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
                      <div className="bg-white rounded-full p-1 shadow-md">
                        <ArrowRight className="h-5 w-5 text-fit-green-500" />
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-fit-neutral-800 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-fit-neutral-600 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
