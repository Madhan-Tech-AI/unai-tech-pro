import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { Cpu, Globe, Shield, Zap, Box, Layers } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: '1', title: 'Holographic Learning', description: 'Immersive 3D modules that project directly into the user\'s workspace.', icon: <Box /> },
  { id: '2', title: 'Neural Networks', description: 'AI-driven adaptation that evolves with the student\'s cognitive pace.', icon: <Cpu /> },
  { id: '3', title: 'Global Grid', description: 'Low-latency connection nodes spanning 140+ countries.', icon: <Globe /> },
  { id: '4', title: 'Quantum Security', description: 'End-to-end encryption secured by post-quantum cryptography.', icon: <Shield /> },
  { id: '5', title: 'Instant Sync', description: 'Real-time state synchronization across all connected devices.', icon: <Zap /> },
  { id: '6', title: 'Layered Reality', description: 'AR/VR integration for physical-digital hybrid classrooms.', icon: <Layers /> },
];

export const Services: React.FC = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 text-center">
        SYSTEM <span className="text-neon-blue">MODULES</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <GlassCard key={service.id} delay={i * 0.1} className="group">
            <div className="mb-6 p-4 rounded-full bg-white/5 w-16 h-16 flex items-center justify-center text-neon-blue group-hover:text-neon-purple group-hover:scale-110 transition-all duration-300">
              {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
