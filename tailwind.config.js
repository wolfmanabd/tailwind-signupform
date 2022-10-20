/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}
