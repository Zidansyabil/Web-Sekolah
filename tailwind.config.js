/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','contact.html','visimisi.html','iot.html','program.html','jaringan.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        biru: '#615EFC',
        birumuda: '#7E8EF1',
        biruterang: '#98ABEE',
        crem: '#F9E8C9',
        hijaumuda: '#4F6F52',
        crem: '#D1D8C5',
        cremmuda: '#EEEEEE',
        abu: '#EAE9E9'
      },
      screens: {
        '2xl' : '1320px',
      },
      fontFamily: {
        outfit: ['Outfit']
      }
    },
  },
  plugins: [],
}

