/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateColumns: {
        '52': 'repeat(52, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};