import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

const posts = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  image: `https://picsum.photos/seed/social-${i}/600/600`,
  title: `Campaign Post ${i + 1}`,
  category: 'Social Media'
}));

export default function SocialGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="social" className="py-32 bg-twilight noise-texture relative overflow-hidden">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all z-[110] flex items-center gap-2 group"
              onClick={() => setSelectedImage(null)}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Close</span>
              <X size={18} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-script text-white mb-4"
          >
            Social Media
          </motion.h2>
          <p className="font-technical text-[10px] uppercase tracking-ultra text-cyan-glow">
            Digital-First Storytelling // 2026
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-lg glass cursor-pointer"
              onClick={() => setSelectedImage(post.image)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest font-medium">View Post</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero Post */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden glass group cursor-pointer"
          onClick={() => setSelectedImage("https://picsum.photos/seed/hero-post/1920/1080")}
        >
          <img
            src="https://picsum.photos/seed/hero-post/1920/1080"
            alt="Featured Campaign"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <span className="text-cyan-glow font-technical text-[10px] uppercase tracking-widest mb-4">Featured Campaign</span>
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-4">Lunar New Year 2026</h3>
            <p className="text-slate-300 max-w-xl font-light leading-relaxed">
              A high-fidelity visual journey celebrating the intersection of tradition and neo-futurism. 
              Achieved 2M+ reach across global platforms.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Light Leaks */}
      <div className="light-leak bg-cyan-glow w-[600px] h-[600px] top-[-10%] right-[-10%] animate-pulse" />
      <div className="light-leak bg-magenta w-[500px] h-[500px] bottom-[-20%] left-[-10%] opacity-10" />
    </section>
  );
}
