import React from 'react';
import './Grid.scss';

interface GridProps {
  children: React.ReactNode; // Grid content
  columns?: number; // Optional: Default number of columns
  gap?: string; // Gap between grid items
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = 4,
  gap = '1.5rem',
}) => {
  return (
    <div
      className='responsive-grid'
      style={
        {
          '--grid-columns': columns,
          '--grid-gap': gap,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export { Grid };
