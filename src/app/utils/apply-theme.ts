import colors from '@/styles/colors';

export function applyTheme(theme: 'light' | 'dark'): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const themeColors = colors[theme];
  const sharedColors = colors.shared;

  // Apply shared and theme-specific colors in one loop
  Object.entries({ ...themeColors, ...sharedColors }).forEach(
    ([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--${key}-${subKey}`, subValue as string);
        });
      } else {
        root.style.setProperty(`--${key}`, value as string);
      }
    }
  );

  // Ensure dark mode class is properly applied
  root.classList.toggle('dark', theme === 'dark');
}
