/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/assets/hero-bg.png')",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'gray-50': '#808080',
      'navbar-dark': '#141414',
      'navbar-text-dark': '#8E8E8E',
      'white': '#FFFFFF',
      'egg-white': '#F1EEE4',
      'golden-yellow': '#FFB906',
      'orange': '#FC5A24',
      'lavender': '#7C69E7',
    }
  },
  plugins: [],
}