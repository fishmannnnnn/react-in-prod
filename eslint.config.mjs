import pluginReact from "eslint-plugin-react";
import globals from "globals";

import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			parser: parserTs,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
			globals: {
				...globals.browser,
				__IS_DEV__: true,
			},
		},
		plugins: {
			"react": pluginReact,
			"@typescript-eslint": tseslint,
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...pluginReact.configs.recommended.rules,

			// Your custom rules
			"react/jsx-indent": "off",
			"react/jsx-filename-extension": [
				2,
				{ extensions: [".js", ".jsx", ".tsx"] },
			],
			"import/no-unresolved": "off",
			"import/prefer-default-export": "off",
			"no-unused-vars": "warn",
			"react/require-default-props": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-props-no-spreading": "warn",
			"react/function-component-definition": "off",
			"no-shadow": "off",
			"import/extensions": "off",
			"import/no-extraneous-dependencies": "off",
			"no-underscore-dangle": "off",
			"react/no-deprecated": "warn",
			"@typescript-eslint/ban-ts-comment": "warn",
		},
	},
];
