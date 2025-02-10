import { useState, useCallback } from 'react';
import { Toggle } from '../Toggle';

interface UseToggleOptions {
  initialState?: boolean; // Initial toggle state
  onToggleCallback?: () => void; // Callback for toggle state changes
}

const useToggle = ({
  initialState = false,
  onToggleCallback,
}: UseToggleOptions = {}) => {
  const [boolState, setBoolState] = useState(initialState);

  // Click handler to toggle the state
  const clickHandler = useCallback(() => {
    setBoolState((prevState) => {
      const newState = !prevState;
      return newState;
    });

    if (onToggleCallback) onToggleCallback(); // Trigger callback if provided
  }, [onToggleCallback]);

  // Utility to render the Toggle component
  const RenderToggle = ({
    size = 'medium',
    ariaLabel = 'Toggle switch',
  }: {
    size?: 'small' | 'medium' | 'large';
    ariaLabel?: string;
  }) => (
    <Toggle
      isOn={boolState}
      onToggle={clickHandler}
      size={size}
      ariaLabel={ariaLabel}
    />
  );

  return { boolState, clickHandler, RenderToggle };
};

export { useToggle };
