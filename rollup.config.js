import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

const globals = {
	...packageJson.devDependencies,
}

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			postcss(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
			filesize(),
		],
	},
	{
		input: 'src/theme/theme.js',
		output: [
			{
				file: packageJson.theme,
				format: 'cjs',
				sourcemap: true,
			},
		],
		plugins: [resolve(), commonjs(), terser()],
	},
	{
		input: 'dist/esm/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: Object.keys(globals).concat([/\.(css|less|scss)$/]),
	},
]
