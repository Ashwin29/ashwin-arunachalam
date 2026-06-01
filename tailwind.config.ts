import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-black': '#000000',
        'midnight-blue': '#001F3F',
        'electric-blue': '#39A2DB',
        'soft-purple': '#6A0DAD',
        background: '#000000',
        foreground: '#FFFFFF',
        card: '#001F3F',
        'card-border': 'rgba(57, 162, 219, 0.1)',
        muted: 'rgba(255, 255, 255, 0.1)',
        'muted-foreground': 'rgba(255, 255, 255, 0.6)',
        border: 'rgba(57, 162, 219, 0.15)',
        primary: '#39A2DB',
        secondary: '#6A0DAD',
        accent: '#39A2DB',
        destructive: '#d4183d',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['"Source Sans 3"', 'sans-serif'],
        signature: ['"Alex Brush"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 3s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
