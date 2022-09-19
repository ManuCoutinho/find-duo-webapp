/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, jsx}'],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif'
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/bg.jpg')",
        gradient1:
          ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
      colors: {}
    }
  },
  plugins: []
}
