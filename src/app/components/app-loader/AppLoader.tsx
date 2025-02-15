'use client';

import React, { useEffect, useState } from 'react';
import './AppLoader.scss';
import { useTheme } from '../theme-provider/ThemeProvider';

const AppLoader: React.FC = () => {
  const { theme } = useTheme();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return showLoader ? (
    <div className={`app-loader ${theme}`}>
      {theme === 'dark' ? (
        <div className='moon-loader'>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
        </div>
      ) : (
        <div className='sun-loader'>
          <div className='cloud'></div>
          <div className='cloud'></div>
          <div className='cloud'></div>
        </div>
      )}
    </div>
  ) : null;
};

export default AppLoader;
