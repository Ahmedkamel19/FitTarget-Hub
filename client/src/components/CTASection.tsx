import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showCheckout?: boolean;
  bgClass?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Begin Your Fitness Journey Today",
  description = "Join our supportive community and access personalized plans designed to help you reach your health and fitness goals.",
  buttonText = "Get Started",
  showCheckout = false,
  bgClass
}) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2294&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="CTA Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-64 h-64 bg-fit-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
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
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-fit-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="w-[85%] max-w-[85%] mx-auto px-4">
        <motion.div 
          className="glass-effect rounded-3xl p-12 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-fit-green-400/10 to-fit-green-200/5 rounded-full z-0"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-fit-green-200/10 to-fit-green-300/5 rounded-full z-0"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 text-fit-green-600 font-semibold mb-4 px-4 py-1 bg-fit-green-50 rounded-full">
                  <Sparkles className="h-4 w-4" />
                  <span>Your Journey Awaits</span>
                </span>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fit-neutral-900">
                  <span className="gradient-text">{title}</span>
                </h2>
                
                <p className="text-xl text-fit-neutral-700 mb-8">
                  {description}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to={showCheckout ? "/checkout" : "/signup"}>
                  <Button size="lg" className="bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white rounded-full px-5 py-2 h-auto btn-bounce text-base font-medium">
                    {buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-fit-green-100/30 to-fit-green-50/30 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Happy fitness user" 
                  className="w-full h-auto rounded-2xl relative z-10 transform -rotate-3 transition-transform duration-500 hover:rotate-0"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
