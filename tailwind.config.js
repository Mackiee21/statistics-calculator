/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": 'rgb(0, 122, 204)'
      },
      backgroundColor: {
        "main": 'rgb(0, 122, 204)'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

