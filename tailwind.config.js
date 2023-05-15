/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wk-blue": "#32A0DB",
      },
      backgroundColor: {
        "wk-blue": "#32A0DB",
      },
      screens: {
        dsk: "1136px",
        md2: "967px",
        s: "320px"
      },
    },
  },
  plugins: [],
};
