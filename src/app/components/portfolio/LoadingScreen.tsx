'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BgParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function LoadingScreen({ onLoadComplete }: { onLoadComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<BgParticle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 1000);
          return 100;
        }
        return prev + 2.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className='fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden'
    >
      <div className='absolute inset-0'>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className='absolute rounded-full bg-gradient-to-r from-electric-blue/30 to-soft-purple/30 blur-sm'
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-transparent' />

      <div className='relative text-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='relative mb-12 px-4 sm:px-8'
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute inset-0 -m-16 bg-gradient-to-r from-electric-blue/20 to-soft-purple/20 blur-3xl'
          />

          <div className='relative overflow-hidden py-4'>
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ fontSize: 'clamp(2rem, 9vw, 6rem)' }}
              className='bg-gradient-to-r from-white via-electric-blue to-soft-purple bg-clip-text text-transparent whitespace-nowrap font-signature'
            >
              Ashwin Arunachalam
            </motion.div>

            <motion.div
              initial={{ left: '0%', opacity: 1 }}
              animate={{ left: '100%', opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
              className='absolute top-1/2 -translate-y-1/2 w-2 h-20 rounded-full'
            >
              <div className='w-full h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent blur-md animate-pulse' />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 2.3, ease: 'easeOut' }}
              className='h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent origin-left mt-2'
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='relative w-full max-w-2xl mx-auto px-4'
        >
          <div className='w-full h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5'>
            <motion.div
              className='h-full bg-gradient-to-r from-electric-blue via-soft-purple to-electric-blue'
              initial={{ width: '0%' }}
              animate={{
                width: `${progress}%`,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                width: { duration: 0.3 },
                backgroundPosition: { duration: 2, repeat: Infinity, ease: 'linear' },
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='mt-6 text-electric-blue font-semibold text-lg text-center'
          >
            {Math.floor(progress)}%
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className='mt-8'
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='text-muted-foreground text-sm tracking-wider uppercase'
          >
            Welcome
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
