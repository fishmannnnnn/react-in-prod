import jestPlugin from "eslint-plugin-jest";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";



import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";


/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		files: ["webpack.config.ts"],
		languageOptions: {
			globals: {
				...globals.node, // для Node окружения
				...jestPlugin.environments.globals.globals, // Jest globals
			},
		},
	},
	{
		...reactPlugin.configs.flat["jsx-runtime"],
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			parser: parserTs,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
			...reactPlugin.configs.flat.recommended.languageOptions,
			globals: {
				...globals.browser,
				__IS_DEV__: true,
			},
		},
		plugins: {
			"react": reactPlugin,
			"@typescript-eslint": tseslint,
			"jest": jestPlugin,
			"react-hooks": reactHooksPlugin,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...reactPlugin.configs.recommended.rules,

			// custom rules
			"react/jsx-indent": "off",
			"react/jsx-filename-extension": [
				2,
				{ extensions: [".js", ".jsx", ".tsx"] },
			],
			"import/no-unresolved": "off",
			"import/prefer-default-export": "off",
			"react/require-default-props": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-props-no-spreading": "warn",
			"react/function-component-definition": "off",
			"react/jsx-uses-react": "error",
			"react/display-name": "off",
			"no-shadow": "off",
			"import/extensions": "off",
			"import/no-extraneous-dependencies": "off",
			"no-underscore-dangle": "off",
			"react/no-deprecated": "warn",
			"@typescript-eslint/ban-ts-comment": "warn",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn",

			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
            "no-param-reassign": "off",
		},
	},
	{
		files: ["**/*.test.{js,ts,jsx,tsx}"],
		languageOptions: {
			parser: parserTs,
			globals: {
				...jestPlugin.environments.globals.globals,
			},
		},
		plugins: {
			jest: jestPlugin,
		},
		rules: {
			"jest/no-disabled-tests": "warn",
			"jest/no-focused-tests": "error",
			"jest/no-identical-title": "error",
			"jest/prefer-to-have-length": "warn",
			"jest/valid-expect": "error",
		},
	},
	{
		files: ["config/**/*.ts"],
		languageOptions: {
			globals: {
				__dirname: true,
			},
		},
	},
];