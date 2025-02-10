'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react'; // Using Lucide Icons for clarity
import './ThemeToggle.scss';
import { useTheme } from '../theme-provider/ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setIsLight(storedTheme === 'light');
  }, []);

  const switchTheme = () => {
    setIsLight(!isLight);
    toggleTheme();
  };

  return (
    <div className='toggle-container' onClick={switchTheme}>
      <div className={`toggle-border ${isLight ? 'dark' : 'light'}`}>
        <div className={`toggle ${isLight ? '' : 'rolled'}`}>
          {!isLight ? (
            <Sun className='toggle-icon' size={18} />
          ) : (
            <Moon className='toggle-icon' size={18} />
          )}
        </div>
      </div>
    </div>
  );
};

export { ThemeToggle };
