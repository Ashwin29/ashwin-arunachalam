'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-electric-blue to-soft-purple hover:shadow-lg hover:shadow-electric-blue/30 transition-all duration-300 flex items-center justify-center group'
          aria-label='Scroll to top'
        >
          <ArrowUp className='w-6 h-6 group-hover:-translate-y-1 transition-transform' />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
