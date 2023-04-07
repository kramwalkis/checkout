/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkish: "#2E2E2E",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
