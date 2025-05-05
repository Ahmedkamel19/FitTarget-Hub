import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { MessageCircleQuestion, MessagesSquare, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<{ items?: FAQItem[], title?: string }> = ({ 
  items,
  title = "Frequently Asked Questions" 
}) => {
  const defaultFAQs: FAQItem[] = items || [
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade, downgrade, or switch between plans at any time. Any changes will be prorated and reflected in your next billing cycle."
    },
    {
      question: "Are the workouts beginner-friendly?",
      answer: "Yes, our workout plans are designed for all fitness levels. When you sign up, we'll ask about your experience level and adjust the workouts accordingly. We provide detailed instructions and videos for each exercise."
    },
    {
      question: "How customized are the meal plans?",
      answer: "Our meal plans are tailored to your goals, dietary restrictions, and preferences. You'll complete a comprehensive questionnaire when you sign up, and your nutrition coach will create a personalized plan based on your responses."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We don't believe in long-term contracts or hidden fees. Simply go to your account settings and cancel with just a few clicks."
    },
    {
      question: "Do I need special equipment for the workouts?",
      answer: "Not necessarily. We offer home workouts that require minimal or no equipment, as well as gym-based routines. You'll be able to specify what equipment you have access to when setting up your plan."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-fit-green-50/20 to-fit-teal-50/30 -z-10" />
      
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 bg-fit-green-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-fit-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-[15%] hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-12 h-12 bg-fit-green-100 rounded-full opacity-60" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-[10%] hidden lg:block"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-8 h-8 bg-fit-teal-200 rounded-full opacity-60" />
      </motion.div>
      
      <div className="w-[85%] max-w-[85%] mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 p-2 px-4 bg-fit-green-50 rounded-full text-fit-green-600 font-medium text-sm mb-4">
            <MessagesSquare className="h-4 w-4" />
            <span>Questions & Answers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fit-green-600 via-fit-teal-500 to-fit-green-600 bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Got questions? We have answers. If you don't see what you're looking for, feel free to contact our support team.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* FAQ illustration */}
          <motion.div 
            className="absolute -top-12 -right-20 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <MessageCircleQuestion className="w-24 h-24 text-fit-green-100" />
          </motion.div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-fit-green-100/30">
            <Accordion type="single" collapsible className="w-full">
              {defaultFAQs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem value={`item-${index}`} className="border-b border-fit-green-100 last:border-b-0 overflow-hidden">
                    <AccordionTrigger className="text-left font-semibold text-lg text-fit-neutral-800 hover:text-fit-green-700 hover:no-underline py-5 group flex">
                      <div className="flex items-start gap-3 w-full pr-6">
                        <div className="h-6 w-6 rounded-full bg-fit-green-100 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:bg-fit-green-200 transition-colors">
                          <span className="text-fit-green-600 text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronUp className="h-5 w-5 text-fit-green-500 shrink-0 transition-transform duration-300" />
                    </AccordionTrigger>
                    <AccordionContent className="text-fit-neutral-600 pl-9 pr-6 pb-6 pt-1 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
          
          {/* Contact support link */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="/contact" 
              className="inline-flex items-center text-fit-green-600 font-medium hover:text-fit-green-800 transition-colors gap-1 group"
            >
              Need more help? Contact our support team
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
