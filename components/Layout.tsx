import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-metal-900 text-slate-300 selection:bg-neon-blue/30 selection:text-white">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Abstract Video Background (Simulated with robust CSS fallback/video) */}
         <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen scale-110 pointer-events-none"
            style={{ filter: "hue-rotate(220deg) contrast(1.2)" }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-background-2776-large.mp4" type="video/mp4" />
          </video>
        
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-metal-900/90 via-metal-900/80 to-metal-900" />
        
        {/* Plasma Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-neon-blue/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-neon-purple/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="noise-bg" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 text-center py-8 text-xs text-slate-600 font-display tracking-[0.2em] uppercase">
        © 2024 UNAI TECH SYSTEMS. // ENGAGED
      </footer>
    </div>
  );
};
