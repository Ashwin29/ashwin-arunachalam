import React from 'react';
import './Footer.scss';
import { Typography } from '../../typography/Typography';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <Typography variant='paragraph' as='p'>
          &copy; {new Date().getFullYear()} Ashwin Arunachalam. All Rights
          Reserved.
        </Typography>
        <nav className='footer-links'>
          <a
            href='https://github.com/Ashwin29/ashwin-arunachalam'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/ashwin-arunachalam/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
