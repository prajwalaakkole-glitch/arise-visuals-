import { motion } from 'motion/react';
import { MessageCircle, Twitter, Linkedin, Send, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-32 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Large Scale Serif Typography */}
          <div>
            <span className="section-number -top-20 -left-10">07</span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif italic text-6xl md:text-8xl mb-12 leading-tight glass-chrome-text">
                Thank <span className="text-white">You</span> for Visiting.
              </h2>
              <p className="font-sans text-lg text-text-secondary leading-relaxed mb-12 max-w-md">
                I am currently open to new collaborations and visual strategy projects. Let's build something extraordinary together.
              </p>
              
              <div className="flex gap-6">
                {[
                  { icon: MessageCircle, href: 'https://wa.me/+916361917719' },
                  { icon: Twitter, href: 'https://x.com/AkkolePrajwala' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/prajwala-akkole-221a5b194' },
                  { icon: Instagram, href: 'http://www.instagram.com/arise_visuals' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, color: '#22D3EE' }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-all hover:border-cyan-glow/30"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 border-white/5"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-cyan-glow tracking-[0.3em] uppercase">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans text-sm text-white focus:outline-none focus:border-cyan-glow/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-cyan-glow tracking-[0.3em] uppercase">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans text-sm text-white focus:outline-none focus:border-cyan-glow/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-cyan-glow tracking-[0.3em] uppercase">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 p-4 font-sans text-sm text-white focus:outline-none focus:border-cyan-glow/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-4 glass-card border-cyan-glow/20 text-cyan-glow font-mono text-xs uppercase tracking-[0.3em] hover:bg-cyan-glow hover:text-midnight transition-all flex items-center justify-center gap-3 group">
                <span>Send Message</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-glow/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
}
