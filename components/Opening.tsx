import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

const Opening: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col items-center max-w-4xl"
      >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
        >
             <Heart className="w-8 h-8 text-pink-200 mb-6 fill-pink-500/20 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
        </motion.div>
       
        <h1 className="serif-font text-4xl md:text-6xl lg:text-7xl text-white tracking-tight font-light mb-8 drop-shadow-lg leading-tight">
          Happy 2nd Anniversary,<br/> my Love
        </h1>
        <p className="text-pink-100 text-base md:text-lg leading-relaxed font-light drop-shadow-md max-w-2xl opacity-90">
          Two years ago, we started something that has changed my life. Grabe ka dali ba, 2 years nagyud ta and hangtud ron, dili pagyud ko ka tuo nga nagka uyab ta. As we celebrate our anniversary today, I find myself looking at you feeling so blessed and lucky. I wanted to take a moment to step away from the noise and just tell you how much I love you and how much this day means to me.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12"
      >
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
            <ChevronDown className="w-6 h-6 text-pink-200/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Opening;