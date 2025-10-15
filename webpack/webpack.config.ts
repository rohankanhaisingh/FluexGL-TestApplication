/**
 * Webpack configuratie bestand.
 * 
 * ~ Rohan Kanhaisingh.
 */

import webpack from "webpack";
import dotenv from "dotenv";
import colors from "colors";
import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackObfuscator from "webpack-obfuscator";

// @ts-ignore
import ErrorOverlayPlugin from "error-overlay-webpack-plugin";

import constants from "./constants";
import analyseCorrespondingScripts from "./script-analyser";
import analyseAndConstructViewPages from "./view-analyser";

import { WebpackPluginTypeDeclaration } from "./typings";

dotenv.config({ path: path.join(constants.ROOT_PATH, ".env") });
colors.enable();

const plugins: WebpackPluginTypeDeclaration = [
	...analyseAndConstructViewPages(),

	new MiniCssExtractPlugin({ filename: "[contenthash].css" }),
	(process.env.DEVELOPMENT_MODE === "false") && new WebpackObfuscator({ rotateStringArray: true }),
	new ErrorOverlayPlugin()
];

const config: webpack.Configuration = {
	mode: (process.env.DEVELOPMENT_MODE === "false") ? "production" : "none",
	entry: analyseCorrespondingScripts(),
	output: {
		filename: "[contenthash].js",
		path: constants.DIST_PATH,
		clean: true
	},
	plugins: plugins,
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
		alias: {
			"@server/typings": path.join(constants.ROOT_PATH, "src", "server", "typings.ts"),
			"@fluexgl": path.join(constants.ROOT_PATH, "../", "FluexGL", "lib", "src")
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.wgsl$/i,
				type: 'asset/source',
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "",
						},
					},
					{
						loader: "css-loader",
						options: {
							url: {
								filter: function (url: string, resourcePath: string) {

									if (url.startsWith(constants.URL_VIRTUAL_ASSETS_PATH))
										return false;

									return true;
								}
							}
						}
					},
					{
						loader: "sass-loader",
						options: {}
					},
				],
			}
		]
	},
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			chunks: "all",
			minSize: 10_000,
			maxSize: 120_000,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
					priority: -10,
					enforce: true,
				},
				common: {
					minChunks: 2,
					name: "common",
					priority: -20,
					reuseExistingChunk: true,
					enforce: true,
				},
			}
		}
	}
}

module.exports = { ...config };