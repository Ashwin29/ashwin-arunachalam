import React from 'react';
import './Error.scss';
import { Button } from '../../foundation/button/Button';

const Error: React.FC = () => {
  return (
    <section className='error-page'>
      <div className='error-container'>
        <h1 className='error-title'>Oops! Something went wrong.</h1>
        <p className='error-message'>
          We can’t find the page you’re looking for. It might have been moved or
          doesn’t exist.
        </p>
        <Button
          text='Go Back to Home'
          onClick={() => (window.location.href = '/')}
        />
      </div>
    </section>
  );
};

export { Error };
