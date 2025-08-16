/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppi: ["Poppins", "sans-serif"],
        meri: ["Merriweather", "serif"],
        hanzi: [
          "Noto Sans SC", // Google font for simple chinese
        ],
        pinyin: [
          "Noto Sans",
          "Arial",
          "Open Sans",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#E63946",    // Chinese Red
        accent: "#FFD700",     // Golden Yellow
        emerald: "#50C878",    // Emerald Green
        peach: "#FFAB91",      // Peach Orange
        bgmain: "#F1FAEE",     // Cream White
        dark: "#333333",
        softnavy: "#457B9D",   // Soft Navy Blue
      },
    },
  },
  plugins: [],
};