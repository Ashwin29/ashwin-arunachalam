const responsive = {
  breakpoints: {
    xs: '320px', // Extra small devices (phones)
    sm: '640px', // Small devices (phones)
    md: '768px', // Medium devices (tablets)
    lg: '1024px', // Large devices (desktops)
    xl: '1280px', // Extra large devices (large desktops)
  },
  devicePixelRatio: window.devicePixelRatio || 1, // Device pixel density
  fpsCap: {
    default: 60, // Default FPS
    highPerformance: 120, // High-performance FPS for capable devices
  },
};

export default responsive;
