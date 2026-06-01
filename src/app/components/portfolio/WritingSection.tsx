'use client';

import { motion } from 'framer-motion';
import { BookOpen, Cpu, Rocket, Users, TrendingUp } from 'lucide-react';

const articles = [
  {
    category: 'AI Adoption',
    title: 'Making AI Practical for Small Businesses',
    excerpt: 'How SMBs can adopt AI without large budgets, technical teams, or complex infrastructure.',
    icon: Cpu,
    readTime: '8 min read',
  },
  {
    category: 'Business Growth',
    title: 'AI as a Revenue Multiplier',
    excerpt: 'Real strategies for using AI to unlock new revenue streams and scale faster.',
    icon: TrendingUp,
    readTime: '7 min read',
  },
  {
    category: 'Product Strategy',
    title: 'Building Products Customers Actually Pay For',
    excerpt: 'Lessons from shipping products that solve real problems and generate revenue.',
    icon: Rocket,
    readTime: '10 min read',
  },
  {
    category: 'Systems Thinking',
    title: 'From Engineer to Operator to Founder',
    excerpt: 'The mindset shifts required to go from building code to building companies.',
    icon: Users,
    readTime: '9 min read',
  },
  {
    category: 'Entrepreneurship',
    title: 'The Unsexy Side of Building a Company',
    excerpt: 'What nobody tells you about starting a business—operations, sales, and persistence.',
    icon: BookOpen,
    readTime: '11 min read',
  },
  {
    category: 'Technology Trends',
    title: 'The AI Adoption Gap',
    excerpt: 'Why most businesses are still waiting to adopt AI and what that means for founders.',
    icon: Cpu,
    readTime: '6 min read',
  },
];

export function WritingSection() {
  return (
    <section className='relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-midnight-blue/10 to-transparent'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16 md:mb-20 px-4'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6'>Ideas, Systems & Insights</h2>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto'>
            Exploring AI adoption, business growth, product strategy, and what it takes to build companies that create real value.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-soft-purple/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:bg-card/70 hover:border-electric-blue/50 transition-all duration-300 flex flex-col'>
                <div className='flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center flex-shrink-0'>
                    <article.icon className='w-4 h-4 sm:w-5 sm:h-5 text-electric-blue' />
                  </div>
                  <span className='text-xs sm:text-sm text-electric-blue'>{article.category}</span>
                </div>

                <h3 className='text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-electric-blue transition-colors'>
                  {article.title}
                </h3>

                <p className='text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 flex-grow'>
                  {article.excerpt}
                </p>

                <div className='flex items-center justify-between text-xs sm:text-sm text-muted-foreground'>
                  <span>{article.readTime}</span>
                  <span className='text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity'>
                    Read more →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
