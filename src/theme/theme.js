/**
 * Colors
 */
const BASE_COLORS = {
	'primary-0': '--color-primary-0',
	'primary-10': '--color-primary-10',
	'primary-20': '--color-primary-20',
	'primary-30': '--color-primary-30',
	'primary-40': '--color-primary-40',
	'primary-50': '--color-primary-50',
	'primary-60': '--color-primary-60',
	'primary-70': '--color-primary-70',
	'primary-80': '--color-primary-80',
	'primary-90': '--color-primary-90',
	'primary-100': '--color-primary-100',

	'secondary-0': '--color-secondary-0',
	'secondary-10': '--color-secondary-10',
	'secondary-20': '--color-secondary-20',
	'secondary-30': '--color-secondary-30',
	'secondary-40': '--color-secondary-40',
	'secondary-50': '--color-secondary-50',
	'secondary-60': '--color-secondary-60',
	'secondary-70': '--color-secondary-70',
	'secondary-80': '--color-secondary-80',
	'secondary-90': '--color-secondary-90',
	'secondary-100': '--color-secondary-100',

	'neutral-0': '--color-neutral-0',
	'neutral-10': '--color-neutral-10',
	'neutral-20': '--color-neutral-20',
	'neutral-30': '--color-neutral-30',
	'neutral-40': '--color-neutral-40',
	'neutral-50': '--color-neutral-50',
	'neutral-60': '--color-neutral-60',
	'neutral-70': '--color-neutral-70',
	'neutral-80': '--color-neutral-80',
	'neutral-90': '--color-neutral-90',
	'neutral-100': '--color-neutral-100',

	'success-0': '--color-success-0',
	'success-10': '--color-success-10',
	'success-20': '--color-success-20',
	'success-30': '--color-success-30',
	'success-40': '--color-success-40',
	'success-50': '--color-success-50',
	'success-60': '--color-success-60',
	'success-70': '--color-success-70',
	'success-80': '--color-success-80',
	'success-90': '--color-success-90',
	'success-100': '--color-success-100',

	'alert-0': '--color-alert-0',
	'alert-10': '--color-alert-10',
	'alert-20': '--color-alert-20',
	'alert-30': '--color-alert-30',
	'alert-40': '--color-alert-40',
	'alert-50': '--color-alert-50',
	'alert-60': '--color-alert-60',
	'alert-70': '--color-alert-70',
	'alert-80': '--color-alert-80',
	'alert-90': '--color-alert-90',
	'alert-100': '--color-alert-100',

	'error-0': '--color-error-0',
	'error-10': '--color-error-10',
	'error-20': '--color-error-20',
	'error-30': '--color-error-30',
	'error-40': '--color-error-40',
	'error-50': '--color-error-50',
	'error-60': '--color-error-60',
	'error-70': '--color-error-70',
	'error-80': '--color-error-80',
	'error-90': '--color-error-90',
	'error-100': '--color-error-100',

	light: '--color-light',
	dark: '--color-dark',
}

const TEXT_COLORS = {
	...BASE_COLORS,
}

const BACKGROUND_COLORS = {
	...BASE_COLORS,
}

const GRADIENT_COLORS = {
	...BASE_COLORS,
}

/**
 * Font families
 */
const FONT_FAMILIES = {
	archivo: ['Archivo', 'sans-serif'],
	raleway: ['Raleway', 'sans-serif'],
	mono: ['Space Mono', 'monospace'],
	nunito: ['Nunito', 'sans-serif'],
	roboto: ['Roboto', 'sans-serif'],
	rokkitt: ['Rokkitt', 'serif'],
	lora: ['Lora', 'serif'],
}

/**
 * Use to generate the alpha channel when it is needed
 * @param {string} variableName: The CSS variable name
 * @returns {string} rgb or rgba composed string
 */
function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}

		return `rgb(var(${variableName}))`
	}
}

/**
 * Generates an object of colors for the tailwind config
 *
 * @param {Object} colorsDictionary - Key value dictionary with all branding colors
 * @returns object - {base: rgba(var(--color-text-base))}
 */
function generateColors(colorsDictionary) {
	const colors = {}

	if (colorsDictionary !== undefined) {
		for (const color in colorsDictionary) {
			colors[color] = withOpacity(colorsDictionary[color])
		}
	}

	return colors
}

/**
 * Generates an object of font families for the tailwind config
 *
 * @param {Object} fontFamiliesDictionary - Key value dictionary with all branding colors
 * @returns object - {'sans': ['Helvetica', 'Arial', 'sans-serif'], ...}
 */
function generateFontFamilies(fontFamiliesDictionary) {
	const fontFamilies = {}

	if (fontFamiliesDictionary !== undefined) {
		for (const fontFamily in fontFamiliesDictionary) {
			fontFamilies[fontFamily] = fontFamiliesDictionary[fontFamily]
		}
	}

	return fontFamilies
}

module.exports = {
	textColors: () => generateColors(TEXT_COLORS),
	backgroundColors: () => generateColors(BACKGROUND_COLORS),
	gradientColors: () => generateColors(GRADIENT_COLORS),
	fontFamilies: () => generateFontFamilies(FONT_FAMILIES),
}
