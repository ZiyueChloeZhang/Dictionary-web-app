/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
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
    },
    fontSize: {
      xs: ["14px", { lineHeight: "17px" }],
      sm: ["18px", { lineHeight: "24px" }],
      md: ["20px", { lineHeight: "24px" }],
      lg: ["24px", { lineHeight: "29px" }],
      xl: ["64px", { lineHeight: "77px" }],
    },
    fontFamily: {
      mono: "Inconsolata",
      sans: "Inter",
      serif: "Lora",
    },
    boxShadow: {
      sm: "0 5px 30px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
