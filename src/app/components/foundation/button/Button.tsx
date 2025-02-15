'use client';

import React, { useState } from 'react';
import './Button.scss';

interface IButton {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  link?: string;
}

const Button: React.FC<IButton> = ({
  text,
  onClick,
  variant = 'primary',
  link,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([30]); // Haptic feedback
    }
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    if (onClick) {
      onClick();
    }
  };

  const handleOpenLink = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className={`button ${variant} ${isPressed ? 'pressed' : ''}`}
      onClick={link ? handleOpenLink : handlePress}
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
