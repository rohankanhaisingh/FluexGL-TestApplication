"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = void 0;
const path_1 = __importDefault(require("path"));
const ejs_1 = __importDefault(require("ejs"));
const constants_1 = require("../utilities/constants");
exports.view = path_1.default.join(constants_1.PUBLIC_DIST_PATH, "index.ejs");
function IndexController(req, res, next) {
    const data = {};
    ejs_1.default.renderFile(exports.view, data, constants_1.RENDER_OPTIONS)
        .then(function (html) {
        return res.status(200).send(html);
    })
        .catch(function (err) {
        console.log(err.message);
        return res.status(501).send(err);
    });
}
exports.default = IndexController;
//# sourceMappingURL=IndexController.js.map