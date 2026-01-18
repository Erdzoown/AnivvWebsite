import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  scale: number;
  duration: number;
  delay: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Populate some hearts initially
    const initialHearts = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() - i * 1000,
        x: Math.random() * 90 + 5,
        scale: Math.random() * 1.5 + 1.0, // Bigger scale: 1.0x to 2.5x
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
    }));
    setHearts(initialHearts);

    const interval = setInterval(() => {
      const id = Date.now();
      setHearts(prev => {
        const clean = prev.filter(h => id - h.id < 25000); // Keep them longer
        return [...clean, {
          id,
          x: Math.random() * 90 + 5,
          scale: Math.random() * 1.5 + 1.2, // Bigger scale
          duration: Math.random() * 8 + 12, // Slower float
          delay: 0
        }];
      });
    }, 1500); // More frequent

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: '110vh', x: `${heart.x}vw` }}
            animate={{ 
              opacity: [0, 0.5, 0.5, 0], // Higher opacity (was 0.15)
              y: '-20vh',
              x: [`${heart.x}vw`, `${heart.x + (Math.random() * 20 - 10)}vw`] 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: heart.duration, ease: "linear", delay: heart.delay }}
            className="absolute"
          >
            <Heart 
              className="text-pink-300 fill-pink-400/20 blur-[1px]" 
              strokeWidth={1.5}
              style={{ transform: `scale(${heart.scale})` }} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;