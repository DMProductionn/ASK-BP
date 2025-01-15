/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#fff',
        'orange': '#0C76D8'
      }
    },
  },
  plugins: [],
}
