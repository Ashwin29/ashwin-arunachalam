import React from 'react';
import ReactDOM from 'react-dom';
import './Background.scss';
import { Sun } from './sun/Sun';
import { Moon } from './moon/Moon';
import { Clouds } from './clouds/Clouds';
import { Stars } from './stars/Stars';
import { useSafeDocument } from '@/app/utils/useSafeDocument';

const Background: React.FC = () => {
  const doc = useSafeDocument();
  if (!doc) return;

  return ReactDOM.createPortal(
    <div className='background-container'>
      {/* Gradient Transition Layer */}
      <div className='background-overlay'></div>

      {/* Sun Component */}
      <div className='dark:hidden'>
        <Sun />
      </div>

      {/* Stars for Dark Mode */}
      <div className='hidden dark:block'>
        <Moon />
        <Stars />
      </div>

      {/* Clouds for Light Mode */}
      <div className='block dark:hidden'>
        <Clouds />
      </div>

      {/* Noise Layer */}
      <div className='bg-noise'></div>
    </div>,
    document.body
  );
};

export { Background };
