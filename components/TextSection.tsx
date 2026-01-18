import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContent } from '../types';

interface TextSectionProps {
  content: SectionContent;
  isLast?: boolean;
}

const TextSection: React.FC<TextSectionProps> = ({ content, isLast }) => {
  return (
    <section className={`min-h-screen flex flex-col justify-center items-center px-6 py-24 md:px-12 max-w-4xl mx-auto relative ${isLast ? 'pb-32' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full text-center md:text-left flex flex-col items-center md:items-start"
      >
        {content.title && (
          <h2 className="serif-font text-3xl md:text-5xl text-pink-100 mb-8 md:mb-12 font-light tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            {content.title}
          </h2>
        )}

        <div className="space-y-6 md:space-y-8 w-full max-w-2xl">
          {content.body.map((paragraph, idx) => (
            <p 
              key={idx} 
              className="text-lg md:text-xl leading-relaxed text-rose-50/90 font-light drop-shadow-sm"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {content.images && content.images.length > 0 && (
          <div className="grid grid-cols-2 gap-3 md:gap-6 mt-12 w-full">
            {content.images.map((src, idx) => (
              <ImageWithFallback 
                key={idx} 
                src={src} 
                index={idx} 
                total={content.images!.length} 
              />
            ))}
          </div>
        )}

        {content.highlight && (
          <div className="mt-16 pt-8 border-t border-pink-200/20 w-full max-w-2xl text-center md:text-left">
             <p className="serif-font text-2xl md:text-3xl text-pink-100 italic opacity-95 drop-shadow-md">
               "{content.highlight}"
             </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

// Helper component to handle image loading errors gracefully
const ImageWithFallback: React.FC<{ src: string, index: number, total: number }> = ({ src, index, total }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    // Fallback to a nice romantic placeholder if the user's link breaks
    setImgSrc("https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] bg-rose-950/50 ${
        total === 3 && index === 2 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 via-transparent to-transparent z-10 opacity-60" />
      <img 
        src={imgSrc} 
        alt="Us" 
        onError={handleError}
        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 ease-in-out"
        loading="lazy"
      />
    </motion.div>
  );
};

export default TextSection;