"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
var Constants;
(function (Constants) {
    Constants.ROOT_PATH = path_1.default.join(__dirname, "../../");
    Constants.SOURCE_PATH = path_1.default.join(Constants.ROOT_PATH, "src");
    Constants.PUBLIC_PATH = path_1.default.join(Constants.SOURCE_PATH, "public");
    Constants.VIEWS_PATH = path_1.default.join(Constants.PUBLIC_PATH, "views");
    Constants.SCRIPTS_PATH = path_1.default.join(Constants.PUBLIC_PATH, "scripts");
    Constants.URL_VIRTUAL_ASSETS_PATH = "/assets";
    Constants.DIST_PATH = path_1.default.join(Constants.PUBLIC_PATH, "_dist");
})(Constants || (Constants = {}));
exports.default = Constants;
