/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/view/*.html", "./public/js/*.js" ],
  theme: {
    extend: {},
    colors: {
      dark: "#041F31",
      Primary: "#BDEBEA",
      lightPrimary: "#00F5A0",
      lightSecondary: "#00D9F5",
    },
  },
  plugins: [require("daisyui")],
};
