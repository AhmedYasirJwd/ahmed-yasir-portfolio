'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    title: 'Full Stack Web Developer',
    company: 'Moallim United Co., Ltd.',
    period: 'Jul 2024 – May 2026',
    description: 'Led the full frontend rebuild of MCM.sa and built a shipment-management CRM with dashboards and CRUD features. Improved site loading speed by 40% through performance tuning. Integrated REST APIs for seamless data flow and built internal tools using React, Node.js, and MySQL to reduce manual operations.',
    skills: ['React', 'Node.js', 'MySQL', 'REST API', 'Performance Optimization'],
  },
  {
    title: 'MERN Stack Developer',
    company: 'JFR Autoparts',
    period: 'Nov 2023 – Jul 2024',
    description: 'Built and optimized internal tools to improve inventory and order management systems. Developed a warehouse CRM with automation tools including scrapers and auto stock-refill systems. Improved operational efficiency across key workflows.',
    skills: ['React', 'Node.js', 'MySQL', 'MongoDB', 'Automation', 'Web Scraping'],
  },
  {
    title: 'Junior Web Developer',
    company: 'Roch Dog',
    period: 'Feb 2023 – Nov 2023',
    description: 'Debugged and optimized JavaScript and API integrations. Collaborated with the team to deliver web app updates. Created dynamic web UIs for ecommerce clients.',
    skills: ['JavaScript', 'React', 'API Integration', 'Ecommerce'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-text-secondary text-lg">
            3+ years building real products for real companies — remotely.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.title + item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-[#0ea5e9]/30 hover:border-[#0ea5e9] transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-0 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#0ea5e9] group-hover:scale-110 transition-transform" />

              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <span className="font-mono text-sm text-text-secondary">{item.period}</span>
                </div>
                <p className="text-[#0ea5e9] font-semibold">{item.company}</p>
                <p className="text-text-secondary text-base leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-mono bg-[#0ea5e9]/10 text-[#0ea5e9] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
