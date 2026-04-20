import { motion } from 'motion/react';

const education = [
  {
    institution: 'Royal Melbourne Institute of Technology (RMIT)',
    degree: 'Bachelor of Design (Digital Media)',
    year: '2017 - 2020',
    location: 'Ho Chi Minh City'
  },
  {
    institution: 'Google UX Design Professional Certificate',
    degree: 'Advanced Interaction Design Specialization',
    year: '2021',
    location: 'Online'
  },
  {
    institution: 'Design Academy Berlin',
    degree: 'Intensive Motion Graphics Workshop',
    year: '2022',
    location: 'Berlin, Germany'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.5em] text-cyan-glow font-bold mb-4 block">
                ACADEMIC
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold">Education</h2>
            </div>
            <p className="text-slate-500 font-light max-w-xs">
              Continuous learning in the ever-evolving landscape of digital design.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-colors rounded-xl"
              >
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-cyan-glow transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-slate-400 font-light">{edu.degree}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="text-xs uppercase tracking-widest text-slate-500 block">{edu.year}</span>
                  <span className="text-[10px] uppercase tracking-widest text-cyan-glow/60">{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
