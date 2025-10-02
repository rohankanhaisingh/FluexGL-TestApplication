"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRouter = void 0;
const IndexController_1 = __importDefault(require("./controllers/IndexController"));
function initializeRouter(router) {
    router.get("/", IndexController_1.default);
}
exports.initializeRouter = initializeRouter;
//# sourceMappingURL=router.js.map