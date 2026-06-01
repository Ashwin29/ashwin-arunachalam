'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const contacts = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    handle: '@ashwinarunachalam',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    handle: '@ashwinarunachalam',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:ashwin@example.com',
    handle: 'ashwin@example.com',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    handle: '@ashwin_builds',
  },
];

export function ContactSection() {
  return (
    <section className='relative pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 lg:px-24'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16 px-4'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-white via-electric-blue to-soft-purple bg-clip-text text-transparent leading-tight'>
            Building the Future of Small Business Growth
          </h2>
          <p className='text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12'>
            I&apos;m exploring how AI can help businesses scale faster, make better decisions, and unlock new revenue opportunities. If you&apos;re a founder, operator, investor, or business leader interested in the future of AI adoption, let&apos;s connect.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12'>
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-soft-purple/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:bg-card/70 hover:border-electric-blue/50 transition-all duration-300 flex items-center gap-4 sm:gap-6'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-electric-blue to-soft-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                  <contact.icon className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
                </div>
                <div className='min-w-0'>
                  <div className='text-lg sm:text-xl mb-0.5 sm:mb-1'>{contact.name}</div>
                  <div className='text-sm sm:text-base text-muted-foreground truncate'>{contact.handle}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-center text-muted-foreground'
        >
          <p className='mb-2'>Ashwin Arunachalam · Software Engineer · Product Builder · Founder</p>
          <p className='text-sm'>© 2026 All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
