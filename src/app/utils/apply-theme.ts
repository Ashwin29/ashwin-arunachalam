import colors from '@/styles/colors';

export function applyTheme(theme: 'light' | 'dark'): void {
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    const themeColors = colors[theme];
    const sharedColors = colors.shared;

    // Apply theme-specific colors
    Object.entries(themeColors).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--${key}-${subKey}`, subValue as string);
        });
      } else {
        root.style.setProperty(`--${key}`, value as string);
      }
    });

    // Apply shared colors
    Object.entries(sharedColors).forEach(([key, value]) => {
      root.style.setProperty(`--shared-${key}`, value);
    });

    Object.entries(themeColors).forEach(([key, value]) => {
      if (key.includes('skeleton')) {
        root.style.setProperty(`--skeleton-${key}`, value);
      }
    });
  }
}
