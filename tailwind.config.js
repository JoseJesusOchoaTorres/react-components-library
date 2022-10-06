/** @type {import('tailwindcss').Config} */

const theme = require('./src/theme/theme.js')

module.exports = {
	content: ['./src/**/*.{html,tsx,jsx}'],
	theme: {
		extend: {
			textColor: {
				brand: {
					...theme.textColors(),
				},
			},
			backgroundColor: {
				brand: {
					...theme.backgroundColors(),
				},
			},
			gradientColorStops: {
				brand: {
					...theme.gradientColors(),
				},
			},
			fontFamily: {
				...theme.fontFamilies(),
			},
		},
	},
	plugins: [],
}
