/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      serif: ["ui-serif", '"Markazi Text"'],
      sans: ["ui-sans-serif", "Karla"],
    },
    extend: {
      spacing: {
        96: "24rem",
      },
      colors: {},
    },
    colors: {
      green: "#495E57",
      yellow: "#F4CE14",
      grey: "#EDEFEE",
      orange: "#EE9972",
      "orange-white": "#FBDABB",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
