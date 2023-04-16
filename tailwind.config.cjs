/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
  ],
};
