import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/lib/auth-context';
import { motion } from 'framer-motion';
import { Sparkles, User, Mail, Lock, ArrowRight } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (type === 'login') {
        await login(formData.email, formData.password);
        toast.success('Successfully logged in!');
      } else {
        await signup(formData.email, formData.password);
        toast.success('Account created! Welcome to FitTargetHub!');
      }
      
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md mx-auto relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-10 -left-10 w-32 h-32 bg-fit-green-200 rounded-full opacity-20 z-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-fit-green-300 rounded-full opacity-20 z-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="bg-white rounded-2xl shadow-lg border border-fit-green-100 p-8 relative z-10 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-fit-green-50 to-transparent -z-10"
          animate={{
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <div className="inline-flex justify-center items-center w-16 h-16 bg-fit-green-50 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-fit-green-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-fit-neutral-800 gradient-text">
            {type === 'login' ? 'Welcome Back!' : 'Join Our Fitness Community'}
          </h2>
          <p className="text-fit-neutral-600 mt-2">
            {type === 'login' 
              ? 'Great to see you again! Let\'s continue your fitness journey'
              : 'Get started on your path to a healthier, stronger you'}
          </p>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={containerVariants}
        >
          {type === 'signup' && (
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4 text-fit-green-500" />
                <span>Your Name</span>
              </Label>
              <div className="relative">
                <Input 
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 py-3 transition-all duration-200 border-fit-green-100 focus:ring-2 focus:ring-fit-green-500 focus:border-fit-green-500 rounded-xl"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-5 h-5 text-fit-neutral-400" />
                </div>
              </div>
            </motion.div>
          )}
          
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-fit-green-500" />
              <span>Email Address</span>
            </Label>
            <div className="relative">
              <Input 
                id="email"
                name="email"
                type="email"
                placeholder="your-email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 py-3 transition-all duration-200 border-fit-green-100 focus:ring-2 focus:ring-fit-green-500 focus:border-fit-green-500 rounded-xl"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-fit-neutral-400" />
              </div>
            </div>
          </motion.div>
          
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Lock className="w-4 h-4 text-fit-green-500" />
              <span>Password</span>
            </Label>
            <div className="relative">
              <Input 
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 py-3 transition-all duration-200 border-fit-green-100 focus:ring-2 focus:ring-fit-green-500 focus:border-fit-green-500 rounded-xl"
                minLength={8}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-fit-neutral-400" />
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white rounded-xl py-3 h-auto transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {type === 'login' ? 'Logging in...' : 'Creating account...'}
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  {type === 'login' ? 'Log in' : 'Sign up'}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </motion.div>
        </motion.form>
        
        <motion.div 
          className="mt-8 text-center relative"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-fit-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-fit-neutral-500">or</span>
            </div>
          </div>
          
          <p className="text-fit-neutral-600 mt-4">
            {type === 'login' 
              ? "Don't have an account? " 
              : "Already have an account? "}
            <Link 
              to={type === 'login' ? '/signup' : '/login'} 
              className="text-fit-green-600 hover:text-fit-green-700 font-medium transition-all duration-200 hover:underline"
            >
              {type === 'login' ? 'Sign up now' : 'Log in now'}
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AuthForm;
