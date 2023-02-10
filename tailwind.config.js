/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#2D2D2D",
      white: "#FFFFFF",
      gray: "#E9E9E9",
      "gray-dark": "#757575",
      purple: "#A445ED",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      width: {
        "14px": "14px",
      },
      height: {
        "14px": "14px",
      },
      padding: {
        "3px": "3px",
      },
    },
  },
  plugins: [],
};
