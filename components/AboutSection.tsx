'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              About Me
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Most of my experience has been building software for companies rather than personal projects.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Over the last few years I've worked remotely with teams across Saudi Arabia, the UK, and the US — building internal tools, CRM systems, dashboards, ecommerce solutions, and large-scale web applications.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I enjoy taking a product from an idea to something people actually use. Whether it's improving performance, building a new feature, or creating an entire system from scratch, I focus on delivering software that makes someone's job easier.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Outside of coding, I'm constantly studying how successful startups build products, scale teams, and solve real-world problems.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex gap-4">
                <span className="text-[#0ea5e9] font-bold">3+</span>
                <span className="text-text-secondary">Years of professional experience</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#0ea5e9] font-bold">3</span>
                <span className="text-text-secondary">Countries worth of remote teams worked with</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#0ea5e9] font-bold">40%</span>
                <span className="text-text-secondary">Site speed improvement delivered at scale</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0ea5e9]/20 to-[#a855f7]/20 border border-white/10 flex items-center justify-center overflow-hidden group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-transparent border-t-[#0ea5e9] border-r-[#06b6d4]"
              />
              <div className="relative z-10 text-center">
                <p className="font-mono text-4xl font-bold gradient-text-blue">AY</p>
                <p className="text-text-secondary text-sm mt-2 font-mono">Full-Stack Dev</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
