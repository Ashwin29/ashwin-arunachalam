import { applyTheme } from '@/app/utils/apply-theme';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    applyTheme('light');
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(currentTheme);

    applyTheme(currentTheme); // Apply theme dynamically

    localStorage.setItem('theme', currentTheme); // Persist theme preference

    if (theme === 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
