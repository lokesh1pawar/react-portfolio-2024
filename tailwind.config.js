/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '50px': '50px',
      },
      colors: {
        customColor: '#212428', // bg-color for whole site
        bgMain: '#212428', 
        navFontColor: '#c4cfde',
        navHoverUl: '#878e99',
        redForHoverNav: '#FF004F',
        redForName: '#ff014f',
        redFeature: '#f9004d',
      },
      fontFamily: {
        custom1: ["Custom-1", "sans-serif"],
        custom1: ["Custom-2", "sans-serif"],
      },
    },
  },
  plugins: [],
};

