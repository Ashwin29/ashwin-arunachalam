const fonts = require('./src/styles/fonts');
const colors = require('./src/styles/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.light.primary,
        secondary: colors.light.secondary,
        accent: colors.light.accent,
        background: colors.light.background,
        textPrimary: colors.light.textPrimary,
        textSecondary: colors.light.textSecondary,
      },
      fontFamily: {
        poppins: fonts.headings, // Use the heading font
        inter: fonts.body, // Use the body font
        sourceSans: fonts.highlights, // Use the highlight font
      },
      animation: {
        wave: 'wave 5s infinite ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { d: "path('M0,50 Q200,100 400,50 T800,50')" },
          '50%': { d: "path('M0,50 Q200,0 400,50 T800,50')" },
        },
      },
    },
  },
  plugins: [],
};
