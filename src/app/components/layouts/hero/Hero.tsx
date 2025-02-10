'use client';

import React from 'react';
import './Hero.scss';
import { Typography } from '../../typography/Typography';
import { TypewriterText } from '../../typewriter-text/TypewriterText';
import { CTA } from '../../cta/CTA';

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
              "I'm Ashwin Arunachalam",
              'I build scalable apps that increases revenue by 10x',
              'The apps I built have 2-5 million daily active users',
              'I optimize platforms for speed, scale, and impact',
              'I craft experiences that maximize conversions',
              'I engineer solutions that power growth at scale',
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
          Engineering software that drives revenue and growth.
        </Typography>
        <div className='hero-buttons slide-up'>
          <CTA
            text="Let's Connect"
            onClick={() => alert('CTA Clicked!')}
            variant='primary'
          />
          <CTA
            text='View Portfolio'
            onClick={() => alert('Portfolio Opened')}
            variant='ghost'
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
