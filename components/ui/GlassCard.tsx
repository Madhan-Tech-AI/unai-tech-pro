import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
      className={`
        relative backdrop-blur-md bg-white/[0.02] border border-white/10 
        p-6 rounded-sm overflow-hidden
        hover:border-neon-blue/30 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]
        transition-colors duration-500
        ${className}
      `}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-blue/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-blue/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-blue/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-blue/50" />
      
      {children}
    </motion.div>
  );
};
