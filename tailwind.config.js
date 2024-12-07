/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
        accent: '#10B981',
      },
      screens: {
        'xs': '480px',     
        'sm': '640px',     
        'md': '768px',     
        'lg': '1024px',    
        'xl': '1280px',    
        '2xl': '1536px',   
        'custom': '1440px',
        'huge': '1920px'   
      }
    },
  },
  plugins: [],
}