import fs from "fs";
import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

import { WebpackPluginTypeDeclaration } from "./typings";
import constants from "./constants";


function constructWebpackPlugin(id: string): HtmlWebpackPlugin {

	return new HtmlWebpackPlugin({
		template: "!!ejs-compiled-loader!" + path.join(constants.VIEWS_PATH, `${id}.ejs`),
		filename: path.join(constants.DIST_PATH, `${id}.ejs`),
		inject: "body",
		hash: true,
		publicPath: "/assets/dist",
		chunks: [id]
	});
}

export default function analyseAndConstructViewPages(): WebpackPluginTypeDeclaration {

	const ejsViewFiles: string[] = fs.readdirSync(constants.VIEWS_PATH, "utf-8");

	const plugins: WebpackPluginTypeDeclaration = [];

	for (let file of ejsViewFiles) {

		if (file.endsWith(".ejs")) {

			const pageName: string = file.split(".ejs")[0];

			plugins.push(constructWebpackPlugin(pageName));
		}
	}

	return plugins;
}