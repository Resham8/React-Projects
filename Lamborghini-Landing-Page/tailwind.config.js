/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    keyframes: {
      slideInLeft: {
        '0%': { opacity: 0, transform: 'translateX(-50px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      }
    },
    animation: {
      'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
      'fade-in': 'fadeIn 0.8s ease-in forwards',
    }
  }
},
  plugins: [],
}

