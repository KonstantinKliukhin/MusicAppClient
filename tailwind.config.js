/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    default: 'light',
  },
  typography: (_theme) => ({}),
  plugins: [require('@tailwindcss/typography')],
};
