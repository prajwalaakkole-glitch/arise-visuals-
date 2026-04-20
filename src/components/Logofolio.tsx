import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

const logos = [
  {
    id: '01',
    title: 'Arka',
    category: 'Sustainable Fashion',
    concept: 'Arka is a sustainable fashion brand focused on minimalist design and ethical craftsmanship. It creates timeless, high-quality essentials that balance modern style with eco-conscious values.',
    typography: 'Serif Acros has a luxury, vintage-modern aesthetic',
    colors: ['#2B2B2B', '#B4B4B4', '#D4D4D4', '#FFFFFF', '#000000'],
    image: 'https://i.postimg.cc/NfhBs4Zj/MAIN-LOGO-w-01.png'
  },
  {
    id: '02',
    title: 'KITE',
    category: 'Academic Strategy',
    concept: 'A visual metaphor for controlled growth, where the "Kite" represents student ambition and the branding symbolizes the expert guidance needed to reach peak performance.',
    typography: 'This logo is a customized, geometric display typeface designed to look modern and digital.',
    colors: ['#000000', '#FFFFFF', '#1B4F72'],
    image: 'https://i.postimg.cc/cLBnM6fs/logol1-01.png'
  }
];

export default function Logofolio() {
  const [selectedLogo, setSelectedLogo] = useState<typeof logos[0] | null>(null);

  return (
    <section id="logofolio" className="relative min-h-screen bg-space-navy py-32 overflow-hidden">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 techno-grid opacity-10" />
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {/* Persistent Ultra-Thin Header */}
        <div className="flex justify-between items-end mb-12 pb-4 border-b border-grid-blue/30">
          <div>
            <span className="font-mono text-[10px] text-cyan-glow tracking-[0.5em] uppercase block mb-2">Archive // 2026</span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-white">Logofolio</h2>
          </div>
        </div>

        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              layoutId={`logo-${logo.id}`}
              onClick={() => setSelectedLogo(logo)}
              className="group relative aspect-square bg-space-navy flex items-center justify-center cursor-pointer overflow-hidden border border-grid-blue/20 rounded-3xl"
              whileHover={{ zIndex: 10 }}
            >
              {/* Subtle Grid Cell Border */}
              <div className="absolute inset-0 border border-grid-blue/10 group-hover:border-cyan-glow/30 transition-colors duration-500 rounded-3xl" />
              
              {/* Logo Container */}
              <motion.div 
                className="relative z-10 p-16 transition-transform duration-700 group-hover:scale-110"
              >
                <img 
                  src={logo.image} 
                  alt={logo.title} 
                  className="max-w-full max-h-full object-contain filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Hover Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-end items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <ArrowRight size={16} className="text-cyan-glow" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-end"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-midnight/90 backdrop-blur-xl"
              onClick={() => setSelectedLogo(null)}
            />

            {/* Content Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="relative w-full max-w-2xl h-full bg-space-navy border-l border-white/10 overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedLogo(null)}
                className="absolute top-8 right-8 p-4 glass-card rounded-full text-white hover:text-cyan-glow transition-colors z-50"
              >
                <X size={24} />
              </button>

              <div className="p-12 md:p-24">
                <span className="font-mono text-xs text-cyan-glow tracking-[0.5em] uppercase block mb-8">Project Detail // {selectedLogo.id}</span>
                
                <div className="aspect-[4/3] glass-card mb-16 flex items-center justify-center p-12 overflow-hidden">
                  <motion.img 
                    layoutId={`logo-${selectedLogo.id}`}
                    src={selectedLogo.image} 
                    alt={selectedLogo.title}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h2 className="font-serif italic text-6xl md:text-8xl text-white mb-16 leading-none">{selectedLogo.title}</h2>

                <div className="space-y-16">
                  <section>
                    <h4 className="font-mono text-[10px] text-cyan-glow tracking-[0.4em] uppercase mb-6 pb-2 border-b border-grid-blue/30">Concept</h4>
                    <p className="font-sans text-lg text-text-secondary leading-relaxed font-light">
                      {selectedLogo.concept}
                    </p>
                  </section>

                  <section>
                    <h4 className="font-mono text-[10px] text-cyan-glow tracking-[0.4em] uppercase mb-6 pb-2 border-b border-grid-blue/30">Typography</h4>
                    <p className="font-sans text-lg text-text-secondary leading-relaxed font-light">
                      {selectedLogo.typography}
                    </p>
                  </section>

                  <section>
                    <h4 className="font-mono text-[10px] text-cyan-glow tracking-[0.4em] uppercase mb-6 pb-2 border-b border-grid-blue/30">Color Story</h4>
                    {selectedLogo.id === '02' && (
                      <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-6 -mt-4">Base Colors</p>
                    )}
                    <div className="flex gap-4">
                      {selectedLogo.colors.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                          <div 
                            className="w-16 h-16 rounded-full border border-white/10"
                            style={{ backgroundColor: color }}
                          />
                          <span className="font-mono text-[8px] text-silver uppercase">{color}</span>
                        </div>
                      ))}
                    </div>
                    {selectedLogo.id === '02' && (
                      <>
                        <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-8 mb-6">Kite Icon Colors (rainbow segments)</p>
                        <div className="flex gap-4">
                          {['#E8192C', '#F7941D', '#FFD700', '#39B54A', '#00AEEF', '#C1268F'].map((color, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                              <div 
                                className="w-16 h-16 rounded-full border border-white/10"
                                style={{ backgroundColor: color }}
                              />
                              <span className="font-mono text-[8px] text-silver uppercase">{color}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </section>
                </div>

                <div className="mt-24 pt-12 border-t border-grid-blue/30">
                  <button 
                    onClick={() => setSelectedLogo(null)}
                    className="group flex items-center gap-4 font-mono text-xs text-white hover:text-cyan-glow transition-colors uppercase tracking-widest"
                  >
                    <span>Back to Archive</span>
                    <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-cyan-glow transition-all duration-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
