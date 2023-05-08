/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pointColor: '#737EE1',
        darkColor: '#383838',
        lightBackColor: '#DBDBDB',
        darkBackColor: '#242424',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
