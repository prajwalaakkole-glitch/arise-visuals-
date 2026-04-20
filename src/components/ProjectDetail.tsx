import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function ProjectDetail() {
  return (
    <section id="project-detail" className="py-32 relative bg-midnight overflow-hidden">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 mb-16">
        <nav className="flex items-center space-x-4 font-technical text-[10px] uppercase tracking-widest text-slate-500">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <ChevronRight size={12} />
          <a href="#experience" className="hover:text-gold transition-colors">Projects</a>
          <ChevronRight size={12} />
          <span className="text-gold">Brand Identity // PA STUDIO</span>
        </nav>
      </div>

      {/* Blueprint Header */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-technical text-xs text-gold mb-4 block">SPECIFICATION // 01.A</span>
            <h1 className="text-7xl md:text-9xl glass-text mb-8 leading-none">PA <br />IDENTITY</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              A comprehensive brand manual developed for the next generation of digital architects. 
              The identity balances mathematical precision with ethereal aesthetics.
            </p>
          </motion.div>
        </div>
        <div className="lg:col-span-5 flex items-end">
          <div className="w-full glass p-8 rounded-2xl blueprint-grid-fine relative">
            <div className="absolute top-4 right-4 font-technical text-[10px] text-gold/50">REF: 2026-X1</div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-sapphire-line pb-2">
                <span className="font-technical text-[10px] text-slate-500 uppercase">Client</span>
                <span className="text-xs text-white">Nebula Systems</span>
              </div>
              <div className="flex justify-between border-b border-sapphire-line pb-2">
                <span className="font-technical text-[10px] text-slate-500 uppercase">Sector</span>
                <span className="text-xs text-white">Creative Tech</span>
              </div>
              <div className="flex justify-between border-b border-sapphire-line pb-2">
                <span className="font-technical text-[10px] text-slate-500 uppercase">Timeline</span>
                <span className="text-xs text-white">12 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logic Section */}
      <div className="relative py-32 blueprint-grid">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <span className="text-[40vw] font-serif font-bold select-none">A</span>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-square glass rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 blueprint-grid-fine opacity-20" />
              <svg className="w-full h-full p-20 text-gold" viewBox="0 0 100 100">
                <motion.path
                  d="M50 10 L90 90 L10 90 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="50" cy="50" r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
              <div className="absolute bottom-6 left-6 font-technical text-[10px] text-gold uppercase">
                Construction Grid // v1.0
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="font-technical text-xs text-gold mb-4 block">02 // BRAND LOGIC</span>
            <h2 className="text-4xl md:text-5xl font-elegant text-white mb-8">The Geometry of Void</h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
              The PA logo is constructed using the Golden Ratio, ensuring perfect visual balance across all scales. 
              The central triangle represents stability and direction, while the orbital circle symbolizes the infinite 
              possibilities of the digital realm.
            </p>
            <button className="group flex items-center space-x-4 text-xs uppercase tracking-widest text-white hover:text-gold transition-colors">
              <span>Read Full Case Study</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Style Guide Block */}
      <div className="py-32 bg-sapphire/10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="font-technical text-xs text-gold mb-4 block">03 // STYLE GUIDE</span>
            <h2 className="text-4xl font-elegant text-white">Visual DNA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-2xl">
              <div className="w-full h-32 bg-midnight rounded-xl mb-4 border border-white/10" />
              <div className="flex justify-between items-center">
                <span className="font-technical text-[10px] text-slate-500">MIDNIGHT</span>
                <span className="font-technical text-[10px] text-white">#020617</span>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="w-full h-32 bg-sapphire rounded-xl mb-4 border border-white/10" />
              <div className="flex justify-between items-center">
                <span className="font-technical text-[10px] text-slate-500">SAPPHIRE</span>
                <span className="font-technical text-[10px] text-white">#001B48</span>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="w-full h-32 bg-gold rounded-xl mb-4 border border-white/10" />
              <div className="flex justify-between items-center">
                <span className="font-technical text-[10px] text-slate-500">GOLD</span>
                <span className="font-technical text-[10px] text-white">#FDE68A</span>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="w-full h-32 bg-cream rounded-xl mb-4 border border-white/10" />
              <div className="flex justify-between items-center">
                <span className="font-technical text-[10px] text-slate-500">CREAM</span>
                <span className="font-technical text-[10px] text-white">#FFFBEB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Showcase */}
      <div className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="font-technical text-xs text-gold mb-4 block">04 // ADAPTABILITY</span>
              <h2 className="text-4xl font-elegant text-white mb-8">Multi-Platform Presence</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                From ultra-wide cinema displays to mobile screens, the PA identity maintains its 
                integrity. We've developed a responsive grid system that adapts typography and 
                visual density dynamically.
              </p>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="glass p-4 rounded-3xl blueprint-grid-fine">
                <img 
                  src="https://picsum.photos/seed/responsive/1200/800" 
                  alt="Responsive Showcase" 
                  className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 glass p-2 rounded-2xl shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/mobile/400/800" 
                  alt="Mobile View" 
                  className="w-full rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Line */}
      <div className="fixed top-0 left-0 w-1 h-full z-50 pointer-events-none">
        <motion.div 
          className="w-full bg-gradient-to-b from-cyan-glow via-violet-glow to-gold shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          style={{ height: "var(--scroll-progress, 0%)" }}
        />
      </div>
    </section>
  );
}
