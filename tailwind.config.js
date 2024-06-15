/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#905F32',
          700: '#BF9F62'
        },
        grey: {
          500: '#626262',
          600: '#FDFDFD'
        },
        red: {
          400: '#9F8259'
        }
      }
    },
  },
  plugins: [],
}