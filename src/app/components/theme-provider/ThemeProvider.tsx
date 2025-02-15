'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { applyTheme } from '@/app/utils/apply-theme';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Fix hydration issue: Wait for client-side mount
  useEffect(() => {
    const storedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    setTheme(storedTheme);
    applyTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Prevent server-render mismatch
  if (!mounted) {
    return <div suppressHydrationWarning>Loading...</div>;
  }

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
