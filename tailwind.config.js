/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        rose:'#A2D9B0',
        darkgrey : '#ff6361',
      },
    },
  },
  plugins: [],
}