'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

function StatCard({ value, label, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const timer = setTimeout(() => {
      interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          if (interval) clearInterval(interval);
        } else {
          setCount(current);
        }
      }, duration / steps);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [numericValue, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      className='relative group'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-soft-purple/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500' />
      <div className='relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:bg-card/70 hover:border-electric-blue/50 transition-all duration-300'>
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 sm:mb-2 bg-gradient-to-r from-electric-blue to-soft-purple bg-clip-text text-transparent'>
          {count > 0 ? Math.floor(count).toLocaleString() : '0'}
          {suffix}
        </div>
        <div className='text-muted-foreground text-sm sm:text-base md:text-lg'>{label}</div>
      </div>
    </motion.div>
  );
}

export function CredibilitySection() {
  return (
    <section className='relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 px-4'>Impact & Credibility</h2>
          <p className='text-lg sm:text-xl text-muted-foreground px-4'>
            Experience building products that create real business value at scale.
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
          <StatCard value='6+' label='Industries Worked In' delay={200} />
          <StatCard value='40+' label='Million Users Impacted' delay={400} />
          <StatCard value='10+' label='Years Building Software' delay={600} />
          <StatCard value='50+' label='Enterprise Systems Built' delay={800} />
        </div>
      </div>
    </section>
  );
}
