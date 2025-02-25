'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.scss';
import { ImageLoader } from '../image-loader/ImageLoader';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

const Gallery: React.FC = () => {
  return (
    <div className='gallery-container'>
      <h1 className='gallery-title'>📸 My Moments</h1>
      <div className='gallery-grid'>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className='gallery-item'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ImageLoader src={src} alt={`image-${index}`}></ImageLoader>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Gallery };
