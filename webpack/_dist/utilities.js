"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWarning = exports.logError = exports.logInfo = exports.formatCurrentTime = void 0;
const colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
function formatCurrentTime() {
    const now = new Date();
    const hours = now.getHours(), minutes = now.getMinutes(), seconds = now.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}
exports.formatCurrentTime = formatCurrentTime;
const logInfo = (message, from) => console.log(`(${formatCurrentTime()})`.cyan + ` (from: ${from !== undefined ? from : "unknown"}) `.gray + `[INFO]:`.green + " " + message.trim());
exports.logInfo = logInfo;
const logError = (message, from) => console.log(`(${formatCurrentTime()})`.cyan + ` (from: ${from !== undefined ? from : "unknown"}) `.gray + `[ERROR]:`.red + " " + message.trim());
exports.logError = logError;
const logWarning = (message, from) => console.log(`(${formatCurrentTime()})`.cyan + ` (from: ${from !== undefined ? from : "unknown"}) `.gray + `[WARNING]:`.yellow + " " + message.trim());
exports.logWarning = logWarning;
