/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#22263B',
        'secondary': '#1E2234',
        'accent': '#F87060',
        'border': '#32395E',
        'line': '#F9C846',
      }
    },
  },
  plugins: [],
}
