
const colors = require('tailwindcss/colors')

module.exports = {
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
				lightBlue: colors.lightBlue,
				teal: colors.teal,
				gray: colors.gray,
			}
		}
	}
}
