/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      primary : "Poppins"
    },
    extend: {
      colors : {
        primary : "#151515",
        main: "#512bd4"
      }
    },
  },
  plugins: [],
}