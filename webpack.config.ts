import path, { dirname } from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
	};

	const mode = env.mode || "development";
	const PORT = env.port || 3000;

	const isDev = mode === "development";

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});

	return config;
};
