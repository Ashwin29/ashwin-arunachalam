'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'business' | 'ai' | 'growth' | 'revenue';
  pulseDelay: number;
}

interface Connection {
  from: number;
  to: number;
  delay: number;
}

interface DataParticle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const nodes: Node[] = [
  { id: 0, x: 50, y: 50, size: 24, type: 'ai', pulseDelay: 0 },
  { id: 1, x: 20, y: 20, size: 16, type: 'business', pulseDelay: 0.5 },
  { id: 2, x: 80, y: 20, size: 16, type: 'business', pulseDelay: 1 },
  { id: 3, x: 85, y: 50, size: 16, type: 'business', pulseDelay: 1.5 },
  { id: 4, x: 80, y: 80, size: 16, type: 'business', pulseDelay: 2 },
  { id: 5, x: 20, y: 80, size: 16, type: 'business', pulseDelay: 2.5 },
  { id: 6, x: 15, y: 50, size: 16, type: 'business', pulseDelay: 3 },
  { id: 7, x: 50, y: 15, size: 14, type: 'growth', pulseDelay: 0.8 },
  { id: 8, x: 70, y: 35, size: 14, type: 'revenue', pulseDelay: 1.2 },
  { id: 9, x: 70, y: 65, size: 14, type: 'growth', pulseDelay: 1.8 },
  { id: 10, x: 50, y: 85, size: 14, type: 'revenue', pulseDelay: 2.2 },
  { id: 11, x: 30, y: 65, size: 14, type: 'growth', pulseDelay: 2.8 },
  { id: 12, x: 30, y: 35, size: 14, type: 'revenue', pulseDelay: 3.2 },
];

const connections: Connection[] = [
  { from: 0, to: 1, delay: 0 },
  { from: 0, to: 2, delay: 0.2 },
  { from: 0, to: 3, delay: 0.4 },
  { from: 0, to: 4, delay: 0.6 },
  { from: 0, to: 5, delay: 0.8 },
  { from: 0, to: 6, delay: 1 },
  { from: 1, to: 7, delay: 1.2 },
  { from: 2, to: 8, delay: 1.4 },
  { from: 3, to: 8, delay: 1.6 },
  { from: 4, to: 9, delay: 1.8 },
  { from: 5, to: 10, delay: 2 },
  { from: 6, to: 11, delay: 2.2 },
];

function getNodeColor(type: string) {
  switch (type) {
    case 'ai':
      return 'from-electric-blue to-soft-purple';
    case 'business':
      return 'from-cyan-500 to-blue-500';
    case 'growth':
      return 'from-green-400 to-emerald-500';
    case 'revenue':
      return 'from-yellow-400 to-orange-500';
    default:
      return 'from-electric-blue to-soft-purple';
  }
}

function getNodeIcon(type: string) {
  switch (type) {
    case 'ai':
      return '⚡';
    case 'business':
      return '●';
    case 'growth':
      return '↗';
    case 'revenue':
      return '$';
    default:
      return '●';
  }
}

export function SystemsVisualization() {
  const [dataParticles, setDataParticles] = useState<DataParticle[]>([]);

  useEffect(() => {
    setDataParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className='relative w-full h-full min-h-[400px] lg:min-h-[500px]'>
      <div className='absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-soft-purple/10 to-transparent rounded-3xl blur-3xl' />

      <svg className='absolute inset-0 w-full h-full' style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#39A2DB' stopOpacity='0.6' />
            <stop offset='100%' stopColor='#6A0DAD' stopOpacity='0.3' />
          </linearGradient>
        </defs>
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke='url(#lineGradient)'
              strokeWidth='2'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: conn.delay,
                duration: 1.5,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </svg>

      <div className='relative w-full h-full' style={{ zIndex: 2 }}>
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className='absolute'
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: node.pulseDelay,
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${getNodeColor(node.type)} blur-md`}
              style={{
                width: node.size * 2,
                height: node.size * 2,
                marginLeft: -node.size / 2,
                marginTop: -node.size / 2,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: node.pulseDelay,
              }}
            />

            <motion.div
              className={`relative rounded-full bg-gradient-to-br ${getNodeColor(node.type)} shadow-lg flex items-center justify-center text-white border border-white/20`}
              style={{
                width: node.size,
                height: node.size,
                fontSize: node.type === 'ai' ? '14px' : node.size > 14 ? '10px' : '8px',
              }}
              whileHover={{ scale: 1.2 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.pulseDelay,
                },
              }}
            >
              {getNodeIcon(node.type)}
            </motion.div>

            {node.type === 'ai' && (
              <motion.div
                className='absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs text-electric-blue whitespace-nowrap font-semibold'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: node.pulseDelay + 0.5 }}
              >
                AI Systems
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {dataParticles.map((p) => (
        <motion.div
          key={p.id}
          className='absolute w-1 h-1 rounded-full bg-electric-blue'
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <svg className='w-full h-full' viewBox='0 0 100 100' preserveAspectRatio='none'>
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1='0'
              y1={i * 10}
              x2='100'
              y2={i * 10}
              stroke='currentColor'
              strokeWidth='0.5'
              className='text-electric-blue'
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 10}
              y1='0'
              x2={i * 10}
              y2='100'
              stroke='currentColor'
              strokeWidth='0.5'
              className='text-electric-blue'
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
