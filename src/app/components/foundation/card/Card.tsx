import React from 'react';
import './Card.scss';
import { Button } from '../button/Button';
import { Typography } from '../../typography/Typography';
import { ImageLoader } from '../../image-loader/ImageLoader';

interface CardProps {
  image?: string; // Optional image
  title: string;
  description: string;
  actionLabel?: string; // Optional button or action
  onActionClick?: () => void;
  theme?: 'light' | 'dark'; // Theme-aware styling for the card
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  actionLabel,
  onActionClick,
  theme = 'light', // Default to 'light' theme
}) => {
  return (
    <div className={`card card-${theme}`}>
      {image && <ImageLoader src={image} alt={title} className='card-image' />}
      <div className='card-content'>
        <Typography variant='header' className='card-title' as='h4'>
          {title}
        </Typography>
        <Typography variant='paragraph' className='card-description'>
          {description}
        </Typography>
        {actionLabel && (
          <Button
            text={actionLabel}
            variant='primary' // Default button style for the card
            onClick={onActionClick}
          />
        )}
      </div>
    </div>
  );
};

export { Card };
