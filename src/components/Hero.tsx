import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Prismatic Flares */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-cyan-glow/20 via-prism-purple/20 to-transparent blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-prism-purple/20 via-cyan-glow/20 to-transparent blur-[120px] animate-pulse" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif italic text-[clamp(60px,12vw,150px)] leading-none mb-4 tracking-tighter glass-chrome-text">
            PORTFOLIO 2026
          </h1>
          <p className="font-mono text-cyan-glow text-sm md:text-base tracking-[0.5em] mb-12 uppercase">
            Visual Strategist // Brand Architect
          </p>
        </motion.div>
      </div>
    </section>
  );
}
