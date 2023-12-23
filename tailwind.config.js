/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#845CFC",
        input_gradient: 'linear-gradient(to right, #b30000, #00bfff)',
      }
    },
    backgroundGradientColors: {
      'custom-ring': ['#845CFCBA', '#845CFC2B'],
    },
    fontFamily: {
      'playfair' : ['Playfair Display', 'serif'],
    }
  },
  plugins: [],
}