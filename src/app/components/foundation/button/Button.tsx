'use client';

import React, { useState } from 'react';
import './Button.scss';

interface IButton {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const Button: React.FC<IButton> = ({ text, onClick, variant = 'primary' }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([30]); // Haptic feedback
    }
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    onClick();
  };

  return (
    <button
      className={`button ${variant} ${isPressed ? 'pressed' : ''}`}
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

export { Button };
