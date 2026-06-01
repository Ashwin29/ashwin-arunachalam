'use client';

import { motion } from 'framer-motion';

const companies = ['Meta', 'Microsoft', 'Enterprise Platforms', 'AI Systems', 'Product Engineering'];

export function CredibilityStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24'
    >
      <div className='py-6 sm:py-8 border-t border-electric-blue/10'>
        <p className='text-xs sm:text-sm text-muted-foreground text-center mb-3 sm:mb-4'>
          Trusted experience across:
        </p>
        <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6'>
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
              className='px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-card/30 border border-card-border/50 backdrop-blur-sm hover:bg-card/50 hover:border-electric-blue/50 transition-all duration-300'
            >
              <span className='text-xs sm:text-sm text-foreground/80'>{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
