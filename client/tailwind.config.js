/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-200" : "#e63946",
        "primary-100" : "#f07167",
        "secondary-200" : "#2a9d8f",
        "secondary-100" : "#264653"
      }
    },
  },
  plugins: [],
}

