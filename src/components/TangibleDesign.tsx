import { motion } from 'motion/react';

export default function TangibleDesign() {
  return (
    <section id="tangible-design" className="py-32 relative bg-midnight blueprint-grid noise-texture overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Section 03: Print Production */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 h-full flex flex-col justify-between"
            >
              <div>
                <span className="font-technical text-[10px] text-gold mb-4 block tracking-ultra">
                  03 // TANGIBLE DESIGN
                </span>
                <h2 className="text-4xl font-future font-bold text-white mb-8 tracking-tight">
                  PHYSICAL <br />INTEGRITY
                </h2>
                <p className="font-technical text-sm text-slate-400 leading-relaxed mb-8">
                  Translating digital precision into tactile experiences. We specialize in high-end production techniques, from foil stamping to custom material selection.
                </p>
              </div>
              
              <div className="relative aspect-video rounded-xl overflow-hidden glass-dark group">
                <img 
                  src="https://picsum.photos/seed/print/800/600" 
                  alt="Print Mockup" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 blueprint-grid-fine opacity-10 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Section 04: Production Systems */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 h-full flex flex-col justify-between"
            >
              <div>
                <span className="font-technical text-[10px] text-violet-glow mb-4 block tracking-ultra">
                  04 // PRODUCTION SYSTEMS
                </span>
                <h2 className="text-4xl font-future font-bold text-white mb-8 tracking-tight">
                  SCALABLE <br />OUTPUT
                </h2>
                <p className="font-technical text-sm text-slate-400 leading-relaxed mb-8">
                  Developing robust production pipelines that ensure brand consistency across global supply chains and multi-platform distribution.
                </p>
              </div>
              
              <div className="relative aspect-video rounded-xl overflow-hidden glass-dark group">
                <img 
                  src="https://picsum.photos/seed/production/800/600" 
                  alt="Production Mockup" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 blueprint-grid-fine opacity-10 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
