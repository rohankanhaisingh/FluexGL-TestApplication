"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logWarning = exports.logInfo = void 0;
function logInfo(from, message) {
    return console.log(`[INFO] `.green + `(${from.toUpperCase()}): `.gray + message);
}
exports.logInfo = logInfo;
function logWarning(from, message) {
    return console.log(`[WARNING] `.yellow + `(${from.toUpperCase()}): `.gray + message);
}
exports.logWarning = logWarning;
function logError(from, message) {
    return console.log(`[ERROR] `.red + `(${from.toUpperCase()}): `.gray + message);
}
exports.logError = logError;
//# sourceMappingURL=loggin.js.map