/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: {
        400: "#050505",
        300: "#1F1F1F",
        200: "#2D2D2D",
        100: "#3A3A3A",
      },
      gray: {
        300: "#757575",
        200: "#E9E9E9",
        100: "#F4F4F4",
      },
      white: "#FFFFFF",
      purple: "#A445ED",
      red: "#FF5252",
    }
  },
  plugins: [],
};
