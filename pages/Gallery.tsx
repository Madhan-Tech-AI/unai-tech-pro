import React from 'react';
import { motion } from 'framer-motion';

export const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1535868463750-c78d9543614f?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1614728853970-300e4e116920?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?auto=format&fit=crop&q=80',
  ];

  return (
    <div>
      <h2 className="text-5xl font-display font-bold text-white mb-12 text-center">VISUAL <span className="text-neon-blue">VOID</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative aspect-square group overflow-hidden cursor-pointer rounded-sm border border-white/10"
          >
            <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img 
              src={src} 
              alt="Gallery" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
