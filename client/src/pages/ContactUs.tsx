import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-fit-green-50 to-white py-12 md:py-16 pb-0 relative overflow-hidden">
        <div className="absolute top-10 right-10 h-20 w-20 bg-fit-green-200 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-10 left-10 h-32 w-32 bg-fit-green-300 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 h-8 w-8 bg-fit-green-400 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 h-6 w-6 bg-fit-green-500 rounded-full"></div>
        
        <motion.div 
          className="container-85 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-fit-green-600 via-fit-green-500 to-fit-green-600 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Let's Connect!
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-fit-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have questions or need help on your fitness journey? 
            Our team is eager to assist you every step of the way!
          </motion.p>
        </motion.div>
      </section>
      
      {/* Contact Information */}
      <section className="pt-10 pb-10 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e15_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <motion.div 
          className="container-85"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
            variants={containerVariants}
          >
            <motion.div 
              className="group p-8 bg-gradient-to-br from-white to-fit-green-50 rounded-2xl border-2 border-fit-green-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fit-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-fit-green-100 rounded-full -ml-8 -mb-8 opacity-30"></div>
              
              <motion.div 
                className="h-16 w-16 bg-fit-green-100 rounded-full flex items-center justify-center mb-6 relative z-10 text-fit-green-600 group-hover:bg-fit-green-600 group-hover:text-white transition-colors duration-300"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Mail className="h-7 w-7" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-4 relative z-10">Email Us</h3>
              <p className="text-fit-neutral-600 mb-2 relative z-10">For support:</p>
              <a href="mailto:support@fittargethub.com" className="text-fit-green-600 font-semibold hover:text-fit-green-700 underline decoration-2 decoration-fit-green-200 hover:decoration-fit-green-500 transition-all relative z-10">
                support@fittargethub.com
              </a>
            </motion.div>
            
            <motion.div 
              className="group p-8 bg-gradient-to-br from-white to-fit-green-50 rounded-2xl border-2 border-fit-green-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fit-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-fit-green-100 rounded-full -ml-8 -mb-8 opacity-30"></div>
              
              <motion.div 
                className="h-16 w-16 bg-fit-green-100 rounded-full flex items-center justify-center mb-6 relative z-10 text-fit-green-600 group-hover:bg-fit-green-600 group-hover:text-white transition-colors duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Phone className="h-7 w-7" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-4 relative z-10">Call Us</h3>
              <p className="text-fit-neutral-600 mb-2 relative z-10">Customer Service:</p>
              <a href="tel:+201557214517" className="text-fit-green-600 font-semibold hover:text-fit-green-700 underline decoration-2 decoration-fit-green-200 hover:decoration-fit-green-500 transition-all relative z-10">
                +201557214517
              </a>
            </motion.div>
            
            <motion.div 
              className="group p-8 bg-gradient-to-br from-white to-fit-green-50 rounded-2xl border-2 border-fit-green-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fit-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-fit-green-100 rounded-full -ml-8 -mb-8 opacity-30"></div>
              
              <motion.div 
                className="h-16 w-16 bg-fit-green-100 rounded-full flex items-center justify-center mb-6 relative z-10 text-fit-green-600 group-hover:bg-fit-green-600 group-hover:text-white transition-colors duration-300"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="h-7 w-7" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-4 relative z-10">Office Location</h3>
              <p className="text-fit-neutral-600 relative z-10">
                Nasr City, Cairo, Egypt
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Connect With Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-fit-green-50/30 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fit-green-400 to-transparent"></div>
        <div className="absolute -top-10 right-10 w-40 h-40 rounded-full bg-fit-green-200/40 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-fit-green-200/40 blur-3xl"></div>
            
        <motion.div 
          className="container-85"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10 border border-fit-green-100 relative overflow-hidden"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-fit-green-100 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-fit-green-200 rounded-full"></div>
              
            <motion.h2 
              className="text-3xl font-extrabold mb-8 text-center relative z-10 bg-gradient-to-r from-fit-green-600 to-fit-green-500 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Connect With Us
            </motion.h2>
            
            <div className="text-center mb-10 relative z-10">
              <motion.p 
                className="text-fit-neutral-700 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join our fitness community to receive personalized guidance, exclusive resources, and ongoing support on your wellness journey. We're committed to helping you achieve sustainable results through expert coaching and proven methods.
              </motion.p>
              
              <motion.div 
                className="bg-gradient-to-br from-fit-green-50 to-fit-green-100 p-8 rounded-2xl border border-fit-green-200 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-fit-green-200 rounded-full opacity-50"></div>
                <div className="absolute top-4 left-4 w-3 h-3 bg-fit-green-300 rounded-full"></div>
                <div className="absolute top-10 right-10 w-2 h-2 bg-fit-green-400 rounded-full"></div>
                
                <motion.h3 
                  className="text-xl font-bold text-fit-neutral-800 mb-3 relative z-10"
                  animate={{ color: ["#374151", "#166534", "#374151"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Looking for immediate assistance?
                </motion.h3>
                <p className="text-fit-neutral-700 mb-5 relative z-10">
                  Check out our comprehensive FAQ section or explore our knowledge base for detailed guides and tutorials.
                </p>
                <Link to="/faq">
                  <Button className="bg-fit-green-600 hover:bg-fit-green-700 rounded-full text-white px-8 py-6 font-semibold text-md relative z-10 hover:scale-105 transition-transform">
                    Visit FAQ
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} className="ml-2" />
                    </motion.div>
              </Button>
                </Link>
              </motion.div>
          </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e10_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
        
        <motion.div 
          className="container-85 max-w-3xl relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-fit-green-600 to-fit-green-500 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="bg-gradient-to-br from-white to-fit-green-50 p-8 rounded-2xl border-2 border-fit-green-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-fit-green-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:bg-fit-green-200 transition-colors"></div>
              
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3 relative z-10">What are your response times?</h3>
              <p className="text-fit-neutral-600 leading-relaxed relative z-10">We aim to respond to all inquiries within 24 hours during business days. Premium plan members receive priority support with faster response times.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-white to-fit-green-50 p-8 rounded-2xl border-2 border-fit-green-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-fit-green-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:bg-fit-green-200 transition-colors"></div>
              
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3 relative z-10">How can I change or cancel my subscription?</h3>
              <p className="text-fit-neutral-600 leading-relaxed relative z-10">You can manage your subscription through your account settings or by contacting our support team. We're happy to assist with any changes you need.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-white to-fit-green-50 p-8 rounded-2xl border-2 border-fit-green-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-fit-green-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:bg-fit-green-200 transition-colors"></div>
              
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-3 relative z-10">Do you offer refunds?</h3>
              <p className="text-fit-neutral-600 leading-relaxed relative z-10">Yes, we offer a 14-day money-back guarantee on all our plans. If you're not satisfied with our service, contact us within 14 days of your purchase for a full refund.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      <Footer />
    </>
  );
};

export default ContactUs;
