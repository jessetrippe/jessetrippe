
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
				cyan: colors.cyan,
				warmGray: colors.warmGray,
				blueGray: colors.blueGray,
				lightBlue: colors.lightBlue,
				teal: colors.teal,
				gray: colors.gray,
				lime: colors.lime,
			}
		}
	}
}
