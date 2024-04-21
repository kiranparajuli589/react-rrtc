import { RollupOptions } from "rollup";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts";

import pkg from './package.json' assert { type: "json" };
import tsConfig from "./tsconfig.json" assert { type: "json" };

const config: RollupOptions[] = [
	{
		input: "src/index.ts",
		external: [...Object.keys(pkg.peerDependencies || {})],
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: "esm",
				sourcemap: true,
			}
		],
		plugins: [
			terser(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				compilerOptions: {
					...tsConfig.compilerOptions,
					rootDir: "src",
				}
			})
		]
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()]
	}
]

export default config
