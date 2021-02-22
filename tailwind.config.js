
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  purge: {
    content: ["./_site/**/*.html"],
    css: ["./_site/**/main.css"]
  },
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        lime: colors.lime,
        rose: colors.rose,
        warmGray: colors.warmGray,
        blueGray: colors.blueGray,
        teal: colors.teal,
        emerald: colors.emerald,
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
