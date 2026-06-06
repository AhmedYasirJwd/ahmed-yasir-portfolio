'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-text-secondary text-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for reaching out!');
          }}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#0ea5e9] focus:bg-white/10 transition-all outline-none text-white placeholder-text-muted"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#0ea5e9] focus:bg-white/10 transition-all outline-none text-white placeholder-text-muted"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#0ea5e9] focus:bg-white/10 transition-all outline-none text-white placeholder-text-muted resize-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-6 bg-[#0ea5e9] hover:bg-[#38bdf8] text-[#050505] font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Send Message
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mt-8"
        >
          Or email directly: <a href="mailto:hello@example.com" className="text-[#0ea5e9] hover:underline">hello@example.com</a>
        </motion.p>
      </div>
    </section>
  );
}
