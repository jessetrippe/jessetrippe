module.exports = {
  purge: {
    content: ['./_site/**/*.html'],
    css: ["./_site/styles/main.css"]
  },
  theme: {
    fontFamily: {
      'sans': ["'IBM Plex Sans'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial", "sans-serif"]
    },
    extend: {
      colors: {
        magenta: {
          100: 'hsl(301, 100%, 95%)',
          200: 'hsl(301, 100%, 84%)',
          300: 'hsl(301, 100%, 73%)',
          400: 'hsl(301, 100%, 62%)',
          500: 'hsl(301, 100%, 50%)',
          600: 'hsl(301, 100%, 40%)',
          700: 'hsl(301, 100%, 30%)',
          800: 'hsl(301, 100%, 20%)',
          900: 'hsl(301, 100%, 10%)',
          black: 'hsl(301, 100%, 1%)',
          white: 'hsl(301, 100%, 99%)'
        }
      }
    }
  },
  variants: {
    zIndex: ['responsive', 'hover', 'focus'],
  },
}
