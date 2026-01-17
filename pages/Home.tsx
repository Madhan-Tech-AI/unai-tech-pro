import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Zap } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { FloatingElement } from '../components/ui/FloatingElement';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      
      {/* Hero Content */}
      <FloatingElement duration={8} yOffset={10}>
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-neon-blue text-xs font-mono tracking-widest">SYSTEM ONLINE v4.0</span>
        </div>
      </FloatingElement>

      <motion.h1 
        className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white mb-8 leading-none mix-blend-overlay"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0">DEFY</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-neon-blue to-neon-purple/50">GRAVITY</span>
      </motion.h1>

      <motion.p 
        className="max-w-xl mx-auto text-lg text-slate-400 mb-12 font-sans font-light leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Welcome to UNAI TECH. We engineer the future of education through 
        antigravity interfaces and holographic learning modules.
      </motion.p>

      <motion.div 
        className="flex flex-col md:flex-row gap-6 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <MagneticButton>
          Explore System <ArrowRight className="w-4 h-4" />
        </MagneticButton>
        <MagneticButton variant="outline">
          Watch Demo <Zap className="w-4 h-4" />
        </MagneticButton>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase writing-vertical">Scroll to Initialize</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </div>
  );
};
