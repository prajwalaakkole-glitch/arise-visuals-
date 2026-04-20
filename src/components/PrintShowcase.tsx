import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Bookmark, Heart, Info, X } from 'lucide-react';

const editorialProjects = [
  {
    title: 'VANTAGE // ISSUE 01',
    year: '2026',
    spec: 'Matte Lamination // Spot UV',
    image: 'https://i.postimg.cc/RCDYz8cK/billboard3.jpg',
    desc: 'A deep dive into architectural fashion and sustainable systems.'
  },
  {
    title: 'THE ARCHIVE',
    year: '2025',
    spec: 'Foil Stamping // 120gsm Silk',
    image: 'https://i.postimg.cc/QNQRcS57/bag-mockup.jpg',
    desc: 'A retrospective of minimalist brand identities.'
  },
  {
    title: 'NEXUS // BRANDING',
    year: '2026',
    spec: 'Debossing // Linen Texture',
    image: 'https://i.postimg.cc/Wz0F1CfB/billboard2.jpg',
    desc: 'Exploring the intersection of luxury and digital artifacts.'
  },
  {
    title: 'CORE ELEMENTS',
    year: '2024',
    spec: 'Opaque White // Recycled Card',
    image: 'https://i.postimg.cc/xCxgPJfn/kite-visiting-card.jpg',
    desc: 'A visual guide to foundational design principles.'
  },
  {
    title: 'KINETIC // LAYOUT',
    year: '2025',
    spec: 'Spot Varnish // 150gsm Matte',
    image: 'https://i.postimg.cc/zvkhk4SL/arka-visiting-card.jpg',
    desc: 'Dynamic compositions exploring motion and fluid typography in print.'
  },
  {
    title: 'VOID // SYSTEMS',
    year: '2026',
    spec: 'Laser Cut // Acrylic Inlay',
    image: 'https://i.postimg.cc/HnSRvw5y/Gemini-Generated-Image-vyuq2qvyuq2qvyuq-ezremove.png',
    desc: 'Conceptual brand systems utilizing physical space and negative forms.'
  }
];

const signageProjects = [
  { title: 'Flagship Store', type: 'Roll-up Banner', size: '850x2000mm' },
  { title: 'Exhibition Hall', type: 'Grand Format', size: '3000x5000mm' },
  { title: 'Pop-up Event', type: 'X-Banner', size: '600x1600mm' },
];

export default function PrintShowcase() {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);

  return (
    <section 
      id="print-material" 
      ref={containerRef} 
      className="relative min-h-screen bg-space-navy text-white py-32 overflow-hidden"
    >
      {/* Grid Lines Background */}
      <div className="absolute inset-0 techno-grid opacity-30 pointer-events-none" />

      {/* Grain Texture Filter */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 mix-blend-overlay z-50">
        <filter id="grainy">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainy)" />
      </svg>

      {/* Silky Light Streaks (Flares) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[150%] h-[60%] bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent blur-[120px] rotate-[-15deg] animate-pulse"
          style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-20%] w-[120%] h-[40%] bg-gradient-to-r from-transparent via-prism-purple/10 to-transparent blur-[100px] rotate-[10deg]"
          style={{ clipPath: 'polygon(10% 0, 100% 30%, 90% 100%, 0 70%)' }}
        />
        {/* Light Leaks / Flares */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-electric-cyan/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-[#B01E23]/5 blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-display text-6xl md:text-9xl text-white tracking-[0.1em] drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            PRINT <span className="text-silver">MATERIAL</span>
          </motion.h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent mx-auto mt-8" />
        </div>

        {/* Editorial Reveal Section */}
        <div className="mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {editorialProjects.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-zoom-in"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden glass-card border-white/5 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox / Enlarged View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-space-navy/95 flex items-center justify-center p-6 md:p-12 cursor-zoom-out backdrop-blur-xl"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl max-h-[90vh] glass-card border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
