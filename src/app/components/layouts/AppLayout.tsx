'use client';

import React from 'react';
import MainContentLayout from './main-content/MainContent';

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <main className='app-container'>
      <MainContentLayout>{children}</MainContentLayout>
    </main>
  );
};

export default AppLayout;
