"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RENDER_OPTIONS = exports.RESERVED_SERVER_PORT = exports.DOTENV_FILE_PATH = exports.PUBLIC_DIST_PATH = exports.PUBLIC_ASSETS_PATH = exports.PUBLIC_STYLES_PATH = exports.PUBLIC_SCRIPTS_PATH = exports.PUBLIC_VIEWS_PATH = exports.PUBLIC_FILES_PATH = exports.SERVER_DIST_FILES_PATH = exports.SERVER_FILES_PATH = exports.SOURCE_PATH = exports.ROOT_PATH = void 0;
const path_1 = __importDefault(require("path"));
exports.ROOT_PATH = path_1.default.join(__dirname, "../../../../");
exports.SOURCE_PATH = path_1.default.join(exports.ROOT_PATH, "src");
exports.SERVER_FILES_PATH = path_1.default.join(exports.SOURCE_PATH, "server");
exports.SERVER_DIST_FILES_PATH = path_1.default.join(exports.SERVER_FILES_PATH, "_dist");
exports.PUBLIC_FILES_PATH = path_1.default.join(exports.SOURCE_PATH, "public");
exports.PUBLIC_VIEWS_PATH = path_1.default.join(exports.PUBLIC_FILES_PATH, "views");
exports.PUBLIC_SCRIPTS_PATH = path_1.default.join(exports.PUBLIC_FILES_PATH, "scripts");
exports.PUBLIC_STYLES_PATH = path_1.default.join(exports.PUBLIC_FILES_PATH, "styles");
exports.PUBLIC_ASSETS_PATH = path_1.default.join(exports.PUBLIC_FILES_PATH, "assets");
exports.PUBLIC_DIST_PATH = path_1.default.join(exports.PUBLIC_FILES_PATH, "_dist");
exports.DOTENV_FILE_PATH = path_1.default.join(exports.ROOT_PATH, ".env");
exports.RESERVED_SERVER_PORT = 8000;
exports.RENDER_OPTIONS = {
    openDelimiter: "{{",
    delimiter: " ",
    closeDelimiter: "}}",
    includer: function (originalPath, parsedPath) {
        return {
            filename: path_1.default.join(exports.PUBLIC_VIEWS_PATH, originalPath + ".ejs"),
        };
    }
};
//# sourceMappingURL=constants.js.map