'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StarField } from './components/portfolio/StarField';
import { FloatingParticles } from './components/portfolio/FloatingParticles';
import { MouseGlow } from './components/portfolio/MouseGlow';
import { LoadingScreen } from './components/portfolio/LoadingScreen';
import { Navigation } from './components/portfolio/Navigation';
import { ScrollToTop } from './components/portfolio/ScrollToTop';
import { HeroSection } from './components/portfolio/HeroSection';
import { OperatorJourneySection } from './components/portfolio/OperatorJourneySection';
import { MissionSection } from './components/portfolio/MissionSection';
import { VisionSection } from './components/portfolio/VisionSection';
import { CredibilitySection } from './components/portfolio/CredibilitySection';
import { WritingSection } from './components/portfolio/WritingSection';
import { PersonalDashboard } from './components/portfolio/PersonalDashboard';
import { ContactSection } from './components/portfolio/ContactSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className='min-h-screen bg-black text-white overflow-x-hidden relative'>
        <div
          className='absolute inset-0 w-full pointer-events-none z-0'
          style={{ height: '100%' }}
        >
          <StarField />
        </div>
        <FloatingParticles />
        <MouseGlow />
        <Navigation />
        <ScrollToTop />

        <div className='relative z-10'>
          <HeroSection />
          <div id='about'>
            <OperatorJourneySection />
          </div>
          <MissionSection />
          <VisionSection />
          <CredibilitySection />
          <div id='writing'>
            <WritingSection />
          </div>
          <PersonalDashboard />
          <div id='contact'>
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  );
}
