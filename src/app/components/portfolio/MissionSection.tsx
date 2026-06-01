'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const capabilities = [
  { icon: Zap, label: 'Automation', description: 'Reduce manual work' },
  { icon: Users, label: 'Customer Support', description: '24/7 intelligent assistance' },
  { icon: TrendingUp, label: 'Decision Support', description: 'Data-driven insights' },
  { icon: Target, label: 'Operations', description: 'Streamlined workflows' },
];

export function MissionSection() {
  return (
    <section className='relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-midnight-blue/10 to-transparent'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16 md:mb-20 px-4'
        >
          <div className='inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-xs sm:text-sm mb-4 sm:mb-6'>
            The AI Shift
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6'>Why I&apos;m Building</h2>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8'>
            Small businesses are the backbone of the American economy. Many struggle to access the tools, expertise, and systems needed to compete effectively.
          </p>
          <p className='text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto mb-4 sm:mb-6'>
            AI fundamentally changes what small businesses can accomplish.
          </p>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto'>
            Capabilities that once required large teams are becoming accessible to everyone. My mission is to help businesses adopt AI in practical ways that increase productivity, unlock growth, and create more opportunity.
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16'>
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-soft-purple/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:bg-card/70 hover:border-electric-blue/50 transition-all duration-300 text-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-electric-blue to-soft-purple flex items-center justify-center'>
                  <item.icon className='w-5 h-5 sm:w-6 sm:h-6' />
                </div>
                <h3 className='text-base sm:text-lg mb-1 sm:mb-2'>{item.label}</h3>
                <p className='text-xs sm:text-sm text-muted-foreground'>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-electric-blue/10 to-soft-purple/10 border border-electric-blue/20 text-center mx-4'
        >
          <p className='text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4'>Not AI for hype.</p>
          <p className='text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-electric-blue to-soft-purple bg-clip-text text-transparent'>
            AI for outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
