"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const constants_1 = __importDefault(require("./constants"));
function constructWebpackPlugin(id) {
    return new html_webpack_plugin_1.default({
        template: "!!ejs-compiled-loader!" + path_1.default.join(constants_1.default.VIEWS_PATH, `${id}.ejs`),
        filename: path_1.default.join(constants_1.default.DIST_PATH, `${id}.ejs`),
        inject: "body",
        hash: true,
        publicPath: "/assets/dist",
        chunks: [id]
    });
}
function analyseAndConstructViewPages() {
    const ejsViewFiles = fs_1.default.readdirSync(constants_1.default.VIEWS_PATH, "utf-8");
    const plugins = [];
    for (let file of ejsViewFiles) {
        if (file.endsWith(".ejs")) {
            const pageName = file.split(".ejs")[0];
            plugins.push(constructWebpackPlugin(pageName));
        }
    }
    return plugins;
}
exports.default = analyseAndConstructViewPages;
