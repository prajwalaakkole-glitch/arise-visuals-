import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Professional Headshot with Glowing Border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <span className="section-number -top-20 -left-10">02</span>
            
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow via-prism-purple to-cyan-glow rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              <div className="relative glass-card overflow-hidden aspect-[4/5]">
                <img
                  src="https://i.postimg.cc/VL0pYCPG/Whats-App-Image-2026-04-17-at-2-37-39-PM.jpg"
                  alt="Professional Portrait"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Technical Overlay */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                <div className="absolute top-4 left-4 font-mono text-[8px] text-cyan-glow uppercase tracking-widest opacity-50">
                  SCAN_ID: 8829-X
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Clean Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="font-serif italic text-5xl md:text-6xl mb-8 leading-tight glass-chrome-text">
              <span className="font-sans font-bold not-italic text-white text-6xl md:text-7xl block">HELLO</span>
              <span className="text-3xl md:text-4xl text-silver/80 mt-2 block font-light tracking-tight">I am <span className="text-white font-medium">Prajwala</span></span>
            </h2>
            
            <div className="space-y-6 font-sans text-text-secondary text-base md:text-lg font-light leading-relaxed max-w-xl">
              <p>
                I’m a creative and motivated <span className="text-white font-medium">graphic designer</span> with a strong passion for visual storytelling and brand design.
              </p>
              <p>
                I thrive on exploring new challenges and opportunities that push the boundaries of my creativity. Known for my creative flair and the ability to deliver impactful designs, I’m always exploring new trends and techniques to sharpen my creative thinking and skills.
              </p>
            </div>

            {/* Stat Box */}
            <div className="mt-12 flex">
              <div className="glass-card p-6 border-white/5 hover:border-cyan-glow/30 transition-colors group min-h-[100px] w-full max-w-[240px]">
                <span className="font-mono text-[10px] text-cyan-glow tracking-widest block mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  EXPERIENCE
                </span>
                <span className="font-serif italic text-2xl text-white">
                  2 YEARS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
