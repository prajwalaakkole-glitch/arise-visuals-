import { motion } from 'motion/react';

export default function BrandStrategy() {
  return (
    <section id="brand-strategy" className="py-32 relative bg-midnight blueprint-grid noise-texture overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 glass">
          
          {/* Left: Technical Data */}
          <div className="lg:col-span-5 p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-technical text-[10px] text-cyan-glow mb-4 block tracking-ultra">
                01 // BRAND STRATEGY
              </span>
              <h2 className="text-4xl md:text-5xl font-future font-bold text-white mb-8 tracking-tight">
                SYSTEMIC <br />IDENTITY
              </h2>
              <div className="space-y-6 font-technical text-sm text-slate-400 leading-relaxed">
                <p>
                  Design as a science. We develop visual systems rooted in mathematical precision and structural integrity.
                </p>
                <div className="p-4 glass-dark rounded-lg border-l-2 border-cyan-glow">
                  <span className="text-[10px] text-slate-500 block mb-2 uppercase">Core Methodology</span>
                  <p className="text-white italic">"The intersection of geometric purity and digital refraction."</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-4 glass-dark rounded-lg">
                <span className="text-[10px] text-slate-500 block mb-1 uppercase">Grid System</span>
                <span className="text-white text-xs">8pt Responsive</span>
              </div>
              <div className="p-4 glass-dark rounded-lg">
                <span className="text-[10px] text-slate-500 block mb-1 uppercase">Ratio</span>
                <span className="text-white text-xs">1.618 (Golden)</span>
              </div>
            </div>
          </div>

          {/* Right: Large Scale Media */}
          <div className="lg:col-span-7 relative min-h-[500px] overflow-hidden group">
            <div className="absolute inset-0 blueprint-grid-fine opacity-30 z-10 pointer-events-none" />
            <img 
              src="https://picsum.photos/seed/strategy/1200/800" 
              alt="Brand Strategy" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            
            {/* Logo Construction Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <svg className="w-64 h-64 text-white/20" viewBox="0 0 100 100">
                <motion.path
                  d="M10 10 L90 10 L90 90 L10 90 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                />
                <motion.circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                />
              </svg>
            </div>
            
            <div className="absolute bottom-8 right-8 z-30">
              <div className="glass px-4 py-2 rounded-full flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
                <span className="font-technical text-[10px] text-white uppercase tracking-widest">Live Construction Grid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
