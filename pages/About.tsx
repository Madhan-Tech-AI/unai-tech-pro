import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div className="mb-20 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">ORIGIN STORY</h2>
        <div className="h-1 w-24 bg-neon-purple mx-auto rounded-full shadow-[0_0_20px_#bc13fe]" />
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
        {[2020, 2022, 2024].map((year, i) => (
          <div key={year} className="relative pl-8 md:pl-0">
            <motion.div 
              className="absolute -left-[5px] md:-left-[37px] top-0 w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.2 }}
            />
            <GlassCard delay={i * 0.2}>
              <span className="text-neon-purple font-display text-4xl font-bold mb-2 block">{year}</span>
              <h3 className="text-2xl text-white font-bold mb-4">Phase {i + 1} Initialization</h3>
              <p className="text-slate-400">
                {year === 2020 && "UNAI TECH founded. The core engine was forged in deep silence."}
                {year === 2022 && "First anti-gravity learning modules deployed to select sectors."}
                {year === 2024 && "Global expansion. The interface connects minds across the void."}
              </p>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
};
