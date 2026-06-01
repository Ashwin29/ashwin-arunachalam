'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-screen bg-black text-white flex items-center justify-center px-6'>
      <div className='text-center max-w-xl'>
        <div className='text-7xl sm:text-8xl mb-6 bg-gradient-to-r from-electric-blue to-soft-purple bg-clip-text text-transparent font-bold'>
          404
        </div>
        <h1 className='text-2xl sm:text-3xl mb-4'>Page not found</h1>
        <p className='text-muted-foreground mb-8'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href='/'
          className='inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-electric-blue to-soft-purple hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300'
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
