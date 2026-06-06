'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 78 },
  { name: 'MongoDB', level: 82 },
  { name: 'MySQL', level: 80 },
  { name: 'Git', level: 90 },
  { name: 'GSAP', level: 75 },
  { name: 'Framer Motion', level: 88 },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Tools and technologies I use to build modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-lg border border-white/5 hover:border-[#0ea5e9]/40 transition-all hover:bg-[#0ea5e9]/5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-semibold text-lg">{tech.name}</span>
                <span className="text-[#0ea5e9] text-sm font-mono">{tech.level}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ delay: i * 0.05 + 0.2, duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
