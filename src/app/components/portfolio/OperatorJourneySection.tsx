'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Code2,
  Globe,
  Lightbulb,
  Rocket,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  LucideIcon,
} from 'lucide-react';

interface Phase {
  number: string;
  title: string;
  theme: string;
  icon: LucideIcon;
  gradient: string;
  industries?: string[];
  insights?: string[];
  focus?: string[];
  role?: string;
  outcomes?: string[];
  insight?: string;
  mission?: string;
}

const phases: Phase[] = [
  {
    number: '01',
    title: 'Learning How Businesses Work',
    theme: 'Building Foundations',
    industries: ['Retail', 'E-Commerce', 'Energy', 'Enterprise Software'],
    insights: [
      'How businesses generate revenue',
      'Identifying operational bottlenecks',
      'Understanding customer behavior',
      "Technology's role in business outcomes",
    ],
    icon: Building2,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Building Large-Scale Systems',
    theme: 'Growing Responsibility',
    focus: [
      'Product development',
      'Software architecture',
      'User experience design',
      'Data-driven decision making',
      'Business process optimization',
    ],
    icon: Code2,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    number: '03',
    title: 'Operating at Scale',
    theme: 'Global Impact',
    role: 'AI Product Engineer at Meta',
    outcomes: [
      'AI-powered experimentation platforms',
      'Business intelligence systems',
      'Revenue-critical infrastructure',
      'Product decisions impacting millions',
      'Enterprise-scale AI deployment',
    ],
    icon: Globe,
    gradient: 'from-teal-500 to-green-500',
  },
  {
    number: '04',
    title: 'Pattern Recognition',
    theme: 'Connecting the Dots',
    insight:
      'Across every industry and company, the same pattern appears: businesses struggle to adopt new technologies effectively. Many know AI is important. Few know how to operationalize it or connect AI initiatives to measurable business outcomes.',
    icon: Lightbulb,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    number: '05',
    title: 'The Future',
    theme: 'Founder Journey',
    mission:
      'All of these experiences are converging toward a single mission: helping small and mid-sized businesses adopt AI in practical ways that increase revenue, improve efficiency, and create economic opportunity.',
    icon: Rocket,
    gradient: 'from-emerald-500 to-lime-500',
  },
];

const capabilityStack = [
  { label: 'Business Understanding', icon: TrendingUp },
  { label: 'Product Thinking', icon: Lightbulb },
  { label: 'Engineering Excellence', icon: Code2 },
  { label: 'AI Systems', icon: Sparkles },
  { label: 'Scale', icon: Globe },
  { label: 'Leadership', icon: Users },
];

export function OperatorJourneySection() {
  return (
    <section className='relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-midnight-blue/5 to-transparent'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16 md:mb-24'
        >
          <div className='inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-xs sm:text-sm mb-4 sm:mb-6'>
            The Journey
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4'>
            From Engineer to Operator
          </h2>
          <p className='text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto px-4'>
            A career deliberately built to create something meaningful—not by accident, but by design.
          </p>
        </motion.div>

        <div className='relative mb-16 sm:mb-24 md:mb-32'>
          <div className='absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-soft-purple to-transparent' />

          <div className='space-y-12 sm:space-y-16 md:space-y-24'>
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex gap-4 sm:gap-6 md:gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className='flex-shrink-0 md:hidden'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <phase.icon className='w-6 h-6 sm:w-7 sm:h-7' />
                  </motion.div>
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className={`inline-block mb-3 sm:mb-4 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <span
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent opacity-20`}
                    >
                      {phase.number}
                    </span>
                  </div>

                  <div className='mb-3 sm:mb-4'>
                    <div
                      className={`inline-block px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${phase.gradient} bg-opacity-10 border border-current text-xs sm:text-sm mb-2 sm:mb-3`}
                      style={{ borderColor: 'rgba(57, 162, 219, 0.3)' }}
                    >
                      {phase.theme}
                    </div>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4'>{phase.title}</h3>
                  </div>

                  {phase.industries && (
                    <div className='mb-3 sm:mb-4'>
                      <p className='text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3'>Industries:</p>
                      <div
                        className={`flex flex-wrap gap-1.5 sm:gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                      >
                        {phase.industries.map((industry, i) => (
                          <span
                            key={i}
                            className='px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted/30 border border-border text-xs sm:text-sm'
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {phase.insights && (
                    <ul className='space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground'>
                      {phase.insights.map((insight, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                        >
                          <Zap className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-blue mt-1 flex-shrink-0' />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {phase.focus && (
                    <ul className='space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground'>
                      {phase.focus.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                        >
                          <Zap className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-blue mt-1 flex-shrink-0' />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {phase.role && (
                    <div className='mb-3 sm:mb-4'>
                      <div
                        className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r ${phase.gradient} bg-opacity-10 border border-current mb-2 sm:mb-3 text-sm sm:text-base`}
                        style={{ borderColor: 'rgba(57, 162, 219, 0.3)' }}
                      >
                        {phase.role}
                      </div>
                      {phase.outcomes && (
                        <ul className='space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4'>
                          {phase.outcomes.map((outcome, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                            >
                              <Zap className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-blue mt-1 flex-shrink-0' />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {phase.insight && (
                    <p className='text-base sm:text-lg text-muted-foreground leading-relaxed italic border-l-2 border-electric-blue pl-3 sm:pl-4 md:border-l-0 md:border-r-2 md:pr-4'>
                      {phase.insight}
                    </p>
                  )}

                  {phase.mission && (
                    <p className='text-base sm:text-lg leading-relaxed'>{phase.mission}</p>
                  )}
                </div>

                <div className='hidden md:block relative flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <phase.icon className='w-8 h-8 lg:w-10 lg:h-10' />
                  </motion.div>
                </div>

                <div className='flex-1 hidden md:block' />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='relative'
        >
          <div className='text-center mb-8 sm:mb-12'>
            <h3 className='text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 px-4'>The Capability Stack</h3>
            <p className='text-lg sm:text-xl text-muted-foreground px-4'>
              Every experience compounds into the next
            </p>
          </div>

          <div className='max-w-3xl mx-auto'>
            {capabilityStack.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='mb-3 sm:mb-4'
              >
                <div className='group relative'>
                  <div className='absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-soft-purple/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  <div className='relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:bg-card/70 hover:border-electric-blue/50 transition-all duration-300 flex items-center gap-3 sm:gap-4'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-electric-blue to-soft-purple flex items-center justify-center flex-shrink-0'>
                      <capability.icon className='w-5 h-5 sm:w-6 sm:h-6' />
                    </div>
                    <div className='text-base sm:text-lg md:text-xl flex-grow'>{capability.label}</div>
                    {index < capabilityStack.length - 1 && (
                      <div className='text-xl sm:text-2xl text-electric-blue flex-shrink-0'>+</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='mt-6 sm:mt-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-electric-blue/10 to-soft-purple/10 border-2 border-electric-blue/30 text-center'
            >
              <div className='text-3xl sm:text-4xl mb-2'>=</div>
              <div className='text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-electric-blue to-soft-purple bg-clip-text text-transparent'>
                AI Company Builder
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 sm:mt-20 md:mt-24 text-center px-4'
        >
          <p className='text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed text-muted-foreground'>
            This person didn&apos;t wake up one day and decide to start an AI company.
            <br className='hidden sm:block' />
            <span className='block sm:inline mt-2 sm:mt-0'> </span>
            <span className='text-white'>His entire career has been preparing him to build it.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
