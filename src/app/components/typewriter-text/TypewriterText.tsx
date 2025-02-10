'use client';

import React, { useEffect, useState } from 'react';
import './TypewriterText.scss';

interface TypewriterTextProps {
  texts: string[]; // Array of strings to type
  speed?: number; // Typing speed in ms
  delay?: number; // Delay between texts
  loop?: boolean; // Whether to loop the text
  className?: string; // Optional custom class for styling
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  speed = 100,
  delay = 2000,
  loop = false,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const text = texts[currentIndex] || '';
    const isEndOfText = charIndex === text.length;
    const isStartOfText = charIndex === 0;

    const type = () => {
      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
      } else {
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && isEndOfText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && isStartOfText) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) =>
          loop
            ? (prevIndex + 1) % texts.length
            : Math.min(prevIndex + 1, texts.length - 1)
        );
      }
    };

    const timer = setTimeout(type, isDeleting ? speed / 2 : speed);

    setCurrentText(text.substring(0, charIndex));

    return () => clearTimeout(timer);
  }, [texts, currentIndex, charIndex, isDeleting, delay, speed, loop]);

  return (
    <div className={`typewriter-wrapper ${className}`} aria-live='polite'>
      <span className='typewriter-text'>
        {currentText}
        <span className='typewriter-caret' aria-hidden='true'></span>
      </span>
    </div>
  );
};

export { TypewriterText };
