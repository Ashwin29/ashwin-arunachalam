'use client';

import React, { useState } from 'react';
import './CTA.scss';
import { useHapticFeedback } from '@/app/utils/useHapticFeedback';

interface CTAProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const CTA: React.FC<CTAProps> = ({ text, onClick, variant = 'primary' }) => {
  const [isPressed, setIsPressed] = useState(false);
  const triggerHaptic = useHapticFeedback();

  const handlePress = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([30]); // Haptic feedback
    }
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    onClick();
    triggerHaptic({ intensity: 'medium' });
  };

  return (
    <button
      className={`cta-button ${variant} ${isPressed ? 'pressed' : ''}`}
      onClick={handlePress}
      onKeyDown={(e) =>
        e.key === 'Enter' || e.key === ' ' ? handlePress() : null
      }
      aria-label={text}
    >
      {text}
    </button>
  );
};

export { CTA };
