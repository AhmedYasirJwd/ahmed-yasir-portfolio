'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-lg mb-2">Ahmed Yasir</h3>
            <p className="text-text-secondary text-sm">Frontend Developer crafting digital experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-widest">Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-widest">Social</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <MagneticButton
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#0ea5e9]/30 flex items-center justify-center text-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
                >
                  <Icon size={18} />
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-widest">Get In Touch</h4>
            <MagneticButton
              href="mailto:hello@example.com"
              className="px-4 py-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/40 rounded text-sm text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-[#050505] transition-all inline-block"
            >
              Email Me
            </MagneticButton>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-text-muted text-sm text-center">
            Crafted with Next.js, Framer Motion & Passion — {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
