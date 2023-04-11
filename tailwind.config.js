/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkish: "#2E2E2E",
        white: "#ffffff",
        grayish: "#E2E2E2"
      },
    },
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
      "helvetica-neue": ["Helvetica Neue", "sans-serif"],
    },
    
  },
  plugins: [],
};
