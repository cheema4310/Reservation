/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        display: ["Rubik Doodle Shadow", "sans-serif"],
        nav: ["Diphylleia", "serif"],
        para: ["Lato", "serif"],
      },
      colors: {
        lightGrey: "#FAFAFA",
        lightGreyPlus: "#DFDFDF",
        regularGrey: "#C3C3C3",
        regularGreyPlus: "#8E8E8E",
        darkGrey: "#5D5D5D",
        darkGreyPlus: "#303030",
      },
      boxShadow: {
        customInner: "inset 0 8px 4px 2px rgb(0 0 0 / 0.07)",
      },
      backgroundImage: {
        "confirm-page-image": "url('/assets/images/confirm-page.jpg')",
        "confirm-page-m-image": "url('/assets/images/confirm-page-m.jpg')",
      },
    },
  },
  plugins: [],
};
