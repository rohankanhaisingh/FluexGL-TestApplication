"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAssetRoutes = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("./utilities/constants");
function setAssetRoutes(app) {
    app.use("/assets/images", express_1.default.static(path_1.default.join(constants_1.PUBLIC_ASSETS_PATH, "images")));
    app.use("/assets/videos", express_1.default.static(path_1.default.join(constants_1.PUBLIC_ASSETS_PATH, "videos")));
    app.use("/assets/icons", express_1.default.static(path_1.default.join(constants_1.PUBLIC_ASSETS_PATH, "icons")));
    app.use("/assets/textures", express_1.default.static(path_1.default.join(constants_1.PUBLIC_ASSETS_PATH, "textures")));
    app.use("/assets/font-families", express_1.default.static(path_1.default.join(constants_1.PUBLIC_ASSETS_PATH, "font-families")));
    app.use("/assets/data", express_1.default.static(path_1.default.join(constants_1.PUBLIC_ASSETS_PATH, "data")));
    app.use("/assets/dist", express_1.default.static(path_1.default.join(constants_1.PUBLIC_DIST_PATH)));
}
exports.setAssetRoutes = setAssetRoutes;
//# sourceMappingURL=assets.js.map