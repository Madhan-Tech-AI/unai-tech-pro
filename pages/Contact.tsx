import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-5xl font-display font-bold text-white mb-4 text-center">OPEN <span className="text-neon-purple">CHANNEL</span></h2>
      <p className="text-center text-slate-400 mb-12">Transmission frequency: Secure.</p>
      
      <GlassCard>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-neon-blue">Identity</label>
              <input 
                type="text" 
                className="w-full bg-metal-900/50 border border-white/10 rounded-sm p-4 text-white focus:border-neon-blue focus:outline-none focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-neon-blue">Frequency</label>
              <input 
                type="email" 
                className="w-full bg-metal-900/50 border border-white/10 rounded-sm p-4 text-white focus:border-neon-blue focus:outline-none focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all"
                placeholder="Email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-neon-blue">Transmission</label>
            <textarea 
              rows={5}
              className="w-full bg-metal-900/50 border border-white/10 rounded-sm p-4 text-white focus:border-neon-blue focus:outline-none focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all"
              placeholder="Your message..."
            />
          </div>

          <div className="flex justify-center pt-4">
            <MagneticButton>
              Broadcast <Send className="w-4 h-4" />
            </MagneticButton>
          </div>
        </form>
      </GlassCard>
    </div>
  );
};
