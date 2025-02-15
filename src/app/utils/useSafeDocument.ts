'use client';

import { useEffect, useState } from 'react';

/**
 * useSafeDocument - A custom hook to safely access the `document` object,
 * preventing issues during SSR in Next.js.
 */
export const useSafeDocument = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof document !== 'undefined');
  }, []);

  return isClient ? document : null;
};
