const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#abef5f",
        "primary-hover": "#94d052",
        "primary-light": "#c5f597",
        "primary-bg": "#eefde3",
        "card-bg-pink": "#E7C1D3",
        "card-bg-yellow": "#EFDA6E",
        "card-bg-green": "#A4DAC3",
        "card-bg-blue": "#77AAEA",
        "gray-1": "#E9E9E9",
        "gray-2": "#A0A0A0",
        "gray-3": "#737373",
        "gray-4": "#494949",
        "gray-5": "#212121",
        "gray-6": "#1C1C1C",
      },
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'paper-cover': "url('../assets/bg.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
