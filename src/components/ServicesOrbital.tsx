import { motion } from 'motion/react';

const services = [
  { id: '01', title: 'Brand Identity', icon: '✦' },
  { id: '02', title: 'Social Media', icon: '◈' },
  { id: '03', title: 'Web Design', icon: '✧' },
  { id: '04', title: 'Motion Graphics', icon: '⬖' },
  { id: '05', title: 'AI Integration', icon: '⬙' },
];

export default function ServicesOrbital() {
  return (
    <section id="services" className="py-32 relative min-h-screen flex items-center justify-center overflow-hidden blueprint-grid">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="font-technical text-xs uppercase tracking-ultra text-gold mb-4 block">
            01 // SERVICES
          </span>
          <h2 className="text-6xl md:text-8xl font-elegant glass-text">Orbital Solutions</h2>
        </div>

        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] mx-auto">
          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full glass flex items-center justify-center z-20">
            <div className="text-gold text-4xl md:text-6xl animate-pulse">✦</div>
            <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" />
          </div>

          {/* Orbital Rings */}
          <div className="absolute inset-0 rounded-full border border-sapphire-line" />
          <div className="absolute inset-[15%] rounded-full border border-sapphire-line opacity-50" />
          <div className="absolute inset-[30%] rounded-full border border-sapphire-line opacity-30" />

          {/* Service Nodes */}
          {services.map((service, i) => {
            const angle = (i * 360) / services.length;
            const radius = 50; // percentage
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}%) rotate(-${angle}deg)`,
                }}
              >
                <div className="group relative w-full h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-dark flex items-center justify-center mb-2 group-hover:glow-border group-hover:bg-gold/10 transition-all duration-500">
                    <span className="text-gold text-xl md:text-2xl">{service.icon}</span>
                  </div>
                  <span className="font-technical text-[10px] text-slate-500 mb-1">{service.id}</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-white text-center font-medium group-hover:text-gold transition-colors">
                    {service.title}
                  </span>
                  
                  {/* Connector Line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 md:h-64 bg-gradient-to-t from-gold/0 via-gold/20 to-gold/0 -z-10 rotate-180 origin-top" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Rainbow Flares */}
      <div className="rainbow-flare w-[400px] h-[400px] top-[-10%] left-[-10%]" />
      <div className="rainbow-flare w-[500px] h-[500px] bottom-[-20%] right-[-10%] opacity-10" />
    </section>
  );
}
