'use client';

import React, { useEffect, useState } from 'react';
import './Sun.scss';
import { useTheme } from '../../theme-provider/ThemeProvider';

const Sun: React.FC = () => {
  const { theme } = useTheme();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set sun to always be positioned at the top right
    document.documentElement.style.setProperty('--sun-top', '10%'); // Fixed at 10% from top
    document.documentElement.style.setProperty('--sun-left', '85%'); // Fixed at 85% from left

    // Trigger fade-in animation when theme is light
    setVisible(theme === 'light');
  }, [theme]);

  useEffect(() => {
    const handleParallax = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.8) * 10; // Adjusted for top-right positioning
      const y = (e.clientY / window.innerHeight - 0.2) * 10; // Adjusted for top-right positioning
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleParallax);
    return () => window.removeEventListener('mousemove', handleParallax);
  }, []);

  return (
    <div className={`sun-container ${visible ? 'fade-in' : 'fade-out'}`}>
      <div className='sun'></div>
      <div className='god-rays'></div>
      <div className='lens-flare'></div>
    </div>
  );
};

export { Sun };
