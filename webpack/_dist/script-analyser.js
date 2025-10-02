"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const constants_1 = __importDefault(require("./constants"));
const utilities_1 = require("./utilities");
function analyseCorrespondingScripts() {
    const scriptEntries = {};
    const ejsViewFiles = fs_1.default.readdirSync(constants_1.default.VIEWS_PATH, "utf-8");
    (0, utilities_1.logInfo)(`${ejsViewFiles.length.toString().yellow} aantal bestanden gevonden in ${constants_1.default.VIEWS_PATH.toString().yellow}.`);
    for (let file of ejsViewFiles) {
        if (file.endsWith(".ejs")) {
            const pageName = file.split(".ejs")[0].toLowerCase();
            const physicalScriptDirectoryPath = path_1.default.join(constants_1.default.SCRIPTS_PATH, "entries", "entry@" + pageName);
            if (fs_1.default.existsSync(physicalScriptDirectoryPath)) {
                const correspondingScriptPath = path_1.default.join(physicalScriptDirectoryPath, "entry.ts");
                if (fs_1.default.existsSync(correspondingScriptPath)) {
                    scriptEntries[pageName] = correspondingScriptPath;
                    (0, utilities_1.logInfo)(`Bestand '${pageName}' toegevoegd aan entries.`, "Script analyser");
                }
                else {
                    (0, utilities_1.logWarning)(`Bestand '${pageName}' heeft geen bijbehorende 'entry.ts' script gelokaliseerd in ${physicalScriptDirectoryPath}.`, "Script analyser");
                }
            }
            else {
                (0, utilities_1.logWarning)(`Bestand '${pageName}' heeft geen bijbehorende script gelokaliseerd in ${constants_1.default.SCRIPTS_PATH}.`);
            }
        }
    }
    return scriptEntries;
}
exports.default = analyseCorrespondingScripts;
