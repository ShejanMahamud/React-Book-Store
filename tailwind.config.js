/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins",
        "inter" : "Inter"
      },
      backgroundImage:{
        "hero" : "url('./src/components/Header/Animation.svg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

