'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-electric-blue/10' : ''
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-6'>
          <div className='flex items-center justify-between gap-4'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-electric-blue to-soft-purple bg-clip-text text-transparent cursor-pointer font-signature'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className='hidden sm:inline'>Ashwin Arunachalam</span>
              <span className='inline sm:hidden'>AA</span>
            </motion.div>

            <div className='hidden md:flex items-center gap-8'>
              {['About', 'Writing', 'Contact'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='text-muted-foreground hover:text-electric-blue transition-colors duration-300'
                >
                  {item}
                </button>
              ))}
              <button className='px-6 py-2 bg-gradient-to-r from-electric-blue to-soft-purple rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300'>
                Resume
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center'
            >
              {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-black/95 backdrop-blur-lg border-l border-electric-blue/20 z-40 md:hidden'
          >
            <div className='flex flex-col h-full p-8 pt-24'>
              {['About', 'Writing', 'Contact'].map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='text-left text-2xl py-4 text-muted-foreground hover:text-electric-blue transition-colors duration-300'
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className='mt-8 px-8 py-4 bg-gradient-to-r from-electric-blue to-soft-purple rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300'
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
