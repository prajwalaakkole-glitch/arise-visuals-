import { motion } from 'motion/react';

const assets = [
  { id: '02.A', title: 'Motion Sequence', image: 'https://picsum.photos/seed/motion/800/800' },
  { id: '02.B', title: 'Social Interface', image: 'https://picsum.photos/seed/social/800/800' },
  { id: '02.C', title: 'Data Visualization', image: 'https://picsum.photos/seed/data/800/800' },
  { id: '02.D', title: 'Refractive Asset', image: 'https://picsum.photos/seed/refract/800/800' },
];

export default function DigitalEcosystem() {
  return (
    <section id="digital-ecosystem" className="py-32 relative bg-midnight noise-texture">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-technical text-[10px] text-magenta mb-4 block tracking-ultra">
              02 // DIGITAL ECOSYSTEM
            </span>
            <h2 className="text-5xl md:text-7xl font-future font-bold text-white tracking-tight">
              DYNAMIC <br />REACTION
            </h2>
          </div>
          <p className="font-technical text-sm text-slate-500 max-w-xs text-right italic">
            "Every interaction is a data point. Every visual is a strategic asset."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative aspect-square glass overflow-hidden"
            >
              <div className="absolute inset-0 blueprint-grid-fine opacity-20 z-10 pointer-events-none" />
              <img 
                src={asset.image} 
                alt={asset.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
                <span className="font-technical text-[10px] text-cyan-glow mb-1">{asset.id}</span>
                <h3 className="text-white font-future text-xs tracking-widest uppercase">{asset.title}</h3>
              </div>
              
              {/* Technical Corner Labels */}
              <div className="absolute top-4 left-4 z-20 font-technical text-[8px] text-white/40 uppercase tracking-widest">
                Asset_ID: {asset.id}
              </div>
              <div className="absolute top-4 right-4 z-20 font-technical text-[8px] text-white/40 uppercase tracking-widest">
                Status: Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
