/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold": "#ffd700",
        "green": "#39DB4A",
        "Red": "#FF6868",
        "primaryBG": "#FCFCFC",
        "secondary": "#555",
        "boarderBg": "#fa0",
      }
    },
  },
  plugins: [],
}

