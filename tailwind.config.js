/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridRowEnd: {
        'sm': 'span 8',
        'md': 'span 10',
        'lg': 'span 12',
        'xl': 'span 14',
        '2xl': 'span 16'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
