import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'worm-blue': '#B9DEFF',
      'soft-blue': '#E7F2FE',
      'worm-pink': '#FFC5E5',
      'soft-pink': '#FDD7EC',
      'soft-green': '#D9EBDD',
      'bright-green': '#95B97B',
      'soft-orange': '#FFCEA0',
      'soft-yellow': '#FBFEC1',
      transparent: 'transparent',
      cafe: '#F1D1AB',
      'cafe-pink': '#EB96AA',
      'news-category': '#FFF6E9',
      'news-highlight': '#5784BA',
      'soft-white': '#FAFAFA',
    },
    extend: {
      fontFamily: {
        nickainley: ['Nickainley'],
      },
      screens: {
        xxs: '375px',
        xs: '425px',
      },
      boxShadow: {
        'custom-shadow': '0 4px 20px 0 rgba(0,0,0,0.15)',
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
