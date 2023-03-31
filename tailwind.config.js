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
          600: "#202020",
        },
        hijau: {
          400: "#3DCE30",
          300: "#B6F329",
        },
      },
      fontFamily: {
        body: ["Nunito sans", "sans-serif"],
        heading: ["Bebas Neue", "sans-serif"],
        koulen: ["Koulen", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        jam: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
