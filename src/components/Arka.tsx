import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';

const colorPalette = [
  { name: '#2B2B2B', hex: '#2B2B2B', desc: 'Color Code' },
  { name: '#B4B4B4', hex: '#B4B4B4', desc: 'Color Code' },
  { name: '#D4D4D4', hex: '#D4D4D4', desc: 'Color Code' },
  { name: '#FFFFFF', hex: '#FFFFFF', desc: 'Color Code' },
  { name: '#000000', hex: '#000000', desc: 'Color Code' },
];

const mockups = [
  { title: 'Brand Signature', category: 'Visual Asset', image: 'https://i.postimg.cc/vHNgpXRm/Gemini-Generated-Image-oodhvqoodhvqoodh-ezremove.png' },
  { title: 'Logotype System', category: 'Typography', image: 'https://i.postimg.cc/d3P2bYL4/Gemini-Generated-Image-5hwo2f5hwo2f5hwo-ezremove.png' },
  { title: 'Brand Pattern', category: 'Graphic System', image: 'https://i.postimg.cc/3wYPHsDG/Gemini-Generated-Image-4k49154k49154k49-(1).png' },
  { title: 'Packaging Suite', category: 'Physical Asset', image: 'https://i.postimg.cc/Th8yVy9C/Gemini-Generated-Image-5zpfx65zpfx65zpf-ezremove.png' },
  { title: 'Brand Lifestyle', category: 'Creative Direction', image: 'https://i.postimg.cc/xCDpkgr4/Gemini-Generated-Image-kffckekffckekffc-ezremove.png' },
];

export default function Arka() {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="arka" ref={containerRef} className="relative bg-midnight text-white overflow-hidden py-32 border-t border-white/5">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-midnight/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Enlarged View"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Brand Identity Headline */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-geometric text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Brand Identity
          </motion.h2>
          <p className="font-mono text-xs text-silver tracking-[0.3em] uppercase">
            Visual Language // Core Assets
          </p>
        </div>

        {/* Primary Showcase: Bento Grid */}
        <div id="identity" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 scroll-mt-40">
          <motion.div 
            className="md:col-span-2 aspect-square glass-card overflow-hidden relative group cursor-zoom-in"
            whileHover={{ scale: 0.99 }}
            onClick={() => setSelectedImage('https://i.postimg.cc/Cxh8G9sq/MAIN-LOGO-w-01.png')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center p-0">
              <img 
                src="https://i.postimg.cc/Cxh8G9sq/MAIN-LOGO-w-01.png" 
                alt="Primary Monogram"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <div 
              className="aspect-square glass-card bg-white flex items-center justify-center p-1 cursor-zoom-in"
              onClick={() => setSelectedImage('https://i.postimg.cc/DZNV6VXM/MAIN-LOGO1-01.png')}
            >
              <img 
                src="https://i.postimg.cc/DZNV6VXM/MAIN-LOGO1-01.png" 
                alt="Secondary Monogram"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div 
              className="aspect-square glass-card bg-white/10 border-white/20 flex items-center justify-center p-0 cursor-zoom-in"
              onClick={() => setSelectedImage('https://i.postimg.cc/gjq3HpwB/MAIN-LOGO2-01.png')}
            >
              <img 
                src="https://i.postimg.cc/gjq3HpwB/MAIN-LOGO2-01.png" 
                alt="Brand Mark Variant"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Pattern Section */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-12 border-y border-white/5 mb-32">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-24 whitespace-nowrap"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-24">
                <span className="font-geometric text-4xl font-bold text-white/10 tracking-widest">ARKA</span>
                <div className="w-8 h-8 border-2 border-white/10 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual Toolkit: Color Chips */}
        <div className="mb-32">
          <h3 className="font-mono text-xs text-white tracking-[0.5em] uppercase mb-12">Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {colorPalette.map((color) => (
              <motion.div
                key={color.hex}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div 
                  className="aspect-square rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mockup Gallery: A4 Grid Scale */}
        <div id="applications" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 scroll-mt-40">
          {mockups.map((mockup, i) => (
            <motion.div
              key={mockup.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-zoom-in"
              onClick={() => setSelectedImage(mockup.image)}
            >
              <div className="relative aspect-[210/297] rounded-2xl overflow-hidden glass-card border-white/5 mb-6">
                <img 
                  src={mockup.image} 
                  alt={mockup.title}
                  className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8">
                  {/* Text labels removed per user request */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Strategy */}
        <div className="max-w-3xl mx-auto text-center mb-32">
          <span className="font-mono text-xs text-white tracking-[0.5em] uppercase mb-8 block">Strategy // Goals</span>
          <h3 className="font-geometric text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Building a <span className="italic">System</span>, Not Just a Logo.
          </h3>
          <p className="font-sans text-lg text-silver leading-relaxed font-light">
            In an era of rapid consumption, Arka stands for architectural permanence. Every touchpoint—from the digital checkout to the physical clothing tag—is governed by a strict geometric grid. This ensures that the brand remains recognizable even when stripped of its primary wordmark.
          </p>
        </div>

      </div>
    </section>
  );
}
