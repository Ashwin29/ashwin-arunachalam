'use client';

import { useEffect, useRef } from 'react';

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<
    Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
        window.innerHeight
      );

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (starsRef.current.length === 0 || canvas.width !== width) {
        starsRef.current = [];
        const starCount = Math.floor((width * height) / 4000);

        for (let i = 0; i < starCount; i++) {
          starsRef.current.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            opacity: Math.random() * 0.5 + 0.2,
          });
        }
      }
    };

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(document.body);

    const intervalId = setInterval(updateCanvasSize, 2000);

    let animationId: number;

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      clearInterval(intervalId);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute top-0 left-0 pointer-events-none z-0'
      style={{ opacity: 0.4 }}
    />
  );
}
