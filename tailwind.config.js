/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        floatpulse : {
          '0%': { boxShadow : '0 0 0 0 rgba(117, 82, 254, 0.4)'},
          '70%': { boxShadow : '0 0 0 20px rgba(117, 82, 254, 0)'},
          '100%': { boxShadow : '0 0 0 0 rgba(117, 82, 254, 0)'}
        }
      },
      animation: {
        floatpulse: 'floatpulse 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      fontFamily: {
        'Nunito': ['Nunito'],
        'DM-Sans': ['DM+Sans:wght@400;500;700'],
       },
      colors:{
        primary_Blue_light : 'rgba(84, 41, 255, 0.1)',
        primary_Blue_medium : '#BBAAFF',
        primary_Blue : '#5429FF'
      },
      backgroundImage: {
        'logo': "url('/logo.png')",
      },
      fontSize:{
        'xxs' : '10px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
  
}
