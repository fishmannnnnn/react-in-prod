import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
	staticDirs: ["../../public"],
	stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: "automatic",
				},
			},
		},
	}),
	// docs: {
	// 	autodocs: "tag",
	// },
};
export default config;
