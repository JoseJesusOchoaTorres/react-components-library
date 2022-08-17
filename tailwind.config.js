/** @type {import('tailwindcss').Config} */

const theme = require('./src/utils/theme.js')

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
		},
	},
	plugins: [],
}
