import jestPlugin from "eslint-plugin-jest";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";



import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";


/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		files: ["webpack.config.ts"],
		env: {
			"node": true,
			"jest/globals": true,
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
			"no-shadow": "off",
			"import/extensions": "off",
			"import/no-extraneous-dependencies": "off",
			"no-underscore-dangle": "off",
			"react/no-deprecated": "warn",
			"@typescript-eslint/ban-ts-comment": "warn",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn",
		},
	},
];