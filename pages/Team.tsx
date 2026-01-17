import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';

export const Team: React.FC = () => {
  const team = [
    { name: 'Dr. Aris Thorne', role: 'Chief Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80' },
    { name: 'Elena Vox', role: 'Motion Lead', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80' },
    { name: 'Kaelen Vex', role: 'Systems Ops', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80' },
    { name: 'Suki Chen', role: 'Neural Design', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-display font-bold text-white mb-16 text-center">CREW</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <GlassCard key={member.name} delay={i * 0.1} className="text-center group">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full p-1 border border-neon-blue/30 group-hover:border-neon-blue transition-colors duration-500">
              <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-slow-spin w-full h-full scale-125 pointer-events-none" />
            </div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-neon-blue text-xs uppercase tracking-widest mt-2">{member.role}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
