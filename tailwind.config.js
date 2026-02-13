/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          100: '#1a1a1a',
          200: '#2a2a2a',
          300: '#3a3a3a',
        },
        primary: {
          DEFAULT: '#00f3ff', // Neon Cyan
          dim: '#00c2cc',
        },
        secondary: {
          DEFAULT: '#bc13fe', // Neon Purple
          dim: '#960fcb',
        },
        accent: {
          DEFAULT: '#ff0055', // Neon Red/Pink
        },
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 243, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 243, 255, 0.6), 0 0 10px rgba(188, 19, 254, 0.4)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

