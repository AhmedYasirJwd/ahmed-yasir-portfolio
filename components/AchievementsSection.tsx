'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

function Counter({ end, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = end / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <motion.div className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2">
        {count}{suffix}
      </motion.div>
      <p className="text-text-secondary text-sm md:text-base">{label}</p>
    </div>
  );
}

export default function AchievementsSection() {
  const achievements = [
    { end: 40, label: 'Site Speed Improvement', suffix: '%' },
    { end: 30, label: 'Manual Work Reduced', suffix: '%' },
    { end: 3, label: 'Years Professional Experience', suffix: '+' },
    { end: 3, label: 'Countries — Remote Teams', suffix: '' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            By The Numbers
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real impact measured in production — not estimates.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-white/5 hover:border-[#0ea5e9]/30 transition-colors"
            >
              <Counter end={item.end} suffix={item.suffix} label={item.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
