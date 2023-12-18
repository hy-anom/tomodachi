/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      'geist': ['Geist'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'dark-gray': '#373737',
      'gray-50': '#0D0D0D',
      'navbar-dark': '#141414',
      'navbar-text-dark': '#8E8E8E',
      'white': '#FFFFFF',
      'egg-white': '#F1EEE4',
      'golden-yellow': '#FFB906',
      'orange': '#FC5A24',
      'lavender': '#7C69E7',
      'ghost-white': '#F6F6FE',
    }
  },
  plugins: [],
}

