/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C",
        secondary: "#232323",
        "secondary-light": "#2B2B2B",
        accent: "#A06EF5",
        gray: "#858585",
        white: "#FFFFFF",
        "accent-dark": "#8646f2",
        "accent-light": "#F94C84",
      },

      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
