import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, Apple, Trophy, Target, Timer, Banana, Salad, Drumstick, BookOpen, Flame, Droplet, EggFried, Utensils, SunMedium, Diamond, Laugh, Bike, Shirt, Activity } from 'lucide-react';

const BackgroundIcons: React.FC = () => {
  const icons = [
    { Icon: Dumbbell, color: 'text-fit-green-200', size: 48, delay: 0, animation: 'floating' },
    { Icon: Heart, color: 'text-fit-green-200', size: 36, delay: 2, animation: 'pulse-slow' },
    { Icon: Apple, color: 'text-fit-green-200', size: 32, delay: 4, animation: 'floating' },
    { Icon: Trophy, color: 'text-fit-green-200', size: 42, delay: 6, animation: 'pulse-slow' },
    { Icon: Target, color: 'text-fit-green-200', size: 38, delay: 8, animation: 'floating' },
    { Icon: Timer, color: 'text-fit-green-200', size: 34, delay: 10, animation: 'pulse-slow' },
    { Icon: Banana, color: 'text-fit-green-200', size: 40, delay: 3, animation: 'floating' },
    { Icon: Salad, color: 'text-fit-green-200', size: 44, delay: 5, animation: 'pulse-slow' },
    { Icon: Drumstick, color: 'text-fit-green-200', size: 36, delay: 7, animation: 'floating' },
    { Icon: BookOpen, color: 'text-fit-green-200', size: 38, delay: 9, animation: 'pulse-slow' },
    { Icon: Flame, color: 'text-amber-200', size: 42, delay: 1, animation: 'floating' },
    { Icon: Droplet, color: 'text-sky-200', size: 34, delay: 3, animation: 'pulse-slow' },
    { Icon: EggFried, color: 'text-yellow-200', size: 40, delay: 5, animation: 'floating' },
    { Icon: Utensils, color: 'text-fit-green-200', size: 38, delay: 7, animation: 'pulse-slow' },
    { Icon: SunMedium, color: 'text-amber-200', size: 46, delay: 9, animation: 'floating' },
    { Icon: Diamond, color: 'text-indigo-200', size: 32, delay: 11, animation: 'pulse-slow' },
    { Icon: Laugh, color: 'text-fit-green-200', size: 38, delay: 2, animation: 'floating' },
    { Icon: Bike, color: 'text-fit-green-200', size: 44, delay: 4, animation: 'pulse-slow' },
    { Icon: Shirt, color: 'text-fit-green-200', size: 36, delay: 6, animation: 'floating' },
    { Icon: Activity, color: 'text-fit-green-200', size: 40, delay: 8, animation: 'pulse-slow' },
  ];

  const getRandomPosition = () => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {icons.map((IconObj, index) => {
        const pos = getRandomPosition();
        return (
          <motion.div
            key={index}
            className={`bg-icon ${IconObj.color} ${IconObj.animation}`}
            initial={{ 
              opacity: 0,
              x: pos.x,
              y: pos.y,
              scale: 0.5,
              rotate: Math.random() * 360
            }}
            animate={{ 
              opacity: 0.07,
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              delay: IconObj.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: pos.x,
              top: pos.y,
              width: `${IconObj.size}px`,
              height: `${IconObj.size}px`
            }}
          >
            <IconObj.Icon 
              size={IconObj.size}
              style={{ 
                animationDelay: `${IconObj.delay}s`,
                animationDuration: '20s'
              }} 
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BackgroundIcons; 