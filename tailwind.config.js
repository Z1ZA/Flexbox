/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      padding: "40px",
      center: true,
    },
    extend: {
      colors: {
        primary: "#E73330",
        neutral: {
          100: "#fafafa",
          200: "#818181",
          300: "#212121",
          400: "#2b2b2b",
          500: "#000000",
        },
        hijau: {
          500: "#D4F28D",
          300: "#3DCE30",
        },
      },
      fontFamily: {
        body: ["Nunito sans", "sans-serif"],
        heading: ["Bebas Neue", "sans-serif"],
        koulen: ["Koulen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
