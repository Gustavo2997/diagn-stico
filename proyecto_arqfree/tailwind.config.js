/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#B2F7EF', // Verde claro
        'light-yellow': '#EFFAB4', // Amarillo claro
        'lime-green': '#00DD00',  // Verde lima
        'lime-green-dark': '#00BB00',  // Verde lima oscuro
      },
    },
  },
  plugins: [],
}
