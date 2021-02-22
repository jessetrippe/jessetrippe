
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  purge: {
    content: ["./_site/**/*.html"],
    css: ["./_site/**/main.css"]
  },
  theme: {
    fontFamily: {
      'windsor': ['Windsor', 'Georgia', 'serif'],
      'robotoMono': ['Roboto Mono', 'Courier', 'monospace'] 
    },
    extend: {
      colors: {
        warmGray: colors.warmGray,
        teal: colors.teal,
        cyan: colors.cyan,
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
