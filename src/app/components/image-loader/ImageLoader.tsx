'use client';

import React, { useState } from 'react';
import './ImageLoader.scss';

interface IImageLoader {
  src?: string;
  alt: string;
  className?: string;
}

const ImageLoader: React.FC<IImageLoader> = ({
  src = '',
  alt,
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`image-container ${className}`}>
      {isLoading && !hasError && (
        <div className='image-skeleton' aria-label='Loading image'></div>
      )}
      {!isLoading && hasError && (
        <div className='image-error' aria-label='Error loading image'>
          <p>Failed to load image</p>
        </div>
      )}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`image ${isLoading ? 'hidden' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export { ImageLoader };
