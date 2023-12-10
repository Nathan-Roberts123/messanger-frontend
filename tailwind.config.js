/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue':'#2787f5',
        'regal-white':'#f6f9fb',
        'regal-text-gray':'#95aac9',
        'real-blue':'#2787F5',
        'gray-icons':'#95AAC9'
        
      },

      fontFamily: {
        body: ['Roboto']
      }
    },
  },
  plugins: [],
}

