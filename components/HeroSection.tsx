'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 md:px-12 overflow-hidden pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="font-mono text-sm text-[#0ea5e9] uppercase tracking-widest mb-4"
                >
                  Full-Stack MERN Developer
                </motion.p>
                <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                  <span>HELLO,</span>
                  <br />
                  <span className="gradient-text-full">I'M AHMED YASIR</span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-text-secondary"
              >
                Building fast, production-ready web applications — CRMs, dashboards, and internal tools — for remote teams across the US, UK, and Saudi Arabia.
              </motion.p>

              {/* Status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-text-secondary text-sm">Open to new opportunities</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-[#0ea5e9] text-[#050505] font-semibold rounded-lg hover:bg-[#38bdf8] transition-all inline-block text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-[#0ea5e9]/40 text-[#0ea5e9] font-semibold rounded-lg hover:bg-[#0ea5e9]/10 transition-all inline-block text-center"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-96 md:h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/20 to-[#a855f7]/20 rounded-2xl blur-3xl" />
            <div className="absolute inset-0 border border-[#0ea5e9]/10 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold gradient-text-full">{'</>'}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <p className="text-text-secondary text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-[#0ea5e9] rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-[#0ea5e9] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
