'use client';

import React, { useEffect, useState } from 'react';
import './Moon.scss';
import { useTheme } from '../../theme-provider/ThemeProvider';

const Moon: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      setIsVisible(true); // Ensure it's in the DOM
      setTimeout(() => setAnimate(true), 50); // Small delay to trigger animation
    } else {
      setAnimate(false); // Start fade-out animation
      setTimeout(() => setIsVisible(false), 600); // Delay hiding to allow animation
    }
  }, [theme]);

  return (
    isVisible && (
      <div className={`moon ${animate ? 'fade-in' : 'fade-out'}`}></div>
    )
  );
};

export { Moon };
