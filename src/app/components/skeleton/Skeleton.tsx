'use client';

import React from 'react';
import './Skeleton.scss';

interface ISkeleton {
  shape?: 'rect' | 'circle';
  width?: string;
  height?: string;
  rows?: number; // For text-like placeholders
  animation?: boolean; // Enable shimmer effect
  ariaLabel?: string;
}

const Skeleton: React.FC<ISkeleton> = ({
  shape = 'rect',
  width = '100%',
  height = '1rem',
  rows = 1,
  animation = true,
  ariaLabel = 'Loading content, please wait...',
}) => {
  return (
    <div
      className={`skeleton-loader ${shape} ${animation ? 'shimmer' : ''}`}
      style={{ width, height }}
      aria-busy='true'
      aria-label={ariaLabel}
    >
      {shape === 'rect' && rows > 1
        ? Array.from({ length: rows }).map((_, index) => (
            <div
              key={index}
              className='skeleton-row'
              style={{ width, height }}
            ></div>
          ))
        : null}
    </div>
  );
};

export { Skeleton };
