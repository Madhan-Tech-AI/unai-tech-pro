import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { FloatingElement } from '../components/ui/FloatingElement';
import { ProductItem } from '../types';
import { Check } from 'lucide-react';

const products: ProductItem[] = [
  {
    id: 'core',
    name: 'CORE',
    tagline: 'The Foundation',
    price: '$299/mo',
    features: ['Access to Holo-Deck', 'Basic Analytics', '5 User Nodes']
  },
  {
    id: 'plasma',
    name: 'PLASMA',
    tagline: 'For Power Users',
    price: '$599/mo',
    features: ['Priority Grid Access', 'AI Neural Core', 'Unlimited Nodes', '24/7 Uplink']
  },
  {
    id: 'void',
    name: 'VOID',
    tagline: 'Enterprise Grade',
    price: 'CUSTOM',
    features: ['Dedicated Quantum Server', 'Custom Architecture', 'Full Source Access']
  }
];

export const Products: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-display font-bold text-white mb-4">ARTIFACTS</h2>
        <p className="text-slate-400">Choose your level of engagement.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {products.map((product, i) => (
          <FloatingElement key={product.id} delay={i * 0.3} duration={8} yOffset={i === 1 ? 20 : 10}>
            <GlassCard 
              className={`flex flex-col h-full ${i === 1 ? 'border-neon-blue/50 shadow-[0_0_40px_rgba(0,243,255,0.15)] bg-metal-800/50' : ''}`}
              delay={i * 0.1}
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] text-neon-blue uppercase">{product.tagline}</span>
                <h3 className="text-4xl font-display font-bold text-white mt-2 mb-4">{product.name}</h3>
                <div className="text-2xl font-sans text-slate-300">{product.price}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-neon-blue" />
                    {feat}
                  </li>
                ))}
              </ul>

              <MagneticButton variant={i === 1 ? 'primary' : 'outline'} className="w-full">
                Acquire
              </MagneticButton>
            </GlassCard>
          </FloatingElement>
        ))}
      </div>
    </div>
  );
};
