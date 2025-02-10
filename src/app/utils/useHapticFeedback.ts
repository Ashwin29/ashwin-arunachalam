import { useCallback } from 'react';

interface HapticOptions {
  intensity?: 'soft' | 'medium' | 'strong';
}

const useHapticFeedback = () => {
  const triggerHaptic = useCallback(
    ({ intensity = 'medium' }: HapticOptions = {}) => {
      // Check if `navigator.vibrate` is supported (Android, some browsers)
      if ('vibrate' in navigator) {
        const pattern =
          intensity === 'soft' ? 10 : intensity === 'strong' ? 50 : 20;
        navigator.vibrate(pattern);
        return;
      }

      // iOS Safari Workaround (does not support `vibrate()`)
      if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        const el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.opacity = '0';
        document.body.appendChild(el);
        setTimeout(() => document.body.removeChild(el), 10);
      }
    },
    []
  );

  return triggerHaptic;
};

export { useHapticFeedback };
