module.exports = {
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
          100: '#f1e168',
          200: '#605a2a',
          300: '#91873e',
          400: '#c1b453',
          500: '#302d15',
          600: '#f7eda4',
          700: '#f9f3c3',
          800: '#fcf9e1',
          900: '#f4e786'
        },
        oilGreen: {
          100: '#ccc48d',
          200: '#524e38',
          300: '#7a7655',
          400: '#a39d71',
          500: '#29271c',
          600: '#e0dcbb',
          700: '#ebe7d1',
          800: '#f5f3e8',
          900: '#d6d0a4'
        },
        shadowGreen: {
          100: '#818570',
          200: '#34352d',
          300: '#4d5043',
          400: '#676a5a',
          500: '#1a1b16',
          600: '#b3b6a9',
          700: '#cdcec6',
          800: '#e6e7e2',
          900: '#9a9d8d'
        },
        wildGinger: {
          100: '#754f54',
          200: '#3b282a',
          300: '#4e3538',
          400: '#614246',
          500: '#271a1c',
          600: '#ac9598',
          700: '#c8b9bb',
          800: '#eaeaea',
          900: '#917276'
        },
        ultimateGray: {
          100: '#373b47',
          200: '#565962',
          300: '#75777c',
          400: '#949597',
          500: '#1c1e24',
          600: '#bfbfc1',
          700: '#d4d5d5',
          800: '#eaeaea',
          900: '#a9aaac'
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