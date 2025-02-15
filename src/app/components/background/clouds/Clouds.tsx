'use client';

import React, { useEffect, useState } from 'react';
import './Clouds.scss';

interface CloudProps {
  id: number;
  size: number;
  top: number;
  left: number;
  zIndex: number;
  speed: number;
  opacity: number; // New property for smooth appearance animation
}

const generateRandomClouds = (
  numClouds: number,
  screenWidth: number,
  screenHeight: number
): CloudProps[] => {
  const clouds: CloudProps[] = [];
  const minSpacing = 120; // Ensure better spacing between clouds

  for (let i = 0; i < numClouds; i++) {
    let attempts = 0;
    const size = Math.random() * 0.3 + 0.2;
    const scaledWidth = screenWidth * size;
    const scaledHeight = screenHeight * size;
    const speed = Math.random() * 2 + 0.5;
    let top: number, left: number;
    let overlapping = true;

    do {
      top = Math.random() * (100 - 30) + 30; // Clouds stay in the lower 70% of the screen
      left = Math.random() * (100 - size * 10);
      overlapping = clouds.some(
        (cloud) =>
          (Math.abs(cloud.left - left) * screenWidth) / 100 <
            scaledWidth + minSpacing &&
          (Math.abs(cloud.top - top) * screenHeight) / 100 <
            scaledHeight + minSpacing
      );

      attempts++;
      if (attempts > 100) {
        overlapping = false;
      }
    } while (overlapping);

    const zIndex = Math.floor(size * 10);
    clouds.push({ id: i, size, top, left, zIndex, speed, opacity: 0 });
  }

  return clouds;
};

const Clouds: React.FC = () => {
  const [clouds, setClouds] = useState<CloudProps[]>([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numClouds = 10; // Increased number of clouds dynamically
    const generatedClouds = generateRandomClouds(
      numClouds,
      screenWidth,
      screenHeight
    );

    setClouds(generatedClouds.map((cloud) => ({ ...cloud, opacity: 1 }))); // Set opacity for fade-in effect

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / screenWidth - 0.5) * 2;
      const y = (e.clientY / screenHeight - 0.5) * 2;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Remove clouds after a set duration for fade-out effect before regenerating
    const interval = setInterval(() => {
      setClouds((prevClouds) =>
        prevClouds.map((cloud) => ({ ...cloud, opacity: 0 }))
      ); // Fade out effect

      setTimeout(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const numClouds = 10;
        const regeneratedClouds = generateRandomClouds(
          numClouds,
          screenWidth,
          screenHeight
        );
        setClouds(regeneratedClouds.map((cloud) => ({ ...cloud, opacity: 1 }))); // Fade in new clouds
      }, 1000); // Ensure new clouds appear after fade-out completes
    }, 8000); // Clouds regenerate every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const combinedOffset = {
    x: offset.x,
    y: offset.y,
  };

  return (
    <div className='clouds-container'>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className='cloud2'
          style={{
            top: `calc(${cloud.top}% + ${combinedOffset.y * cloud.speed}%)`,
            left: `calc(${cloud.left}% + ${combinedOffset.x * cloud.speed}%)`,
            transform: `scale(${cloud.size})`,
            zIndex: cloud.zIndex,
            opacity: cloud.opacity,
            transition: 'opacity 1s ease-in-out', // Smooth fade-in and fade-out effect
          }}
        >
          <div className='base2'>
            <div className='base2half'></div>
            <div className='shape three'></div>
            <div className='shape four'></div>
            <div className='shape five'></div>
            <div className='shape six'></div>
            <div className='shape seven'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Clouds };
