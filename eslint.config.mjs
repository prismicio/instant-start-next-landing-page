import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		// Node setup scripts use CommonJS; keep application import rules strict.
		files: ["scripts/**/*.js"],
		rules: { "@typescript-eslint/no-require-imports": "off" },
	},
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
])

export default eslintConfig
