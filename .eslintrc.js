module.exports = {
	env: {
		browser: true,
		es2021: true,
		'jest/globals': true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'prettier',
		'plugin:tailwindcss/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'tailwindcss', 'jest'],
	rules: {
		'tailwindcss/no-custom-classname': 'off',
		'jest/no-disabled-tests': 'warn',
		'jest/no-identical-title': 'error',
		'jest/valid-expect': 'error',
	},
}
