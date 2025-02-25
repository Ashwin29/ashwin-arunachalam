'use client';

import React from 'react';
import './Hero.scss';
import { Typography } from '../../typography/Typography';
import { TypewriterText } from '../../typewriter-text/TypewriterText';
import { Button } from '../../foundation/button/Button';
import { AboutModal } from '../../modal/components/about/About';

const Hero: React.FC = () => {
  return (
    <section
      className='hero-section'
      aria-labelledby='hero-heading'
      aria-describedby='hero-description'
    >
      {/* Background Layers */}
      <div className='hero-background' aria-hidden='true'>
        <div className='layer layer-1'></div>
        <div className='layer layer-2'></div>
        <div className='layer layer-3'></div>
      </div>

      {/* Hero Content */}
      <div className='hero-content'>
        <Typography
          variant='header'
          as='h1'
          className='hero-heading'
          id='hero-heading'
        >
          <TypewriterText
            texts={[
              'I’m Ashwin Arunachalam',
              'I build scalable apps that drive exponential growth.',
              'My applications power businesses, increasing revenue by 10x.',
              'The products I’ve built serve 2-5 million daily active users seamlessly.',
              'I engineer platforms optimized for speed, scale, and real-world impact.',
              'I create digital experiences designed to maximize conversions and engagement.',
              'I architect solutions that drive sustained business growth at scale.',
            ]}
            speed={100}
            delay={2000}
            loop={true}
          />
        </Typography>
        <Typography
          variant='sub-header'
          as='p'
          className='hero-tagline fade-in'
          id='hero-description'
        >
          Transforming technology into revenue-generating powerhouses.
        </Typography>
        <div className='hero-buttons slide-up'>
          <AboutModal />
          <Button
            text="Let's Connect"
            link='https://www.linkedin.com/in/ashwin-arunachalam/'
            variant='ghost'
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
