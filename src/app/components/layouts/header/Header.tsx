import React, { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className='header'>
      <div className={`logo ${lobster.className}`}>
        <Link href='/home'>Ashwin Arunachalam</Link>
      </div>

      <ThemeToggle />
    </header>
  );
};

export { Header };
