import { motion } from 'motion/react';

export default function Testimonial() {
  return (
    <section className="py-32 bg-twilight noise-texture relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold text-4xl mb-8 block">"</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight mb-12">
            Working with PA DESIGN STUDIO was a transformative experience. Their ability to translate complex technical concepts into a high-end, premium visual language is unparalleled.
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 glow-border">
              <img 
                src="https://picsum.photos/seed/client/200/200" 
                alt="Client" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-white font-bold uppercase tracking-widest text-sm">Marcus Thorne</span>
            <span className="text-slate-500 text-xs uppercase tracking-widest mt-1">CEO // Nebula Systems</span>
          </div>
        </motion.div>
      </div>

      {/* Background Flare */}
      <div className="light-leak bg-gold w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
    </section>
  );
}
