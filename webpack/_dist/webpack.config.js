"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
const path_1 = __importDefault(require("path"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const webpack_obfuscator_1 = __importDefault(require("webpack-obfuscator"));
const error_overlay_webpack_plugin_1 = __importDefault(require("error-overlay-webpack-plugin"));
const constants_1 = __importDefault(require("./constants"));
const script_analyser_1 = __importDefault(require("./script-analyser"));
const view_analyser_1 = __importDefault(require("./view-analyser"));
dotenv_1.default.config({ path: path_1.default.join(constants_1.default.ROOT_PATH, ".env") });
colors_1.default.enable();
const plugins = [
    ...(0, view_analyser_1.default)(),
    new mini_css_extract_plugin_1.default({ filename: "[contenthash].css" }),
    (process.env.DEVELOPMENT_MODE === "false") && new webpack_obfuscator_1.default({ rotateStringArray: true }),
    new error_overlay_webpack_plugin_1.default()
];
const config = {
    mode: (process.env.DEVELOPMENT_MODE === "false") ? "production" : "none",
    entry: (0, script_analyser_1.default)(),
    output: {
        filename: "[contenthash].js",
        path: constants_1.default.DIST_PATH,
        clean: true
    },
    plugins: plugins,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
        alias: {
            "@server/typings": path_1.default.join(constants_1.default.ROOT_PATH, "src", "server", "typings.ts"),
            "@fluexgl$": path_1.default.join(constants_1.default.ROOT_PATH, "../", "FluexGL", "lib", "src"),
            "@fluexgl/dsp": path_1.default.join(constants_1.default.ROOT_PATH, "../", "FluexGL-DSP", "lib", "src"),
        }
    },
    module: {
        rules: [
            {
                test: /\.worklet$/,
                type: "asset/source"
            },
            {
                test: /\.wasm$/,
                generator: {
                    filename: "[name][ext]"
                },
                type: "asset/resource"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: mini_css_extract_plugin_1.default.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: {
                                filter: function (url, resourcePath) {
                                    if (url.startsWith(constants_1.default.URL_VIRTUAL_ASSETS_PATH))
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
            minSize: 10000,
            maxSize: 120000,
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
};
module.exports = Object.assign({}, config);
