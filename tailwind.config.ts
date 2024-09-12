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
    },
    extend: {
      fontFamily: {
        nickainley: ['Nickainley'],
      },
      screens: {
        xxs: '375px',
        xs: '425px',
      },
    },
  },
  plugins: [],
};
export default config;
