'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Calendar } from 'lucide-react';
import { SystemsVisualization } from './SystemsVisualization';
import { CredibilityStrip } from './CredibilityStrip';

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-24 pb-8'>
      <div className='absolute inset-0 bg-gradient-to-br from-midnight-blue/20 via-transparent to-soft-purple/10' />

      <div className='relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='inline-block mb-6'
            >
              <span className='px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-xs sm:text-sm font-semibold tracking-wide'>
                AI Adoption • Business Growth • Founder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-tight'
            >
              <span className='block text-white'>Helping Businesses</span>
              <span className='block bg-gradient-to-r from-electric-blue via-soft-purple to-electric-blue bg-clip-text text-transparent'>
                Turn AI Into Revenue
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl'
            >
              I help businesses identify high-impact AI opportunities, streamline operations, and unlock measurable growth through practical AI adoption and scalable systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 md:mb-12'
            >
              <button className='group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-blue to-soft-purple rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold'>
                <Calendar className='w-4 h-4 sm:w-5 sm:h-5' />
                <span>Book a Strategy Call</span>
              </button>
              <button className='group px-6 sm:px-8 py-3 sm:py-4 bg-card border border-card-border rounded-lg hover:bg-card/80 hover:border-electric-blue/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base flex items-center justify-center gap-2'>
                <span>Explore My Journey</span>
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='flex gap-4'
            >
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className='w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 backdrop-blur-sm'
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className='relative'
          >
            <div className='relative aspect-square rounded-3xl bg-gradient-to-br from-midnight-blue/50 to-black/50 border border-electric-blue/20 overflow-hidden backdrop-blur-sm'>
              <SystemsVisualization />
            </div>
          </motion.div>
        </div>
      </div>

      <CredibilityStrip />
    </section>
  );
}
