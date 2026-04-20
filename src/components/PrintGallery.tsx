import { motion } from 'motion/react';

const mockups = [
  { id: 1, title: 'Luxury Tote Bag', image: 'https://picsum.photos/seed/tote/800/1000', size: 'row-span-2' },
  { id: 2, title: 'Premium Business Cards', image: 'https://picsum.photos/seed/cards/800/600', size: '' },
  { id: 3, title: 'Editorial Flyer', image: 'https://picsum.photos/seed/flyer/800/600', size: '' },
  { id: 4, title: 'Brand Packaging', image: 'https://picsum.photos/seed/pkg/800/1000', size: 'row-span-2' },
  { id: 5, title: 'Corporate Stationery', image: 'https://picsum.photos/seed/stationery/800/600', size: '' },
  { id: 6, title: 'Exhibition Poster', image: 'https://picsum.photos/seed/poster/800/1200', size: 'row-span-2' },
];

export default function PrintGallery() {
  return (
    <section id="print" className="py-32 bg-midnight noise-texture">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-script text-white mb-4"
            >
              Print Design
            </motion.h2>
            <p className="font-technical text-[10px] uppercase tracking-ultra text-magenta">
              Tactile Production // Physical Assets
            </p>
          </div>
          <p className="text-slate-500 font-light max-w-xs text-right italic">
            "Design is not just what it looks like and feels like. Design is how it works in the real world."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {mockups.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`group relative rounded-2xl overflow-hidden bg-slate-800/50 ${item.size}`}
            >
              <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs uppercase tracking-widest text-white font-medium">{item.title}</span>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Production Ready</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
