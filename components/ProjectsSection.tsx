'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'MCM.sa — Full Frontend Rebuild',
    description: 'Led the complete frontend rebuild of MCM.sa from scratch. Owned the entire UI, architecture, and performance tuning — cutting load times by 40%. Built for scale for a Saudi Arabian company.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'REST API'],
    category: 'Enterprise Web',
    metric: '40% faster load time',
    index: '01',
  },
  {
    title: 'Shipment Management CRM',
    description: 'Full MERN CRM used daily by operations teams. Real-time dashboards, full CRUD, REST API integrations — built to replace a manual workflow end-to-end.',
    tech: ['React', 'Node.js', 'MySQL', 'Express.js'],
    category: 'CRM / Internal Tool',
    metric: 'Used in production daily',
    index: '02',
  },
  {
    title: 'Warehouse CRM & Automation',
    description: 'Warehouse management CRM for JFR Autoparts with built-in automation — scrapers and auto stock-refill systems. Cut manual operations work by 30%.',
    tech: ['React', 'Node.js', 'MySQL', 'Web Scraping'],
    category: 'Automation / CRM',
    metric: '30% less manual work',
    index: '03',
  },
  {
    title: 'Inventory & Order Management System',
    description: 'Internal tooling for inventory and order workflows, with CRM modules and real-time data sync. Built to handle the complexity of a live autoparts business.',
    tech: ['React', 'Node.js', 'MySQL', 'MongoDB'],
    category: 'Internal Tool',
    metric: 'Cross-team production tool',
    index: '04',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Real systems built for real businesses — not side projects. Each one was used in production by actual teams.
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              className="group relative p-6 md:p-8 rounded-xl border border-white/5 hover:border-[#0ea5e9]/40 bg-white/[0.02] hover:bg-[#0ea5e9]/[0.04] transition-all duration-300 cursor-default"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[#0ea5e9]/40 text-sm">{project.index}</span>
                  <span className="px-2.5 py-1 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-mono uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#0ea5e9]/60 bg-[#0ea5e9]/5 border border-[#0ea5e9]/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {project.metric}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-[#38bdf8] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-base leading-relaxed mb-5 max-w-2xl">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/8 text-text-secondary text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary font-mono text-sm">
            More projects coming soon — adding case studies with screenshots and metrics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
