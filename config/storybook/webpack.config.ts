import path from "path";
import webpack, { RuleSetRule } from "webpack";

import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: "",
		html: "",
		entry: "",
		src: path.resolve(__dirname, "..", "..", "src"),
	};

	config.resolve = {
		...config.resolve,
		alias: {
			...(config.resolve?.alias || {}),
			"@": paths.src, // Resolve @ to the src directory
		},
		modules: [...(config.resolve?.modules || []), paths.src],
		extensions: [...(config.resolve?.extensions || []), ".ts", ".tsx"],
	};

	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config?.module?.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	});

	config.module?.rules?.push(buildCssLoader(true));

	return config;
};
