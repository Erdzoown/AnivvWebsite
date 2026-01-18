import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PaperPlane: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Creates a path that meanders across the screen as you scroll down
  const x = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    ['-5vw', '30vw', '50vw', '20vw', '70vw', '110vw']
  );
  
  const y = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    ['10vh', '40vh', '20vh', '70vh', '40vh']
  );
  
  const rotate = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [20, 45, 10, -20, 30, 0]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen" aria-hidden="true">
      <motion.div
        style={{ x, y, rotate }}
        className="absolute top-0 left-0 text-rose-100/20 drop-shadow-[0_0_15px_rgba(225,29,72,0.3)]"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:w-14 md:h-14"
        >
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default PaperPlane;