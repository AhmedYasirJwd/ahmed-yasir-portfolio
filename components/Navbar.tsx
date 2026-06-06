'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#050505]/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <MagneticButton
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 font-display font-bold text-lg cursor-none"
          >
            <span className="text-text-secondary font-mono text-sm">{'<'}</span>
            <span className="text-white">AY</span>
            <span className="text-text-secondary font-mono text-sm">{'/>'}</span>
          </MagneticButton>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="relative font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-white transition-colors"
              >
                <span className="text-[#0ea5e9] mr-1">0{i + 1}.</span>
                {link.label}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex gap-4">
            <MagneticButton
              href="/AHMED-YASIR-RESUME.pdf"
              target="_blank"
              download
              className="font-mono text-xs uppercase px-5 py-2 border border-[#0ea5e9]/40 text-[#0ea5e9] hover:bg-[#0ea5e9]/10 rounded transition-all"
            >
              Resume
            </MagneticButton>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0 }} className="block w-6 h-px bg-white" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-4 h-px bg-white/60" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0 }} className="block w-6 h-px bg-white" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-[#050505]/98 flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-display text-3xl font-bold text-white/80"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
