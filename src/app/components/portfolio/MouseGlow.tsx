'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className='pointer-events-none fixed z-30'
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    >
      <div className='w-[500px] h-[500px] rounded-full bg-gradient-to-r from-electric-blue/20 to-soft-purple/20 blur-3xl opacity-50' />
    </motion.div>
  );
}
