import React from 'react';
import './Toggle.scss';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  ariaLabel?: string;
  size?: 'small' | 'medium' | 'large'; // Supports scalable sizes
}

const Toggle: React.FC<ToggleProps> = ({
  isOn,
  onToggle,
  ariaLabel,
  size = 'medium',
}) => {
  return (
    <div className={`toggle-container toggle-${size}`}>
      <button
        className={`toggle ${isOn ? 'toggle-on' : ''}`}
        onClick={onToggle}
        aria-label={ariaLabel || 'Toggle switch'}
        role='switch'
        aria-checked={isOn}
      >
        <span className='toggle-thumb' />
      </button>
    </div>
  );
};

export { Toggle };
