import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { Calendar, MapPin } from 'lucide-react';

export const Events: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-display font-bold text-white mb-12 text-center">TIMELINE <span className="text-neon-purple">SYNCHRONIZATION</span></h2>
      
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <GlassCard key={i} delay={i * 0.1} className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-metal-800 p-6 rounded-sm text-center min-w-[120px] border border-white/5">
              <span className="block text-3xl font-bold text-neon-blue">1{i}</span>
              <span className="block text-xs uppercase tracking-widest text-slate-500">OCT</span>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Quantum Education Summit</h3>
              <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-400 justify-center md:justify-start">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 14:00 - 18:00 UTC</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Neo-Tokyo Virtual Hall</span>
              </div>
            </div>

            <button className="px-6 py-3 border border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-sm">
              Register
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
