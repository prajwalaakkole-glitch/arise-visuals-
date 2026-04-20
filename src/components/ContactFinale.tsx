import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Github, Twitter, Linkedin, Instagram, ArrowUp, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function ContactFinale() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-32 relative overflow-hidden bg-midnight noise-texture">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-serif font-bold chrome-text mb-8"
          >
            THANK YOU.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-slate-500 uppercase tracking-[0.5em] text-xs font-medium"
          >
            FOR EXPLORING THE ARCHIVE // 2026
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Phone, label: 'Phone', value: '+84 123 456 789', color: 'cyan-glow' },
            { icon: MessageCircle, label: 'WhatsApp', value: '+91 63619 17719', color: 'magenta' },
            { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, VN', color: 'gold' },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl flex flex-col items-center group relative cursor-pointer"
              onClick={() => copyToClipboard(item.value, item.label)}
            >
              <div className={`w-16 h-16 rounded-full bg-${item.color}/10 flex items-center justify-center mb-6 group-hover:bg-${item.color}/20 transition-colors`}>
                <item.icon className={`text-${item.color} w-8 h-8`} />
              </div>
              <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">{item.label}</span>
              <span className="text-xl text-white font-medium text-center">{item.value}</span>
              
              {/* Tooltip */}
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass text-[10px] uppercase tracking-widest text-white transition-all duration-300 ${copied === item.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="flex items-center space-x-2">
                  <Check size={12} className="text-emerald-400" />
                  <span>Copied to Clipboard</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Copy size={14} className="text-slate-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            © 2026 PA DESIGN STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
            <a href="https://x.com/AkkolePrajwala" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>
            <a href="https://www.linkedin.com/in/prajwala-akkole-221a5b194" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
            <a href="http://www.instagram.com/arise_visuals" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full glass flex items-center justify-center group z-50 hover:glow-border transition-all duration-500"
      >
        <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-glow/10 to-transparent pointer-events-none" />
    </footer>
  );
}
