// src/theme/colors.ts

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent?: string; // Optional for flexibility
  hover?: string; // Hover state color
  backgrounds: {
    base: string;
    muted?: string; // Optional for themes like dark that may not use it
    card?: string; // Added for card-specific background
  };
  text: {
    primary: string;
    secondary: string;
    highlight?: string; // For emphasized text
    muted?: string; // For less prominent text
  };
  accents?: {
    white?: string;
    blue?: string;
    purple?: string;
    orange?: string; // For subtle highlights
    yellow?: string; // Added for specific highlights
  };
  skeletonBase: string;
  skeletonHighlight: string;
  timelineLine: string;
}

export interface SharedColors {
  border: string;
  shadow: string;
  focus: string;
  disabled?: string; // Color for disabled states
  backdrop?: string; // Added for modal backdrops
}

export interface Colors {
  light: ThemeColors;
  dark: ThemeColors & { accents?: ThemeColors['accents'] };
  shared: SharedColors;
}

const colors: Colors = {
  light: {
    primary: '#FDCB58', // Updated Soft Gold for primary button
    secondary: '#6AAFE6', // Updated Sky Blue for secondary button
    accent: '#FF8C00', // Darker Orange for better contrast
    hover: '#FFA54F', // Slightly lighter orange for hover effect
    backgrounds: {
      // base: 'linear-gradient(to bottom right, #fca17d 10%, #ffd5b5 30%, #9ad0f5 70%)',/
      base: 'linear-gradient( #fca17d 5%, #ffd5b5 40%, #9ad0f5 80%)',
      muted: '#F9F9F9', // Containers
      card: 'linear-gradient(135deg, #FFE9D2, #FFD8A8)', // Soft evening gradient
    },
    text: {
      primary: '#232323', // Charcoal Black
      secondary: '#666666', // Muted Gray
      highlight: '#FF8C00', // Match accent color for highlights
      muted: '#B0B0B0', // Less Prominent Text
    },
    accents: {
      white: '#FFFFFF',
      blue: '#007BFF',
      orange: '#FF8C00', // Match updated accent
      yellow: '#FFFACD',
    },
    skeletonBase: '#F3F3F3',
    skeletonHighlight: '#ECECEC',
    timelineLine: 'grey', // Light mode line color
  },
  dark: {
    primary: '#000000', // Deep Black
    secondary: '#001F3F', // Midnight Blue
    hover: '#4A90E2', // Glowing blue hover for dark mode
    accent: '#1E90FF', // Bright Blue (New accent for dark mode)
    accents: {
      white: '#FFFFFF',
      blue: '#39A2DB',
      purple: '#6A0DAD',
      orange: '#FF6600',
      yellow: '#FFD54F',
    },
    skeletonBase: '#2E2E2E',
    skeletonHighlight: '#444444',
    timelineLine: 'white', // Dark mode line color
    backgrounds: {
      base: 'linear-gradient(to bottom right, #000428 15%, #004e92 85%)',
      card: 'linear-gradient(135deg, #152B4A, #0C1A2A)', // Subtle night gradient
    },
    text: {
      primary: '#FFFFFF', // Light Text
      secondary: '#AAAAAA', // Muted Gray
      highlight: '#4A90E2', // Match hover for consistency
      muted: '#666666',
    },
  },
  shared: {
    border: '#DADADA',
    shadow: 'rgba(0, 0, 0, 0.1)', // Light shadow
    focus: '#3B82F6',
    disabled: '#E0E0E0',
    backdrop: 'rgba(0, 0, 0, 0.5)',
  },
};

export default colors;
