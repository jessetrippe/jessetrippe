module.exports = {
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
        },
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
        },
        oilGreen: {
          100: '#f5f3e8',
          200: '#ebe7d1',
          300: '#e0dcbb',
          400: '#d6d0a4',
          500: '#ccc48d',
          600: '#a39d71',
          700: '#7a7655',
          800: '#524e38',
          900: '#29271c',
        },
        shadowGreen: {
          100: '#e6e7e2',
          200: '#cdcec6',
          300: '#b3b6a9',
          400: '#9a9d8d',
          500: '#818570',
          600: '#676a5a',
          700: '#4d5043',
          800: '#34352d',
          900: '#1a1b16',
        },
        wildGinger: {
          100: '#eaeaea',
          200: '#c8b9bb',
          300: '#ac9598',
          400: '#917276',
          500: '#754f54',
          600: '#614246',
          700: '#4e3538',
          800: '#3b282a',
          900: '#271a1c',
        },
        ultimateGray: {
          100: '#eaeaea',
          200: '#d4d5d5',
          300: '#bfbfc1',
          400: '#a9aaac',
          500: '#949597',
          600: '#75777c',
          700: '#565962',
          800: '#373b47',
          900: '#1c1e24',
        }
      },
      borderWidth: {
        '12': '12px',
        '16': '16px',
      }
    }
  },
  variants: {
    zIndex: ['responsive', 'hover', 'focus'],
  },
}
