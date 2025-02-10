'use client';

import React from 'react';
import './MainContent.scss';

interface IMainContentLayout {
  children: React.ReactNode;
}

const MainContentLayout: React.FC<IMainContentLayout> = ({ children }) => {
  return <div className='content'>{children}</div>;
};

export default MainContentLayout;
