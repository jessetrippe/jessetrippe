module.exports = {
  darkMode: 'media',
  purge: {
    content: ["./_site/**/*.html"],
    css: ["./_site/**/main.css"]
  },
  theme: {
    fontFamily: {
      'sans': ["'IBM Plex Sans'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial", "sans-serif"]
    },
    extend: {
      colors: {
        illuminating: {
          100: '#fcf9e1',
          200: '#f9f3c3',
          300: '#f7eda4',
          400: '#f4e786',
          500: '#f1e168',
          600: '#c1b453',
          700: '#91873e',
          800: '#605a2a',
          900: '#302d15',
        }
      }
    }
  },
  variants: {
    extend: {
      width: ['group-hover'],
      visibility: ['group-hover'],
    }
  },
}
