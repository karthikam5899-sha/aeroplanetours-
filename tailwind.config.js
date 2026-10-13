/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      colors: {
        navy: '#082f49',
        sky: '#0ea5e9',
        mint: '#d9f7f0',
        ink: '#102a43'
      },
      boxShadow: {
        soft: '0 18px 60px rgba(8, 47, 73, .10)'
      }
    }
  },
  plugins: []
}
