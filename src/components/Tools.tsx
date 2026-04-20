import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Tool {
  name: string;
  image?: string;
  icon?: LucideIcon;
  color?: string;
}

interface ToolCategory {
  title: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    title: 'Design Tools',
    tools: [
      { name: 'Photoshop', image: 'https://i.postimg.cc/dtRLyVbL/pngwing-com.png' },
      { name: 'Illustrator', image: 'https://i.postimg.cc/XqJQyPJS/pngwing-com-(1).png' },
      { name: 'Premiere Pro', image: 'https://i.postimg.cc/tRxkZ89n/pngwing-com-(2).png' },
      { name: 'Figma', image: 'https://i.postimg.cc/h4wWWW3z/pngwing-com.png' },
    ]
  },
  {
    title: 'AI & Tech',
    tools: [
      { name: 'Claude AI', image: 'https://i.postimg.cc/DZ2c9w9F/icons8-claude-ai-48.png' },
      { name: 'Gemini AI', image: 'https://i.postimg.cc/vTyLrHvN/google-gemini-icon.png' },
      { name: 'ChatGPT', image: 'https://i.postimg.cc/sgPc2W9x/chatgpt-icon.png' },
      { name: 'Adobe Firefly', image: 'https://i.postimg.cc/Fs7g0qy8/Adobe-Firefly-Logo-svg.png' },
      { name: 'Midjourney', image: 'https://i.postimg.cc/k50Xh2zV/Midjourney-Emblem.png' },
    ]
  }
];

export default function Tools() {
  return (
    <section id="tools" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.5em] text-cyan-glow font-bold mb-4 block">
            ARSENAL
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold">Software & Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {toolCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center mb-3 group-hover:glow-border transition-all duration-500 overflow-hidden p-3">
                      {tool.image ? (
                        <img 
                          src={tool.image} 
                          alt={tool.name} 
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        tool.icon && <tool.icon className={`w-8 h-8 ${tool.color} transition-transform duration-500 group-hover:scale-110`} />
                      )}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-violet-glow/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
