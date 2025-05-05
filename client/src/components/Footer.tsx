import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const footerItemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };

  return (
    <footer className="pt-16 pb-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-fit-green-50/20 to-fit-green-50/40 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fit-green-400 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-fit-green-100/10 to-transparent -z-10" />
      
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-fit-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="w-[85%] max-w-[85%] mx-auto px-4 py-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerAnimation}
        >
          <motion.div variants={footerItemAnimation} className="space-y-4">
            <Logo />
            <p className="text-fit-neutral-600 mt-2">
              Your personalized journey to a healthier lifestyle starts here. Get customized nutrition and workout plans tailored to your goals.
            </p>
          </motion.div>
          
          <motion.div variants={footerItemAnimation}>
            <h3 className="text-lg font-bold mb-5 text-fit-neutral-800 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-fit-green-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/plans", label: "All Plans" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact" },
                { path: "/faq", label: "FAQ" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-fit-neutral-600 hover:text-fit-green-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0 rounded-full bg-fit-green-500 mr-0 group-hover:w-2 group-hover:h-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={footerItemAnimation}>
            <h3 className="text-lg font-bold mb-5 text-fit-neutral-800 relative inline-block">
              Our Plans
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-fit-green-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/plans/nutrition", label: "Nutrition Plan" },
                { path: "/plans/workout", label: "Workout Plan" },
                { path: "/plans/all-in-one", label: "All-In-One Plan" },
                { path: "/tools/calories-calculator", label: "Calories Calculator" },
                { path: "/tools/food-alternative-calculator", label: "Food Alternatives" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-fit-neutral-600 hover:text-fit-green-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0 rounded-full bg-fit-green-500 mr-0 group-hover:w-2 group-hover:h-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={footerItemAnimation}>
            <h3 className="text-lg font-bold mb-5 text-fit-neutral-800 relative inline-block">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-fit-green-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-start transition-all">
                <span className="bg-fit-green-100 p-2 rounded-full text-fit-green-600 mr-3 mt-0.5 group-hover:bg-fit-green-600 group-hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-fit-neutral-800 font-medium">Email Us</span>
                  <span className="text-fit-neutral-600 text-sm">support@fittargethub.com</span>
                </div>
              </li>
              <li className="group flex items-start transition-all">
                <span className="bg-fit-green-100 p-2 rounded-full text-fit-green-600 mr-3 mt-0.5 group-hover:bg-fit-green-600 group-hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-fit-neutral-800 font-medium">Call Us</span>
                  <span className="text-fit-neutral-600 text-sm">+201557214517</span>
                </div>
              </li>
              <li className="group flex items-start transition-all">
                <span className="bg-fit-green-100 p-2 rounded-full text-fit-green-600 mr-3 mt-0.5 group-hover:bg-fit-green-600 group-hover:text-white transition-colors">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-fit-neutral-800 font-medium">Location</span>
                  <span className="text-fit-neutral-600 text-sm">Nasr City, Cairo, Egypt</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-fit-neutral-600 text-sm flex items-center">
            &copy; 2025 FitTargetHub. Made By Ahmed Mohamed Kamel
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
