import { RollupOptions } from "rollup";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

import pkg from './package.json' assert { type: "json" };

const config: RollupOptions[] = [
	{
		input: "src/index.ts",
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: true
			},
			{
				file: pkg.module,
				format: "esm",
				sourcemap: true
			}
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
			})
		]
	},
	{
		input: "dist/esm/types/src/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
	}
]

export default config
