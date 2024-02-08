/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ucab-green': '#007934',
        'ucab-blue': '#41B4E5',
        'ucab-yellow': '#FFD200',
        'brand-white': '#f9f9f9'
      }
    }
  },
  plugins: []
}
