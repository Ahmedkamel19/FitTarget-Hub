import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <section className="py-16 relative min-h-[calc(100vh-6rem)] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fit-green-50 via-white to-fit-neutral-50 -z-20" />
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 left-[10%] w-64 h-64 bg-fit-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[10%] w-80 h-80 bg-fit-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.015] -z-10" />
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-[15%] right-[15%] w-12 h-12 border-2 border-fit-green-200 rounded-lg -z-10"
          animate={{
            rotate: [0, 180],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[20%] w-8 h-8 bg-fit-green-100 rounded-full -z-10"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div 
          className="absolute top-[40%] left-[10%] w-6 h-6 border-2 border-fit-green-300 rotate-45 -z-10"
          animate={{
            rotate: [45, 90, 45],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="container-85 relative z-10">
          <AuthForm type="login" />
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default LoginPage;
