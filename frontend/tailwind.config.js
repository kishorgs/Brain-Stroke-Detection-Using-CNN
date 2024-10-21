/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#407C87",
        secondary: "#A5DBDD",
        success: "#28A745",
        info: "#17A2B8",
        warning: "#FFC107",
        danger: "#DC3545",
        light: "#EEF1F6",
        dark: "#343A40",
      },
    },
  },
  plugins: [],
}

