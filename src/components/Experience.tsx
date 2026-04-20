import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Kite online study',
    role: 'Graphic Designer and video editor',
    period: '2025 - present',
    description: 'Developed engaging educational visuals and video content to simplify complex learning concepts for students.',
    achievements: [
      'Designed core brand assets, including logos, brochures, and educational video reels.',
      'Streamlined design workflows using AI-assisted tools to meet urgent project goals.',
      'Balanced multiple complex design tasks while ensuring 100% brand consistency.'
    ]
  },
  {
    company: 'Antrode',
    role: 'Graphic Designer and video editor',
    period: '2024 - 2025',
    description: 'Specializing in compelling visual content and dynamic video editing to elevate brand presence across digital platforms.',
    achievements: [
      'Produced 100+ graphic designs, reels, and web assets for fashion e-commerce.',
      'Utilized Adobe Firefly to generate high-quality AI content and expand brand imagery.',
      'Delivered complex clothing-line campaigns under tight, fast-paced deadlines.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.5em] text-violet-glow font-bold mb-4 block">
            JOURNEY
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow/20 to-violet-glow/20 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass-dark p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <span className="text-xs uppercase tracking-widest text-cyan-glow font-bold mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-sm text-slate-500 italic">{exp.role}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start space-x-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0" />
                        <span className="text-slate-300">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
