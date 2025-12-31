/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#1A1A1A',
          panel: '#222222',
          ink: '#0D0D0D',
          accent: '#FF7A00'
        }
      }
    }
  },
  plugins: []
};
