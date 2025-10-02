"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const express_flash_1 = __importDefault(require("express-flash"));
const router_1 = require("./router");
const assets_1 = require("./assets");
const constants_1 = require("./utilities/constants");
dotenv_1.default.config({ path: constants_1.DOTENV_FILE_PATH });
colors_1.default.enable();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const router = express_1.default.Router();
        app.set("view engine", "ejs");
        app.set("views", constants_1.PUBLIC_VIEWS_PATH);
        (0, assets_1.setAssetRoutes)(app);
        (0, router_1.initializeRouter)(router);
        app.use((0, express_session_1.default)({ secret: process.env.SESSION_SECRET || "null", resave: true, saveUninitialized: true }));
        app.use((0, express_flash_1.default)());
        app.use(passport_1.default.initialize());
        app.use(passport_1.default.session());
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        app.use(body_parser_1.default.json());
        app.use((0, cors_1.default)());
        app.use("/", router);
        app.listen(constants_1.RESERVED_SERVER_PORT, function () {
            console.log(`Server is running on port ${constants_1.RESERVED_SERVER_PORT}`.green);
        });
    });
})();
//# sourceMappingURL=app.js.map