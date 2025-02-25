'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import './Stars.scss';

const TOTAL_STARS = 200; // Number of stars

const Stars: React.FC = () => {
  const starContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0, scrollY: 0 });

  // Generate stars once to prevent unnecessary re-renders
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

  // Parallax Update Function (Desktop Mouse Move)
  const updateParallax = (event: MouseEvent) => {
    if (!starContainerRef.current) return;
    const { innerWidth, innerHeight } = window;
    offsetRef.current.x = (event.clientX / innerWidth - 0.5) * 2;
    offsetRef.current.y = (event.clientY / innerHeight - 0.5) * 2;
  };

  // Parallax Effect (Mobile Scroll-Based)
  const updateScrollParallax = () => {
    if (!starContainerRef.current) return;
    offsetRef.current.scrollY = window.scrollY * 0.1; // Smooth scrolling effect
  };

  // Apply parallax effect continuously at 60/120fps
  const applyParallax = useCallback(() => {
    if (!starContainerRef.current) return;

    const stars = starContainerRef.current.querySelectorAll('.star');
    const { x, y, scrollY } = offsetRef.current;

    stars.forEach((star) => {
      const speed = parseFloat(star.getAttribute('data-speed') || '1');
      const moveX = x * speed * 20;
      const moveY = y * speed * 20 + scrollY * speed * 0.5; // Scroll movement

      (
        star as HTMLElement
      ).style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    animationFrameRef.current = requestAnimationFrame(applyParallax);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => updateParallax(event);
    const handleScroll = () => updateScrollParallax();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    animationFrameRef.current = requestAnimationFrame(applyParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [applyParallax]);

  return (
    <div className='stars' ref={starContainerRef}>
      {generateStars()}
    </div>
  );
};

export { Stars };
