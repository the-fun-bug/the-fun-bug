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
      'worm-blue': '#B9DEFF',
      'soft-blue': '#E7F2FE',
      'dark-blue': '#5784BA',
      'worm-pink': '#FFC5E5',
      'soft-pink': '#FDD7EC',
      'dark-pink': '#EB96AA',
      'soft-green': '#D9EBDD',
      'bright-green': '#95B97B',
      'soft-orange': '#FFCEA0',
      'soft-yellow': '#FBFEC1',
      'dark-yellow': '#D1925B',
      transparent: 'transparent',
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
