'use client';

import React, { JSX } from 'react';
import './Typography.scss';

interface TypographyProps {
  variant:
    | 'header'
    | 'sub-header'
    | 'paragraph'
    | 'link'
    | 'disabled-link'
    | 'disabled-text'
    | 'text';
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements; // Allows custom tags like `h1`, `h2`, `p`, etc.
  className?: string; // Additional custom class
  onClick?: () => void; // For links or other interactive elements
  id?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  as: Tag = 'p', // Default tag is `p`
  className = '',
  onClick,
  id,
}) => {
  return (
    <Tag
      className={`typography typography-${variant} ${className}`}
      onClick={onClick}
      id={id}
    >
      {children}
    </Tag>
  );
};

export { Typography };
