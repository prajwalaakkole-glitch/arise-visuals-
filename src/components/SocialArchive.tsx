import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Share2, Heart, MessageCircle, X } from 'lucide-react';

const socialPosts = [
  { 
    id: 1, 
    type: 'square', 
    image: 'https://i.postimg.cc/BbM4h9Qt/SAVE-20260416-152016.jpg', 
    platform: 'Instagram', 
    likes: '1.2k',
    title: 'Visual Storytelling'
  },
  { 
    id: 2, 
    type: 'square', 
    image: 'https://i.postimg.cc/Y03Yb9WS/Palmonas.jpg', 
    platform: 'Facebook', 
    likes: '850',
    title: 'Brand Consistency'
  },
  { 
    id: 3, 
    type: 'square', 
    image: 'https://i.postimg.cc/0NjvNHfT/super-you.jpg', 
    platform: 'Instagram', 
    likes: '2.4k',
    title: 'Digital Strategy'
  },
  { 
    id: 5, 
    type: 'mini', 
    image: 'https://i.postimg.cc/tCctfscx/kitty.jpg', 
    platform: 'Facebook', 
    likes: '420',
    title: 'Detail 01'
  },
  { 
    id: 6, 
    type: 'mini', 
    image: 'https://i.postimg.cc/tC6Yq7Tb/DJ-NIGHT-POSTER.jpg', 
    platform: 'Instagram', 
    likes: '930',
    title: 'Detail 02'
  },
  { 
    id: 7, 
    type: 'mini', 
    image: 'https://i.postimg.cc/V6bFBn1X/sabhysachi.jpg', 
    platform: 'Instagram', 
    likes: '1.1k',
    title: 'Detail 03'
  },
  { 
    id: 8, 
    type: 'mini', 
    image: 'https://i.postimg.cc/RFNXq2Nn/enrgey-drink.jpg', 
    platform: 'Instagram', 
    likes: '1.5k',
    title: 'Detail 04'
  },
  { 
    id: 9, 
    type: 'mini', 
    image: 'https://i.postimg.cc/rmxRh9Hx/cold-drink.jpg', 
    platform: 'Facebook', 
    likes: '670',
    title: 'Detail 05'
  },
  { 
    id: 10, 
    type: 'mini', 
    image: 'https://i.postimg.cc/FssgK28z/furniture.png', 
    platform: 'Instagram', 
    likes: '2.1k',
    title: 'Detail 06'
  },
  { 
    id: 11, 
    type: 'mini', 
    image: 'https://i.postimg.cc/Kvs17zcw/COFFEE.png', 
    platform: 'Instagram', 
    likes: '1.8k',
    title: 'Detail 07'
  },
  { 
    id: 12, 
    type: 'mini', 
    image: 'https://i.postimg.cc/NMsvQTHx/bata.jpg', 
    platform: 'Instagram', 
    likes: '2.3k',
    title: 'Detail 08'
  },
];

export default function SocialArchive() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Generate floating gold particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="social-archive" className="relative min-h-screen bg-gradient-to-b from-nebula-blue to-deep-midnight py-32 overflow-hidden">
      {/* Prismatic Overlays / Light Leaks */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-electric-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-warm-crimson/10 rounded-full blur-[150px]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-prism-purple/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating Particles (Gold Coins/Sparkles) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/40 z-0"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-script text-7xl md:text-9xl text-white mb-4 drop-shadow-[0_0_15px_rgba(0,162,255,0.8)]"
          >
            Social <span className="text-electric-blue">Media</span>
          </motion.h2>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-xs text-electric-blue tracking-[0.5em] uppercase block mb-4">Command Center // Archive</span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">
              <span>STATUS: ARCHIVED</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts.map((post, i) => (
            <SocialCard 
              key={post.id} 
              post={post} 
              delay={i * 0.1} 
              onClick={() => setSelectedImage(post.image)}
            />
          ))}
        </div>

        {/* Other Posters Section */}
        <div className="mt-40 mb-16 text-center lg:text-left">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-geometric font-black text-6xl md:text-8xl text-[#FFFFFF] mb-6 uppercase tracking-tighter"
          >
            Other <span className="text-electric-blue">Posters</span>
          </motion.h3>
          <p className="font-geometric text-xl text-[#A0A0A0] max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
            Extended visual archive featuring diverse creative directions, experimental layouts, and specialized brand campaigns beyond social platforms.
          </p>
        </div>

        {/* Other Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
            let imageUrl = `https://picsum.photos/seed/other${id}/800/1200`;
            if (id === 1) imageUrl = 'https://i.postimg.cc/7Zq6DkW2/face.png';
            if (id === 2) imageUrl = 'https://i.postimg.cc/pXRCN9R7/movie-poster.jpg';
            if (id === 3) imageUrl = 'https://i.postimg.cc/253ff4s6/new-minimalist-poster.jpg';
            if (id === 4) imageUrl = 'https://i.postimg.cc/8CLmc3Qb/movie.png';
            if (id === 5) imageUrl = 'https://i.postimg.cc/cJTMf3Cs/ironman.jpg';
            if (id === 6) imageUrl = 'https://i.postimg.cc/XJKjt1kx/brutalism.jpg';
            if (id === 7) imageUrl = 'https://i.postimg.cc/Wz90kc1X/23.jpg';
            if (id === 8) imageUrl = 'https://i.postimg.cc/HskM4bTt/gucci.jpg';
            
            return (
              <motion.div
                key={`other-${id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: id * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedImage(imageUrl)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass-card border-white/5 shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-champagne">
                  <img 
                    src={imageUrl} 
                    alt={`Other Poster ${id}`}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Text content removed per user request */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-8 right-8 px-6 py-3 glass-card rounded-full text-white hover:text-electric-blue transition-all z-[110] flex items-center gap-2 group"
                onClick={() => setSelectedImage(null)}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] group-hover:pr-2 transition-all">Close</span>
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

        {/* Project Description */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 border-t border-white/5">
          <div>
            <h4 className="font-sans font-bold text-2xl text-white mb-6 uppercase tracking-tight">Strategic Content</h4>
            <p className="font-sans text-lg text-white/60 leading-relaxed font-light">
              Developing high-fidelity visual systems that bridge traditional motifs with a high-end editorial aesthetic. The goal is to maintain visual consistency across global platforms while optimizing for high engagement through vibrant, product-focused storytelling.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="glass-card p-8 border-white/5">
              <span className="font-mono text-[10px] text-electric-blue tracking-widest block mb-2 uppercase">Engagement</span>
              <span className="font-sans font-bold text-3xl text-white">+240%</span>
            </div>
            <div className="glass-card p-8 border-white/5">
              <span className="font-mono text-[10px] text-warm-crimson tracking-widest block mb-2 uppercase">Conversion</span>
              <span className="font-sans font-bold text-3xl text-white">12.4%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialCard({ post, delay, isHero = false, onClick }: { post: any; delay: number; isHero?: boolean; onClick: () => void; key?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden glass-card border-white/5 shadow-2xl transition-all duration-500 cursor-pointer ${isHero ? 'aspect-[4/5] lg:aspect-auto lg:h-full' : 'aspect-square'}`}
    >
      {/* Content Image */}
      <div className="absolute inset-0 bg-champagne">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  );
}
