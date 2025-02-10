'use client';

import React from 'react';
import './Button.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outlined'; // Button types
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
