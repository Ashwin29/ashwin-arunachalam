'use client';

import React from 'react';
import { useToggle } from '../toggle/hooks/useToggle';
import { useTheme } from '../theme-provider/ThemeProvider';

const DarkMode: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const { RenderToggle } = useToggle({
    initialState: theme != 'light',
    onToggleCallback: () => toggleTheme(),
  });

  return <RenderToggle size='small' ariaLabel='Custom toggle' />;
};

export { DarkMode };
