/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '2xl': '40px',
      },
      animation: {
        spin: 'spin 20s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
      backgroundImage:{
        'main':"url('/main-bg.jpg')",
      }
  },
  plugins: [],
}}