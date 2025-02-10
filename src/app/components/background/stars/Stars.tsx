'use client';

import React, { useEffect, useRef } from 'react';
import './Stars.scss';
import useGyroscope from '@/app/utils/useGyroscope';

const TOTAL_STARS = 200; // Density of stars

const Stars: React.FC = () => {
  const starContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const gyroscopeOffset = useGyroscope();

  // Generate Stars (Once, Avoid Remounts)
  const generateStars = () => {
    return Array.from({ length: TOTAL_STARS }).map((_, index) => {
      const size = Math.random() * 2 + 1;
      const speed = Math.random() * 2 + 0.5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const randomDelay = Math.random() * 10;

      return (
        <div
          key={index}
          className='star'
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${randomDelay}s`,
          }}
          data-speed={speed}
        ></div>
      );
    });
  };

  // Parallax Update Function (Runs on Mouse Move)
  const updateParallax = (event: MouseEvent) => {
    if (!starContainerRef.current) return;

    const { innerWidth, innerHeight } = window;
    offsetRef.current.x = (event.clientX / innerWidth - 0.5) * 2;
    offsetRef.current.y = (event.clientY / innerHeight - 0.5) * 2;
  };

  // Apply Parallax Effect to Stars (Runs Continuously)
  const applyParallax = () => {
    if (!starContainerRef.current) return;

    const stars = starContainerRef.current.querySelectorAll('.star');
    const { x, y } = offsetRef.current;
    const gyroX = gyroscopeOffset.x;
    const gyroY = gyroscopeOffset.y;

    stars.forEach((star) => {
      const speed = parseFloat(star.getAttribute('data-speed') || '1');
      const moveX = (x + gyroX) * speed * 20;
      const moveY = (y + gyroY) * speed * 20;
      (
        star as HTMLElement
      ).style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    animationFrameRef.current = requestAnimationFrame(applyParallax);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      updateParallax(event);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(applyParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className='stars' ref={starContainerRef}>
      {generateStars()}
    </div>
  );
};

export { Stars };
