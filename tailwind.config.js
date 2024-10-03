/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
      backgroundImage:{
        'custom-image':"url('./src/assets/images/hero.png')",
        'services':"url(./src/assets/images/services.png)",
        'contact':"url('./src/assets/images/contact.png')",
        'logo':"url('./src/assets/images/logo.jpg')"
      }
  },
  plugins: [],
}}