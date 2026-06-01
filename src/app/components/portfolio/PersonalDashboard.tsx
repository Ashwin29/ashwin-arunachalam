'use client';

import { motion } from 'framer-motion';
import { Book, Code, Lightbulb, Target, LucideIcon } from 'lucide-react';

const dashboard = {
  currentFocus: [
    'AI adoption strategies for SMBs',
    'Business growth systems and frameworks',
    'Product innovation for small businesses',
    'Economic opportunity creation',
  ],
  exploring: [
    'AI automation for operations',
    'Customer support AI systems',
    'Revenue optimization with AI',
    'Scalable business intelligence',
  ],
  building: [
    'AI consulting frameworks',
    'Business growth playbooks',
    'Product validation systems',
    'Future company vision',
  ],
  learning: [
    'SMB operations and pain points',
    'AI implementation strategies',
    'Founder stories and lessons',
    'Building sustainable businesses',
  ],
};

function DashboardCard({
  title,
  items,
  icon: Icon,
  color,
}: {
  title: string;
  items: string[];
  icon: LucideIcon;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='group relative'
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
      />
      <div className='relative p-6 rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:bg-card/70 hover:border-electric-blue/50 transition-all duration-300 h-full'>
        <div className='flex items-center gap-3 mb-6'>
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon className='w-6 h-6' />
          </div>
          <h3 className='text-xl'>{title}</h3>
        </div>
        <ul className='space-y-3'>
          {items.map((item, i) => (
            <li key={i} className='flex items-start gap-3 text-muted-foreground'>
              <span className='w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 flex-shrink-0' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function PersonalDashboard() {
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
            Building Toward
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6'>What I&apos;m Building Toward</h2>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto'>
            Current initiatives, explorations, and the foundation for building an AI adoption company that helps American businesses grow and compete.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
          <DashboardCard
            title='Current Focus'
            items={dashboard.currentFocus}
            icon={Target}
            color='from-electric-blue to-cyan-500'
          />
          <DashboardCard
            title='Exploring'
            items={dashboard.exploring}
            icon={Lightbulb}
            color='from-soft-purple to-pink-500'
          />
          <DashboardCard
            title='Building'
            items={dashboard.building}
            icon={Code}
            color='from-cyan-500 to-teal-500'
          />
          <DashboardCard
            title='Learning'
            items={dashboard.learning}
            icon={Book}
            color='from-indigo-500 to-purple-500'
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-12 p-6 rounded-2xl bg-gradient-to-r from-electric-blue/10 to-soft-purple/10 border border-electric-blue/20 text-center'
        >
          <p className='text-muted-foreground'>
            Last updated: <span className='text-electric-blue'>May 31, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
