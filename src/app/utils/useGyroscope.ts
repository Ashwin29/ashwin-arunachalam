import { useState, useEffect } from 'react';

interface GyroscopeOffset {
  x: number;
  y: number;
}

const useGyroscope = () => {
  const [offset, setOffset] = useState<GyroscopeOffset>({ x: 0, y: 0 });

  useEffect(() => {
    let permissionGranted = false;

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      console.log('Device Orientation Event Fired!');
      console.log(`Alpha: ${e.alpha}, Beta: ${e.beta}, Gamma: ${e.gamma}`);

      if (e.gamma === null || e.beta === null) {
        console.warn('Gyroscope data is not available.');
        return;
      }

      const x = e.gamma / 45; // Normalize left-right tilt
      const y = e.beta / 45; // Normalize front-back tilt

      setOffset({ x, y });
    };

    const requestPermission = async () => {
      // ✅ Check if DeviceOrientationEvent is defined
      if (typeof window.DeviceOrientationEvent === 'undefined') {
        console.warn('DeviceOrientationEvent is not supported on this device.');
        return;
      }

      // ✅ Check if requestPermission() is required (Safari)
      const requestFn = (window.DeviceOrientationEvent as any)
        .requestPermission;
      if (typeof requestFn === 'function') {
        try {
          const permission = await requestFn();
          if (permission === 'granted') {
            permissionGranted = true;
            window.addEventListener(
              'deviceorientation',
              handleDeviceOrientation
            );
          } else {
            console.warn('Gyroscope permission denied.');
          }
        } catch (error) {
          console.error('Gyroscope permission request failed:', error);
        }
      } else {
        // ✅ Chrome & older iOS versions don't require permission
        permissionGranted = true;
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    // ✅ Attach permission request to user click
    const handleClick = () => {
      requestPermission();
      document.removeEventListener('click', handleClick);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      if (permissionGranted) {
        window.removeEventListener(
          'deviceorientation',
          handleDeviceOrientation
        );
      }
    };
  }, []);

  return offset;
};

export default useGyroscope;
