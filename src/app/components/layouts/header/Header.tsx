import React from 'react';
import './Header.scss';
import { Lobster } from 'next/font/google';
import Link from 'next/link';
import { ThemeToggle } from '../../theme-toggle/ThemeToggle';

// Load the Lobster font
const lobster = Lobster({
  weight: '400', // Lobster only supports 400 weight
  subsets: ['latin'], // Load the Latin subset
});

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className={`logo ${lobster.className}`}>
        <Link href='/'>Ashwin Arunachalam</Link>
      </div>

      <ThemeToggle />
    </header>
  );
};

export { Header };
