/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00ff00',
        'matrix-green-light': '#66ff66', // Lighter matrix green
        'matrix-green-selected': '#33cc33', // Selected matrix green
        'matrix-bg': '#000000',
      },
      fontFamily: {
        'matrix': ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}

