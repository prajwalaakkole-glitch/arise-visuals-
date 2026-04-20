import { motion } from 'motion/react';
import { useState } from 'react';

const categories = [
  { id: '01', title: 'BRAND STRATEGY', href: '#brand-strategy' },
  { id: '02', title: 'DIGITAL ECOSYSTEM', href: '#digital-ecosystem' },
  { id: '03', title: 'TANGIBLE DESIGN', href: '#tangible-design' },
  { id: '04', title: 'THE ARCHITECT', href: '#about' },
];

export default function OrbitalHero() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-grid noise-texture">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Central Focal Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-20 text-center"
        >
          <h1 className="text-7xl md:text-9xl font-future font-bold tracking-[0.2em] chrome-text chromatic-aberration">
            CONTENT
          </h1>
          <p className="font-technical text-xs uppercase tracking-[0.5em] text-cyan-glow mt-4">
            VISUAL STRATEGY DASHBOARD // v2.0
          </p>
        </motion.div>

        {/* Orbital System */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Elliptical Orbits */}
          <div className="orbital-path w-[80vw] h-[40vw] rotate-[15deg] opacity-20" />
          <div className="orbital-path w-[60vw] h-[30vw] rotate-[-10deg] opacity-10" />
          
          {/* Scanning Light SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <ellipse 
              cx="50%" cy="50%" rx="40vw" ry="20vw" 
              className="scan-line fill-none stroke-cyan-glow stroke-[0.5]"
              style={{ transform: 'rotate(15deg)', transformOrigin: 'center' }}
            />
          </svg>
        </div>

        {/* Interactive Orbital Nodes */}
        <div className="absolute inset-0 flex items-center justify-center">
          {categories.map((cat, i) => {
            const angle = (i * 90) * (Math.PI / 180);
            const rx = 35; // horizontal radius in vw
            const ry = 15; // vertical radius in vw
            const x = Math.cos(angle) * rx;
            const y = Math.sin(angle) * ry;

            return (
              <motion.a
                key={cat.id}
                href={cat.href}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: `${x}vw`,
                  y: `${y}vw`,
                }}
                transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                className="absolute z-30 group"
              >
                <div className="relative flex flex-col items-center pointer-events-auto">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center mb-2 transition-all duration-500 ${hovered === cat.id ? 'glow-border scale-110' : ''}`}>
                    <span className="font-technical text-xs text-white">{cat.id}</span>
                  </div>
                  <motion.span 
                    animate={{ opacity: hovered === cat.id ? 1 : 0.5 }}
                    className="font-future text-[10px] md:text-xs tracking-widest text-white whitespace-nowrap"
                  >
                    {cat.title}
                  </motion.span>
                  
                  {/* Connection Line to Center */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[20vw] bg-gradient-to-b from-cyan-glow/0 via-cyan-glow/20 to-cyan-glow/0 -z-10 transition-opacity duration-500 ${hovered === cat.id ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Prismatic Light Leaks */}
      <div className="light-leak bg-cyan-glow w-[600px] h-[600px] top-[-10%] left-[-10%] opacity-10 animate-pulse" />
      <div className="light-leak bg-magenta w-[500px] h-[500px] bottom-[-20%] right-[-10%] opacity-10" />
      <div className="light-leak bg-gold w-[400px] h-[400px] top-[40%] right-[20%] opacity-5" />
    </section>
  );
}
