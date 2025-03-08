/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   colors: {
    primary: "#FFC107", // Yellow
    dark: "#121212", // Background
    card: "#1E1E1E", // Card Background
    textGray: "#B3B3B3", // Lighter gray text
   },
   spacing: {
    18: "4.5rem", // Custom spacing
   },
  },
 },
 plugins: [],
};
