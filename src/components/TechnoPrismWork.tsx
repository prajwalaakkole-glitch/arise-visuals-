import { motion, useMotionValue, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';

const workCategories = [
  {
    id: '01',
    title: 'logofolio',
    desc: 'Focus on visual systems and logos.',
    position: 'top', // North
    flareColor: 'bg-electric-cyan',
  },
  {
    id: '02',
    title: 'social media',
    desc: 'Focus on tangible assets and typography.',
    position: 'right', // East
    flareColor: 'bg-prism-purple',
  },
  {
    id: '03',
    title: 'print Design',
    desc: 'Focus on the technical execution of assets.',
    position: 'bottom', // South
    flareColor: 'bg-gold',
  },
  {
    id: '04',
    title: 'brand identity',
    desc: 'Focus on digital content and engagement.',
    position: 'left', // West
    flareColor: 'bg-white',
  },
];

export default function TechnoPrismWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="work" className="relative min-h-screen bg-space-navy overflow-hidden flex items-center justify-center py-32">
      {/* Foundation Grid */}
      <div className="absolute inset-0 techno-grid" />
      
      {/* Grainy Texture Overlay */}
      <div className="noise-overlay" />

      {/* Orbital Ellipse / Clock-face */}
      <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-grid-blue/30 rounded-full border-dashed pointer-events-none" />
      <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-grid-blue/20 rounded-full pointer-events-none" />

      {/* Prismatic Flares (Floating Motion) */}
      <motion.div 
        className="prismatic-flare top-[-10%] left-[-10%] w-[500px] h-[500px] bg-electric-cyan opacity-20"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
          scale: hoveredId === '01' ? 1.4 : 1,
          opacity: hoveredId === '01' ? 0.4 : 0.2
        }}
        transition={{ 
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.7 },
          opacity: { duration: 0.7 }
        }}
      />
      <motion.div 
        className="prismatic-flare bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-prism-purple opacity-20"
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 40, 0],
          scale: hoveredId === '02' ? 1.4 : 1,
          opacity: hoveredId === '02' ? 0.4 : 0.2
        }}
        transition={{ 
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.7 },
          opacity: { duration: 0.7 }
        }}
      />
      <motion.div 
        className="prismatic-flare top-[40%] right-[-5%] w-[400px] h-[400px] bg-gold opacity-10"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, 20, 0],
          scale: hoveredId === '03' ? 1.4 : 1,
          opacity: hoveredId === '03' ? 0.3 : 0.1
        }}
        transition={{ 
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.7 },
          opacity: { duration: 0.7 }
        }}
      />
      <motion.div 
        className="prismatic-flare bottom-[20%] left-[-5%] w-[450px] h-[450px] bg-white opacity-10"
        animate={{ 
          x: [0, -25, 0], 
          y: [0, -25, 0],
          scale: hoveredId === '04' ? 1.4 : 1,
          opacity: hoveredId === '04' ? 0.3 : 0.1
        }}
        transition={{ 
          x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.7 },
          opacity: { duration: 0.7 }
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative flex items-center justify-center h-[800px]">
          
          {/* Central Anchor */}
          <motion.div 
            style={{ x: smoothX, y: smoothY }}
            className="text-center z-20"
          >
            <h2 className={`font-wide text-7xl md:text-9xl font-bold tracking-tighter transition-all duration-700 ${hoveredId ? 'text-electric-cyan drop-shadow-[0_0_40px_rgba(0,229,255,0.6)] scale-110' : 'text-white'}`}>
              CONTENT
            </h2>
          </motion.div>

          {/* Quadrants (Radial Orbital Grid) */}
          {workCategories.map((cat) => {
            const posClasses = {
              top: 'top-0 left-1/2 -translate-x-1/2',
              right: 'right-0 top-1/2 -translate-y-1/2',
              bottom: 'bottom-0 left-1/2 -translate-x-1/2',
              left: 'left-0 top-1/2 -translate-y-1/2',
            }[cat.position];

            return (
              <motion.div
                key={cat.id}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`absolute ${posClasses} group cursor-pointer p-12 z-30`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative flex flex-col items-center text-center max-w-[280px]">
                  {/* Haptic Hover Flare */}
                  <div className={`absolute inset-0 ${cat.flareColor} opacity-0 group-hover:opacity-20 blur-[80px] transition-all duration-700 rounded-full scale-50 group-hover:scale-150`} />
                  
                  <span className="chrome-number text-7xl md:text-9xl mb-6 group-hover:scale-110 transition-transform duration-700 ease-out">
                    {cat.id}
                  </span>
                  
                  <h3 className="font-exo italic font-bold text-2xl md:text-3xl text-white tracking-[0.2em] uppercase mb-3 group-hover:text-electric-cyan transition-colors duration-500">
                    {cat.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-silver leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                    {cat.desc}
                  </p>

                  {/* Blueprint Connector */}
                  <div className="mt-8 w-16 h-px bg-grid-blue group-hover:w-32 group-hover:bg-electric-cyan transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}

          {/* Compass Ticks (Technical Cockpit Feel) */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-white" />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-12 bg-white" />
            <div className="absolute left-12 top-1/2 -translate-y-1/2 w-12 h-px bg-white" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-12 h-px bg-white" />
          </div>
        </div>
      </div>

    </section>
  );
}
