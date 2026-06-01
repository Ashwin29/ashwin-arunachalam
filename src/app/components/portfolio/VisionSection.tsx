'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Sparkles, Globe, Users, Zap } from 'lucide-react';

const visionPoints = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description: 'Unlock new growth opportunities with AI-powered insights and automation',
  },
  {
    icon: Zap,
    title: 'Improve Efficiency',
    description: 'Reduce operational overhead and streamline workflows',
  },
  {
    icon: Sparkles,
    title: 'Reduce Friction',
    description: 'Eliminate bottlenecks and manual processes',
  },
  {
    icon: Users,
    title: 'Create Jobs',
    description: 'Enable businesses to scale and hire more people',
  },
  {
    icon: Globe,
    title: 'Compete Globally',
    description: 'Level the playing field with enterprise-grade capabilities',
  },
  {
    icon: Rocket,
    title: 'Amplify Ambition',
    description: 'Technology should not replace ambition—it should amplify it',
  },
];

export function VisionSection() {
  return (
    <section className='relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16 md:mb-20 px-4'
        >
          <div className='inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-xs sm:text-sm mb-4 sm:mb-6'>
            Looking Ahead
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6'>The Long-Term Vision</h2>
          <p className='text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8'>
            I believe the next generation of business growth will come from combining human expertise with AI.
          </p>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto'>
            The goal is to build products, systems, and services that help businesses succeed in the AI era.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16'>
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-soft-purple/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:bg-card/70 hover:border-electric-blue/50 transition-all duration-300'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-electric-blue to-soft-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <point.icon className='w-6 h-6 sm:w-7 sm:h-7' />
                </div>
                <h3 className='text-lg sm:text-xl mb-2 sm:mb-3'>{point.title}</h3>
                <p className='text-sm sm:text-base text-muted-foreground'>{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-midnight-blue/30 to-soft-purple/20 border border-electric-blue/30 text-center mx-4'
        >
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 bg-gradient-to-r from-white via-electric-blue to-soft-purple bg-clip-text text-transparent leading-tight'>
            Technology should not replace ambition.
            <br className='hidden sm:block' />
            <span className='block sm:inline mt-2 sm:mt-0'> </span>
            It should amplify it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
