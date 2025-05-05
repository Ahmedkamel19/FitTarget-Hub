import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calculator, Utensils, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const FreeResources: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-fit-green-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-fit-green-100 to-fit-green-200 rounded-full opacity-10 mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -10, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="w-[85%] max-w-[85%] mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-fit-green-600 font-semibold mb-4 px-4 py-1 bg-fit-green-50 rounded-full border border-fit-green-100/50 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Free Resources</span>
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-5">
            Start Your Journey Today
          </h2>
          
          <p className="text-lg text-fit-neutral-600 max-w-2xl mx-auto">
            Try a taste of what we offer with our free resources. No commitment required!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="card-playful bg-gradient-to-br from-fit-green-50 to-white p-8 border border-fit-green-100/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          >
            <div className="relative mb-8">
              <div className="relative z-10">
                <div className="h-16 w-16 bg-gradient-to-br from-fit-green-400 to-fit-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute top-1 -right-2 w-16 h-16 bg-fit-green-200/30 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-fit-neutral-800 mb-3">Calories Calculator</h3>
            <p className="text-fit-neutral-600 mb-6 text-lg">
              Calculate your daily caloric needs based on your goals, activity level, and body composition. Get personalized recommendations for optimal results.
            </p>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild className="bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white rounded-full px-4 py-2 h-auto btn-bounce">
                <a href="/tools/calories-calculator">
                  <Calculator className="mr-2 h-4 w-4" /> Use Calculator
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="card-playful bg-gradient-to-br from-fit-green-50 to-white p-8 border border-fit-green-100/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          >
            <div className="relative mb-8">
              <div className="relative z-10">
                <div className="h-16 w-16 bg-gradient-to-br from-fit-green-400 to-fit-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute top-1 -right-2 w-16 h-16 bg-fit-green-200/30 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-fit-neutral-800 mb-3">Food Alternatives Calculator</h3>
            <p className="text-fit-neutral-600 mb-6 text-lg">
              Discover healthy alternatives to your favorite foods. Find nutritious substitutes that match your dietary preferences and goals.
            </p>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild className="bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white rounded-full px-4 py-2 h-auto btn-bounce">
                <a href="/tools/food-alternative-calculator">
                  <Utensils className="mr-2 h-4 w-4" /> Use Calculator
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
