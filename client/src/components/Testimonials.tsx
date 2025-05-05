import React from 'react';
import { Star, Quote, Heart, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
  image: string;
  location: string;
  color: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ahmed Mahmoud",
      role: "Lost 15 kg in 5 months",
      location: "Cairo",
      content: "I'm extremely happy with the results I've achieved. The nutrition program helped me lose weight while maintaining my energy throughout the day. The meals are suitable for Egyptian cuisine and easy to prepare!",
      stars: 5,
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "bg-gradient-to-br from-fit-green-500/10 to-fit-lime-500/10"
    },
    {
      name: "Fatima Ali",
      role: "Yoga instructor",
      location: "Luxor",
      content: "FitTargetHub has completely changed my approach to fitness. The personalized workout plans complement my yoga practice perfectly. I've gained strength while maintaining flexibility. Highly recommended for all Egyptians seeking balance!",
      stars: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "bg-gradient-to-br from-fit-emerald-500/10 to-fit-teal-500/10"
    },
    {
      name: "Karim Hassan",
      role: "Gained muscle mass",
      location: "Giza",
      content: "As a bodybuilder, the comprehensive program helped me improve both my diet and strength training. The results were visible within just a few weeks. I highly recommend it to anyone looking to build muscle in a healthy way.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "bg-gradient-to-br from-fit-lime-500/10 to-fit-green-500/10"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 -left-10 w-40 h-40 bg-fit-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 -right-10 w-40 h-40 bg-fit-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="w-[85%] max-w-[85%] mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 bg-fit-green-50 text-fit-green-600 font-semibold mb-4 px-4 py-1 rounded-full border border-fit-green-100/50 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Real Results</span>
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-5">Success Stories</h2>
          <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto">
            See how our Egyptian members have transformed their fitness journeys with FitTargetHub.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative group overflow-hidden rounded-2xl ${testimonial.color} p-1`}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />
              
              <div className="bg-white rounded-xl shadow-md p-8 relative h-full flex flex-col">
                <div className="absolute -top-2 -right-2 text-fit-green-600 opacity-20">
                  <Quote className="h-16 w-16" strokeWidth={1} />
                </div>
                
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <div className="mb-6 flex-grow">
                  <p className="text-fit-neutral-600 italic relative z-10">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                    <motion.div 
                      className="absolute -bottom-1 -right-1 bg-fit-green-100 rounded-full p-1 border border-white shadow-sm"
                      whileHover={{ rotate: 20 }}
                    >
                      {index === 0 ? (
                        <Award className="h-4 w-4 text-fit-green-600" />
                      ) : index === 1 ? (
                        <Heart className="h-4 w-4 text-fit-green-600" />
                      ) : (
                        <Sparkles className="h-4 w-4 text-fit-green-600" />
                      )}
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-fit-neutral-800">{testimonial.name}</h4>
                    <p className="text-fit-neutral-500 text-sm">{testimonial.role}</p>
                    <p className="text-fit-neutral-400 text-xs">{testimonial.location}, Egypt</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
