"use strict";
(self["webpackChunkfluex_gl_test_application"] = self["webpackChunkfluex_gl_test_application"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(1);
const index_1 = __webpack_require__(2);
(0, index_1.CalculateAverageArrayValue)([]);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Thread = exports.Scene = exports.Color = exports.Vector4 = exports.Vector3 = exports.Vector2 = exports.Debug = exports.DefaultAirDensity = exports.DefaultGravity = exports.MaxSafeInt = exports.MinSafeInt = exports.MaxInt32 = exports.MinInt32 = exports.QuarterPI = exports.HalfPI = exports.TwoPI = exports.PI = exports.InfinityValue = exports.Epsilon = exports.RadiansToDegrees = exports.DegreesToRadians = exports.PixelsPerMeter = exports.HSLToRGB = exports.RGBToHex = exports.HexToRGB = exports.RGBToHSL = exports.ConvertByteArrayToHex = exports.ConvertHexToByteArray = exports.RandomUnitVector3D = exports.RandomUnitVector2D = exports.RandomNormal = exports.RandomItem = exports.RandomIntegerInRange = exports.RandomFloatInRange = exports.RandomBoolean = exports.CalculateVectorDistance = exports.CalculateVectorAngle = exports.CalculateIntersection = exports.CalculateDirection = exports.CalculateAverageArrayValue = exports.FluexGL = void 0;
exports.FluexGL = {
    name: "FluexGL",
    author: "Rohan Kanhaisingh",
    version: "0.0.1",
    license: "MIT",
    repository: "https://www.github.com/rohankanhaisingh/FluexGL",
    options: {
        debugger: {
            showInfo: true,
            showWarnings: true,
            showErrors: true,
            breakOnError: false,
        }
    }
};
var exports_1 = __webpack_require__(3);
Object.defineProperty(exports, "CalculateAverageArrayValue", ({ enumerable: true, get: function () { return exports_1.CalculateAverageArrayValue; } }));
Object.defineProperty(exports, "CalculateDirection", ({ enumerable: true, get: function () { return exports_1.CalculateDirection; } }));
Object.defineProperty(exports, "CalculateIntersection", ({ enumerable: true, get: function () { return exports_1.CalculateIntersection; } }));
Object.defineProperty(exports, "CalculateVectorAngle", ({ enumerable: true, get: function () { return exports_1.CalculateVectorAngle; } }));
Object.defineProperty(exports, "CalculateVectorDistance", ({ enumerable: true, get: function () { return exports_1.CalculateVectorDistance; } }));
Object.defineProperty(exports, "RandomBoolean", ({ enumerable: true, get: function () { return exports_1.RandomBoolean; } }));
Object.defineProperty(exports, "RandomFloatInRange", ({ enumerable: true, get: function () { return exports_1.RandomFloatInRange; } }));
Object.defineProperty(exports, "RandomIntegerInRange", ({ enumerable: true, get: function () { return exports_1.RandomIntegerInRange; } }));
Object.defineProperty(exports, "RandomItem", ({ enumerable: true, get: function () { return exports_1.RandomItem; } }));
Object.defineProperty(exports, "RandomNormal", ({ enumerable: true, get: function () { return exports_1.RandomNormal; } }));
Object.defineProperty(exports, "RandomUnitVector2D", ({ enumerable: true, get: function () { return exports_1.RandomUnitVector2D; } }));
Object.defineProperty(exports, "RandomUnitVector3D", ({ enumerable: true, get: function () { return exports_1.RandomUnitVector3D; } }));
Object.defineProperty(exports, "ConvertHexToByteArray", ({ enumerable: true, get: function () { return exports_1.ConvertHexToByteArray; } }));
Object.defineProperty(exports, "ConvertByteArrayToHex", ({ enumerable: true, get: function () { return exports_1.ConvertByteArrayToHex; } }));
Object.defineProperty(exports, "RGBToHSL", ({ enumerable: true, get: function () { return exports_1.RGBToHSL; } }));
Object.defineProperty(exports, "HexToRGB", ({ enumerable: true, get: function () { return exports_1.HexToRGB; } }));
Object.defineProperty(exports, "RGBToHex", ({ enumerable: true, get: function () { return exports_1.RGBToHex; } }));
Object.defineProperty(exports, "HSLToRGB", ({ enumerable: true, get: function () { return exports_1.HSLToRGB; } }));
Object.defineProperty(exports, "PixelsPerMeter", ({ enumerable: true, get: function () { return exports_1.PixelsPerMeter; } }));
Object.defineProperty(exports, "DegreesToRadians", ({ enumerable: true, get: function () { return exports_1.DegreesToRadians; } }));
Object.defineProperty(exports, "RadiansToDegrees", ({ enumerable: true, get: function () { return exports_1.RadiansToDegrees; } }));
Object.defineProperty(exports, "Epsilon", ({ enumerable: true, get: function () { return exports_1.Epsilon; } }));
Object.defineProperty(exports, "InfinityValue", ({ enumerable: true, get: function () { return exports_1.InfinityValue; } }));
Object.defineProperty(exports, "PI", ({ enumerable: true, get: function () { return exports_1.PI; } }));
Object.defineProperty(exports, "TwoPI", ({ enumerable: true, get: function () { return exports_1.TwoPI; } }));
Object.defineProperty(exports, "HalfPI", ({ enumerable: true, get: function () { return exports_1.HalfPI; } }));
Object.defineProperty(exports, "QuarterPI", ({ enumerable: true, get: function () { return exports_1.QuarterPI; } }));
Object.defineProperty(exports, "MinInt32", ({ enumerable: true, get: function () { return exports_1.MinInt32; } }));
Object.defineProperty(exports, "MaxInt32", ({ enumerable: true, get: function () { return exports_1.MaxInt32; } }));
Object.defineProperty(exports, "MinSafeInt", ({ enumerable: true, get: function () { return exports_1.MinSafeInt; } }));
Object.defineProperty(exports, "MaxSafeInt", ({ enumerable: true, get: function () { return exports_1.MaxSafeInt; } }));
Object.defineProperty(exports, "DefaultGravity", ({ enumerable: true, get: function () { return exports_1.DefaultGravity; } }));
Object.defineProperty(exports, "DefaultAirDensity", ({ enumerable: true, get: function () { return exports_1.DefaultAirDensity; } }));
Object.defineProperty(exports, "Debug", ({ enumerable: true, get: function () { return exports_1.Debug; } }));
Object.defineProperty(exports, "Vector2", ({ enumerable: true, get: function () { return exports_1.Vector2; } }));
Object.defineProperty(exports, "Vector3", ({ enumerable: true, get: function () { return exports_1.Vector3; } }));
Object.defineProperty(exports, "Vector4", ({ enumerable: true, get: function () { return exports_1.Vector4; } }));
Object.defineProperty(exports, "Color", ({ enumerable: true, get: function () { return exports_1.Color; } }));
var exports_2 = __webpack_require__(13);
Object.defineProperty(exports, "Scene", ({ enumerable: true, get: function () { return exports_2.Scene; } }));
Object.defineProperty(exports, "Thread", ({ enumerable: true, get: function () { return exports_2.Thread; } }));


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = exports.Vector4 = exports.Vector3 = exports.Vector2 = exports.Debug = exports.DefaultAirDensity = exports.DefaultGravity = exports.MaxSafeInt = exports.MinSafeInt = exports.MaxInt32 = exports.MinInt32 = exports.QuarterPI = exports.HalfPI = exports.TwoPI = exports.PI = exports.InfinityValue = exports.Epsilon = exports.RadiansToDegrees = exports.DegreesToRadians = exports.PixelsPerMeter = exports.HSLToRGB = exports.RGBToHex = exports.HexToRGB = exports.RGBToHSL = exports.ConvertByteArrayToHex = exports.ConvertHexToByteArray = exports.RandomUnitVector3D = exports.RandomUnitVector2D = exports.RandomNormal = exports.RandomItem = exports.RandomIntegerInRange = exports.RandomFloatInRange = exports.RandomBoolean = exports.CalculateVectorDistance = exports.CalculateVectorAngle = exports.CalculateIntersection = exports.CalculateDirection = exports.CalculateAverageArrayValue = void 0;
var calculators_1 = __webpack_require__(4);
Object.defineProperty(exports, "CalculateAverageArrayValue", ({ enumerable: true, get: function () { return calculators_1.CalculateAverageArrayValue; } }));
Object.defineProperty(exports, "CalculateDirection", ({ enumerable: true, get: function () { return calculators_1.CalculateDirection; } }));
Object.defineProperty(exports, "CalculateIntersection", ({ enumerable: true, get: function () { return calculators_1.CalculateIntersection; } }));
Object.defineProperty(exports, "CalculateVectorAngle", ({ enumerable: true, get: function () { return calculators_1.CalculateVectorAngle; } }));
Object.defineProperty(exports, "CalculateVectorDistance", ({ enumerable: true, get: function () { return calculators_1.CalculateVectorDistance; } }));
var randomizer_1 = __webpack_require__(5);
Object.defineProperty(exports, "RandomBoolean", ({ enumerable: true, get: function () { return randomizer_1.RandomBoolean; } }));
Object.defineProperty(exports, "RandomFloatInRange", ({ enumerable: true, get: function () { return randomizer_1.RandomFloatInRange; } }));
Object.defineProperty(exports, "RandomIntegerInRange", ({ enumerable: true, get: function () { return randomizer_1.RandomIntegerInRange; } }));
Object.defineProperty(exports, "RandomItem", ({ enumerable: true, get: function () { return randomizer_1.RandomItem; } }));
Object.defineProperty(exports, "RandomNormal", ({ enumerable: true, get: function () { return randomizer_1.RandomNormal; } }));
Object.defineProperty(exports, "RandomUnitVector2D", ({ enumerable: true, get: function () { return randomizer_1.RandomUnitVector2D; } }));
Object.defineProperty(exports, "RandomUnitVector3D", ({ enumerable: true, get: function () { return randomizer_1.RandomUnitVector3D; } }));
var converters_1 = __webpack_require__(6);
Object.defineProperty(exports, "ConvertHexToByteArray", ({ enumerable: true, get: function () { return converters_1.ConvertHexToByteArray; } }));
Object.defineProperty(exports, "ConvertByteArrayToHex", ({ enumerable: true, get: function () { return converters_1.ConvertByteArrayToHex; } }));
Object.defineProperty(exports, "RGBToHSL", ({ enumerable: true, get: function () { return converters_1.RGBToHSL; } }));
Object.defineProperty(exports, "HexToRGB", ({ enumerable: true, get: function () { return converters_1.HexToRGB; } }));
Object.defineProperty(exports, "RGBToHex", ({ enumerable: true, get: function () { return converters_1.RGBToHex; } }));
Object.defineProperty(exports, "HSLToRGB", ({ enumerable: true, get: function () { return converters_1.HSLToRGB; } }));
var constants_1 = __webpack_require__(7);
Object.defineProperty(exports, "PixelsPerMeter", ({ enumerable: true, get: function () { return constants_1.PixelsPerMeter; } }));
Object.defineProperty(exports, "DegreesToRadians", ({ enumerable: true, get: function () { return constants_1.DegreesToRadians; } }));
Object.defineProperty(exports, "RadiansToDegrees", ({ enumerable: true, get: function () { return constants_1.RadiansToDegrees; } }));
Object.defineProperty(exports, "Epsilon", ({ enumerable: true, get: function () { return constants_1.Epsilon; } }));
Object.defineProperty(exports, "InfinityValue", ({ enumerable: true, get: function () { return constants_1.InfinityValue; } }));
Object.defineProperty(exports, "PI", ({ enumerable: true, get: function () { return constants_1.PI; } }));
Object.defineProperty(exports, "TwoPI", ({ enumerable: true, get: function () { return constants_1.TwoPI; } }));
Object.defineProperty(exports, "HalfPI", ({ enumerable: true, get: function () { return constants_1.HalfPI; } }));
Object.defineProperty(exports, "QuarterPI", ({ enumerable: true, get: function () { return constants_1.QuarterPI; } }));
Object.defineProperty(exports, "MinInt32", ({ enumerable: true, get: function () { return constants_1.MinInt32; } }));
Object.defineProperty(exports, "MaxInt32", ({ enumerable: true, get: function () { return constants_1.MaxInt32; } }));
Object.defineProperty(exports, "MinSafeInt", ({ enumerable: true, get: function () { return constants_1.MinSafeInt; } }));
Object.defineProperty(exports, "MaxSafeInt", ({ enumerable: true, get: function () { return constants_1.MaxSafeInt; } }));
Object.defineProperty(exports, "DefaultGravity", ({ enumerable: true, get: function () { return constants_1.DefaultGravity; } }));
Object.defineProperty(exports, "DefaultAirDensity", ({ enumerable: true, get: function () { return constants_1.DefaultAirDensity; } }));
var console_1 = __webpack_require__(8);
Object.defineProperty(exports, "Debug", ({ enumerable: true, get: function () { return console_1.Debug; } }));
var Vector2_1 = __webpack_require__(9);
Object.defineProperty(exports, "Vector2", ({ enumerable: true, get: function () { return Vector2_1.Vector2; } }));
var Vector3_1 = __webpack_require__(10);
Object.defineProperty(exports, "Vector3", ({ enumerable: true, get: function () { return Vector3_1.Vector3; } }));
var Vector4_1 = __webpack_require__(11);
Object.defineProperty(exports, "Vector4", ({ enumerable: true, get: function () { return Vector4_1.Vector4; } }));
var Color_1 = __webpack_require__(12);
Object.defineProperty(exports, "Color", ({ enumerable: true, get: function () { return Color_1.Color; } }));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalculateDirection = exports.CalculateIntersection = exports.CalculateVectorAngle = exports.CalculateVectorDistance = exports.CalculateAverageArrayValue = void 0;
const codes_1 = __webpack_require__(37);
const exports_1 = __webpack_require__(3);
function CalculateAverageArrayValue(input) {
    if (!input) {
        exports_1.Debug.Error("CalculateAverageArrayValue: invalid input (null or undefined).", [
            "Input must be a non-null array of numbers.",
            `Received: ${typeof input}`
        ], codes_1.ErrorCodes.NUMBER_NO_VALID_INPUT_PROVIDED);
        return null;
    }
    const valid = input.filter(Number.isFinite);
    if (valid.length === 0) {
        exports_1.Debug.Error("CalculateAverageArrayValue: no valid input provided.", [
            "Input array must contain at least one finite number.",
            `Received: [${input.join(", ")}]`
        ], codes_1.ErrorCodes.NUMBER_NO_VALID_INPUT_PROVIDED);
        return null;
    }
    const sum = valid.reduce((acc, v) => acc + v, 0);
    return sum / valid.length;
}
exports.CalculateAverageArrayValue = CalculateAverageArrayValue;
function CalculateVectorDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.hypot(dx, dy);
}
exports.CalculateVectorDistance = CalculateVectorDistance;
function CalculateVectorAngle(point1, point2) {
    const dy = point2.y - point1.y;
    const dx = point2.x - point1.x;
    let thetaDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (thetaDeg < 0)
        thetaDeg += 360;
    return thetaDeg;
}
exports.CalculateVectorAngle = CalculateVectorAngle;
function CalculateIntersection(p1, p2, p3, p4) {
    const d1 = (p1.x - p2.x) * (p3.y - p4.y);
    const d2 = (p1.y - p2.y) * (p3.x - p4.x);
    const det = d1 - d2;
    const EPS = 1e-12;
    if (Math.abs(det) < EPS)
        throw new Error("CalculateIntersection: lines are parallel or coincident.");
    const u1 = p1.x * p2.y - p1.y * p2.x;
    const u4 = p3.x * p4.y - p3.y * p4.x;
    const u2x = p3.x - p4.x;
    const u3x = p1.x - p2.x;
    const u2y = p3.y - p4.y;
    const u3y = p1.y - p2.y;
    const px = (u1 * u2x - u3x * u4) / det;
    const py = (u1 * u2y - u3y * u4) / det;
    return { x: px, y: py };
}
exports.CalculateIntersection = CalculateIntersection;
function CalculateDirection(point1, point2) {
    const angle = Math.atan2(point2.y - point1.y, point2.x - point2.y);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        angle, cos, sin,
        normalize: () => ({
            x: +cos.toFixed(2),
            y: +sin.toFixed(2),
        }),
        complete: () => ({
            x: Math.round(cos),
            y: Math.round(sin),
        }),
        multiply: (len) => ({
            x: cos * len,
            y: sin * len,
        }),
    };
}
exports.CalculateDirection = CalculateDirection;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RandomNormal = exports.RandomUnitVector3D = exports.RandomUnitVector2D = exports.ShuffleArray = exports.RandomItem = exports.RandomBoolean = exports.RandomFloatInRange = exports.RandomIntegerInRange = void 0;
function RandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.RandomIntegerInRange = RandomIntegerInRange;
function RandomFloatInRange(min, max) {
    return Math.random() * (max - min) + min;
}
exports.RandomFloatInRange = RandomFloatInRange;
function RandomBoolean(probability = 0.5) {
    return Math.random() < probability;
}
exports.RandomBoolean = RandomBoolean;
function RandomItem(arr) {
    if (arr.length === 0)
        throw new Error("RandomItem: array is empty.");
    const idx = RandomIntegerInRange(0, arr.length - 1);
    return arr[idx];
}
exports.RandomItem = RandomItem;
function ShuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = RandomIntegerInRange(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
exports.ShuffleArray = ShuffleArray;
function RandomUnitVector2D() {
    const angle = Math.random() * Math.PI * 2;
    return { x: Math.cos(angle), y: Math.sin(angle) };
}
exports.RandomUnitVector2D = RandomUnitVector2D;
function RandomUnitVector3D() {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
    };
}
exports.RandomUnitVector3D = RandomUnitVector3D;
function RandomNormal(mean = 0, stdDev = 1) {
    const u = 1 - Math.random();
    const v = 1 - Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * stdDev + mean;
}
exports.RandomNormal = RandomNormal;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HSLToRGB = exports.RGBToHSL = exports.HexToRGB = exports.RGBToHex = exports.ConvertByteArrayToHex = exports.ConvertHexToByteArray = void 0;
function ConvertHexToByteArray(hex) {
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2) {
        const byte = parseInt(hex.substr(c, 2), 16);
        if (!isNaN(byte))
            bytes.push(byte);
    }
    return bytes;
}
exports.ConvertHexToByteArray = ConvertHexToByteArray;
function ConvertByteArrayToHex(bytes) {
    const hex = [];
    for (let i = 0; i < bytes.length; i++) {
        const current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
        hex.push((current >>> 4).toString(16));
        hex.push((current & 0xf).toString(16));
    }
    return hex.join("");
}
exports.ConvertByteArrayToHex = ConvertByteArrayToHex;
function RGBToHex(r, g, b) {
    return ("#" +
        [r, g, b]
            .map((c) => Math.max(0, Math.min(255, c)).toString(16).padStart(2, "0"))
            .join(""));
}
exports.RGBToHex = RGBToHex;
function HexToRGB(hex) {
    const clean = hex.replace(/^#/, "");
    const [r, g, b] = ConvertHexToByteArray(clean);
    return { r, g, b };
}
exports.HexToRGB = HexToRGB;
function RGBToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h *= 60;
    }
    return { h, s, l };
}
exports.RGBToHSL = RGBToHSL;
function HSLToRGB(h, s, l) {
    const C = (1 - Math.abs(2 * l - 1)) * s;
    const Hp = h / 60;
    const X = C * (1 - Math.abs((Hp % 2) - 1));
    let r1 = 0, g1 = 0, b1 = 0;
    if (0 <= Hp && Hp < 1)
        [r1, g1, b1] = [C, X, 0];
    else if (1 <= Hp && Hp < 2)
        [r1, g1, b1] = [X, C, 0];
    else if (2 <= Hp && Hp < 3)
        [r1, g1, b1] = [0, C, X];
    else if (3 <= Hp && Hp < 4)
        [r1, g1, b1] = [0, X, C];
    else if (4 <= Hp && Hp < 5)
        [r1, g1, b1] = [X, 0, C];
    else if (5 <= Hp && Hp < 6)
        [r1, g1, b1] = [C, 0, X];
    const m = l - C / 2;
    return {
        r: Math.round((r1 + m) * 255),
        g: Math.round((g1 + m) * 255),
        b: Math.round((b1 + m) * 255),
    };
}
exports.HSLToRGB = HSLToRGB;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultAirDensity = exports.DefaultGravity = exports.MaxSafeInt = exports.MinSafeInt = exports.MaxInt32 = exports.MinInt32 = exports.QuarterPI = exports.HalfPI = exports.TwoPI = exports.PI = exports.InfinityValue = exports.Epsilon = exports.RadiansToDegrees = exports.DegreesToRadians = exports.PixelsPerMeter = void 0;
exports.PixelsPerMeter = 30;
exports.DegreesToRadians = Math.PI / 180;
exports.RadiansToDegrees = 180 / Math.PI;
exports.Epsilon = 1e-6;
exports.InfinityValue = Number.POSITIVE_INFINITY;
exports.PI = Math.PI;
exports.TwoPI = Math.PI * 2;
exports.HalfPI = Math.PI / 2;
exports.QuarterPI = Math.PI / 4;
exports.MinInt32 = -2147483648;
exports.MaxInt32 = 2147483647;
exports.MinSafeInt = Number.MIN_SAFE_INTEGER;
exports.MaxSafeInt = Number.MAX_SAFE_INTEGER;
exports.DefaultGravity = 9.81;
exports.DefaultAirDensity = 1.225;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Debug = void 0;
const index_1 = __webpack_require__(2);
var Debug;
(function (Debug) {
    function Log(message, additionalDetails) {
        if (!index_1.FluexGL.options.debugger.showInfo)
            return;
        let outputString = `%c[INFO]: %c${message} %c`;
        additionalDetails && additionalDetails.forEach(function (detail) {
            outputString += `\n\u0009  > ${detail}`;
        });
        return console.log(outputString, "color: white;", "color: gray", "color: gray");
    }
    Debug.Log = Log;
    function Warn(message, additionalDetails, warningCode) {
        if (!index_1.FluexGL.options.debugger.showWarnings)
            return;
        let outputString = `%c(${warningCode ? warningCode : "Unknown".toUpperCase()}) %c[WARNING]: %c${message} %c`;
        (additionalDetails && additionalDetails !== null) && additionalDetails.forEach(function (detail) {
            outputString += `\n\u0009  > ${detail}`;
        });
        return console.log(outputString, "color: gray", "color: yellow;", "color: white", "color: white; font-style: italic;");
    }
    Debug.Warn = Warn;
    function Error(message, additionalDetails, errorCode) {
        if (!index_1.FluexGL.options.debugger.showErrors)
            return;
        let outputString = `%c(${errorCode ? errorCode : "Unknown".toUpperCase()}) %c[ERROR]: %c${message} %c`;
        (additionalDetails && additionalDetails !== null) && additionalDetails.forEach(function (detail) {
            outputString += `\n\u0009  > ${detail}`;
        });
        console.log(outputString, "color: red", "color: red;", "color: white", "color: white; font-style: italic;");
        if (index_1.FluexGL.options.debugger.breakOnError) {
            for (let char of message)
                outputString = outputString.replace("%c", "");
            throw new window.Error(outputString);
        }
    }
    Debug.Error = Error;
})(Debug = exports.Debug || (exports.Debug = {}));


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = typeof x === "number" ? x : 0;
        this.y = typeof y === "number" ? y : 0;
    }
    Set(x, y) {
        this.x = typeof x === "number" ? x : this.x;
        this.y = typeof y === "number" ? y : this.y;
        return this;
    }
    Clone() {
        return new Vector2(this.x, this.y);
    }
    Add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    Subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    Multiply(value) {
        this.x *= value.x;
        this.y *= value.y;
        return this;
    }
    MultiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    Devide(value) {
        this.x /= value.x;
        this.y /= value.y;
        return this;
    }
    Divide(value) {
        this.x /= value.x;
        this.y /= value.y;
        return this;
    }
    Min(value) {
        this.x = Math.min(this.x, value.x);
        this.y = Math.min(this.y, value.y);
        return this;
    }
    Max(value) {
        this.x = Math.max(this.x, value.x);
        this.y = Math.max(this.y, value.y);
        return this;
    }
    Clamp(min, max) {
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        return this;
    }
    ClampScalar(min, max) {
        this.x = Math.max(min, Math.min(max, this.x));
        this.y = Math.max(min, Math.min(max, this.y));
        return this;
    }
    Floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    Ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    Round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    Dot(value) {
        return this.x * value.x + this.y * value.y;
    }
    Length() {
        return Math.hypot(this.x, this.y);
    }
    Normalize() {
        const len = this.Length();
        if (len !== 0) {
            this.x /= len;
            this.y /= len;
        }
        return this;
    }
    ComputeAngle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    RotateAround(center, angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const x = this.x - center.x;
        const y = this.y - center.y;
        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;
        return this;
    }
    DistanceTo(v) {
        return Math.hypot(this.x - v.x, this.y - v.y);
    }
    Equals(v, epsilon = 1e-6) {
        return Math.abs(this.x - v.x) <= epsilon && Math.abs(this.y - v.y) <= epsilon;
    }
    ConvertPixelsToMeters() {
        const x = this.x * (1 / Vector2.PPM);
        const y = this.y * (1 / Vector2.PPM);
        return new Vector2(x, y);
    }
    SaveConvertPixelsToMeters() {
        this.x *= 1 / Vector2.PPM;
        this.y *= 1 / Vector2.PPM;
        return this;
    }
    ConvertMetersToPixels() {
        const x = this.x * Vector2.PPM;
        const y = this.y * Vector2.PPM;
        return new Vector2(x, y);
    }
    SaveConvertMetersToPixels() {
        this.x *= Vector2.PPM;
        this.y *= Vector2.PPM;
        return this;
    }
}
exports.Vector2 = Vector2;
Vector2.PPM = 30;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = typeof x === "number" ? x : 0;
        this.y = typeof y === "number" ? y : 0;
        this.z = typeof z === "number" ? z : 0;
    }
    Set(x, y, z) {
        this.x = typeof x === "number" ? x : this.x;
        this.y = typeof y === "number" ? y : this.y;
        this.z = typeof z === "number" ? z : this.z;
        return this;
    }
    Clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    Add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    Subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    Multiply(value) {
        this.x *= value.x;
        this.y *= value.y;
        this.z *= value.z;
        return this;
    }
    MultiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    Devide(value) {
        this.x /= value.x;
        this.y /= value.y;
        this.z /= value.z;
        return this;
    }
    Divide(value) {
        this.x /= value.x;
        this.y /= value.y;
        this.z /= value.z;
        return this;
    }
    Min(value) {
        this.x = Math.min(this.x, value.x);
        this.y = Math.min(this.y, value.y);
        this.z = Math.min(this.z, value.z);
        return this;
    }
    Max(value) {
        this.x = Math.max(this.x, value.x);
        this.y = Math.max(this.y, value.y);
        this.z = Math.max(this.z, value.z);
        return this;
    }
    Clamp(min, max) {
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        this.z = Math.max(min.z, Math.min(max.z, this.z));
        return this;
    }
    ClampScalar(min, max) {
        this.x = Math.max(min, Math.min(max, this.x));
        this.y = Math.max(min, Math.min(max, this.y));
        this.z = Math.max(min, Math.min(max, this.z));
        return this;
    }
    Floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    }
    Ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    }
    Round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    }
    Dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    Cross(v) {
        const x = this.y * v.z - this.z * v.y;
        const y = this.z * v.x - this.x * v.z;
        const z = this.x * v.y - this.y * v.x;
        return new Vector3(x, y, z);
    }
    Length() {
        return Math.hypot(this.x, this.y, this.z);
    }
    Normalize() {
        const len = this.Length();
        if (len !== 0) {
            this.x /= len;
            this.y /= len;
            this.z /= len;
        }
        return this;
    }
    AngleTo(v) {
        const denom = this.Length() * Math.hypot(v.x, v.y, v.z);
        if (denom === 0)
            return 0;
        const cos = this.Dot(v) / denom;
        const t = Math.max(-1, Math.min(1, cos));
        return Math.acos(t);
    }
    RotateAroundAxis(axis, angle) {
        const axLen = Math.hypot(axis.x, axis.y, axis.z);
        if (axLen === 0)
            return this;
        const ux = axis.x / axLen;
        const uy = axis.y / axLen;
        const uz = axis.z / axLen;
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const { x, y, z } = this;
        this.x = x * (c + ux * ux * (1 - c)) + y * (ux * uy * (1 - c) - uz * s) + z * (ux * uz * (1 - c) + uy * s);
        this.y = x * (uy * ux * (1 - c) + uz * s) + y * (c + uy * uy * (1 - c)) + z * (uy * uz * (1 - c) - ux * s);
        this.z = x * (uz * ux * (1 - c) - uy * s) + y * (uz * uy * (1 - c) + ux * s) + z * (c + uz * uz * (1 - c));
        return this;
    }
    DistanceTo(v) {
        return Math.hypot(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    Equals(v, epsilon = 1e-6) {
        return (Math.abs(this.x - v.x) <= epsilon &&
            Math.abs(this.y - v.y) <= epsilon &&
            Math.abs(this.z - v.z) <= epsilon);
    }
    ConvertPixelsToMeters() {
        const inv = 1 / Vector3.PPM;
        return new Vector3(this.x * inv, this.y * inv, this.z * inv);
    }
    SaveConvertPixelsToMeters() {
        const inv = 1 / Vector3.PPM;
        this.x *= inv;
        this.y *= inv;
        this.z *= inv;
        return this;
    }
    ConvertMetersToPixels() {
        const s = Vector3.PPM;
        return new Vector3(this.x * s, this.y * s, this.z * s);
    }
    SaveConvertMetersToPixels() {
        const s = Vector3.PPM;
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }
}
exports.Vector3 = Vector3;
Vector3.PPM = 30;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector4 = void 0;
class Vector4 {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = typeof x === "number" ? x : 0;
        this.y = typeof y === "number" ? y : 0;
        this.z = typeof z === "number" ? z : 0;
        this.w = typeof w === "number" ? w : 0;
    }
    Set(x, y, z, w) {
        this.x = typeof x === "number" ? x : this.x;
        this.y = typeof y === "number" ? y : this.y;
        this.z = typeof z === "number" ? z : this.z;
        this.w = typeof w === "number" ? w : this.w;
        return this;
    }
    Clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
    }
    Add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
        return this;
    }
    Subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
        return this;
    }
    Multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        this.w *= v.w;
        return this;
    }
    MultiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        this.w *= s;
        return this;
    }
    Devide(v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        this.w /= v.w;
        return this;
    }
    Divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        this.w /= v.w;
        return this;
    }
    Floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this;
    }
    Ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this;
    }
    Round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this;
    }
    Dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }
    Length() {
        return Math.hypot(this.x, this.y, this.z, this.w);
    }
    Normalize() {
        const len = this.Length();
        if (len !== 0) {
            this.x /= len;
            this.y /= len;
            this.z /= len;
            this.w /= len;
        }
        return this;
    }
    Lerp(v, t) {
        this.x += (v.x - this.x) * t;
        this.y += (v.y - this.y) * t;
        this.z += (v.z - this.z) * t;
        this.w += (v.w - this.w) * t;
        return this;
    }
    DistanceTo(v) {
        return Math.hypot(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
    }
    Equals(v, epsilon = 1e-6) {
        return (Math.abs(this.x - v.x) <= epsilon &&
            Math.abs(this.y - v.y) <= epsilon &&
            Math.abs(this.z - v.z) <= epsilon &&
            Math.abs(this.w - v.w) <= epsilon);
    }
    ToArray() {
        return [this.x, this.y, this.z, this.w];
    }
    FromArray(arr) {
        this.x = arr[0];
        this.y = arr[1];
        this.z = arr[2];
        this.w = arr[3];
        return this;
    }
}
exports.Vector4 = Vector4;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
function clamp(value) {
    return value < 0 ? 0 : value > 1 ? 1 : value;
}
class Color {
    constructor(red = 0, green = 0, blue = 0, alpha = 1) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    Clone() {
        return new Color(this.red, this.green, this.blue, this.alpha);
    }
    Add(color) {
        this.red = clamp(this.red + color.red);
        this.green = clamp(this.green + color.green);
        this.blue = clamp(this.blue + color.blue);
        this.alpha = clamp(this.alpha + color.alpha);
        return this;
    }
    Multiply(color) {
        this.red = clamp(this.red * color.red);
        this.green = clamp(this.green * color.green);
        this.blue = clamp(this.blue * color.blue);
        this.alpha = clamp(this.alpha * color.alpha);
        return this;
    }
    MultiplyScalar(scalar) {
        this.red = clamp(this.red * scalar);
        this.green = clamp(this.green * scalar);
        this.blue = clamp(this.blue * scalar);
        this.alpha = clamp(this.alpha * scalar);
        return this;
    }
    Lerp(color, factor) {
        const k = clamp(factor);
        this.red += (color.red - this.red) * k;
        this.green += (color.green - this.green) * k;
        this.blue += (color.blue - this.blue) * k;
        this.alpha += (color.alpha - this.alpha) * k;
        return this;
    }
    Equals(color, eps = 1e-6) {
        return (Math.abs(this.red - color.red) <= eps &&
            Math.abs(this.green - color.green) <= eps &&
            Math.abs(this.blue - color.blue) <= eps &&
            Math.abs(this.alpha - color.alpha) <= eps);
    }
}
exports.Color = Color;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Thread = exports.Scene = void 0;
var Scene_1 = __webpack_require__(14);
Object.defineProperty(exports, "Scene", ({ enumerable: true, get: function () { return Scene_1.Scene; } }));
var Thread_1 = __webpack_require__(15);
Object.defineProperty(exports, "Thread", ({ enumerable: true, get: function () { return Thread_1.Thread; } }));


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
class Scene {
}
exports.Scene = Scene;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Thread = void 0;
const uuid_1 = __webpack_require__(16);
const console_1 = __webpack_require__(8);
const codes_1 = __webpack_require__(37);
class Thread {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.simulationUpdateRate = 60;
        this.frameRate = 0;
        this.deltaTime = 0;
        this.currentRegisteredTimestamp = Date.now();
        this.lastRegisteredTimestamp = Date.now();
        this.startTimestamp = Date.now();
        this.events = {
            idle: [],
            start: [],
            stop: [],
            update: [],
        };
        this.isActive = false;
        this.animationFrame = 0;
        this.times = [];
        this.maxDeltaMs = 250;
        this.loop = (rafTime) => {
            if (!this.isActive)
                return;
            this.animationFrame = window.requestAnimationFrame(this.loop);
            const now = Date.now();
            const rawDeltaMs = now - this.lastRegisteredTimestamp;
            const deltaMs = Math.min(rawDeltaMs, this.maxDeltaMs);
            const deltaSec = deltaMs / 1000;
            const dt = deltaSec * this.simulationUpdateRate;
            this.deltaTime = dt;
            this.lastRegisteredTimestamp = now;
            this.currentRegisteredTimestamp = now;
            while (this.times.length > 0 && this.times[0] <= now - 1000) {
                this.times.shift();
            }
            this.times.push(now);
            this.frameRate = this.times.length;
            const payload = {
                now,
                deltaTime: this.deltaTime,
                frameRate: this.frameRate,
                lastRegisteredTimestamp: this.lastRegisteredTimestamp,
                simulationUpdateRate: this.simulationUpdateRate
            };
            this.events.update.forEach((fn) => fn(payload));
        };
    }
    Start() {
        if (this.isActive) {
            console_1.Debug.Warn("Could not start thread loop because it is already active.", [
                "Call method Stop() before starting again.",
            ], codes_1.WarningCodes.THREAD_ALREADY_ACTIVE);
            return this;
        }
        this.isActive = true;
        this.startTimestamp = Date.now();
        this.lastRegisteredTimestamp = this.startTimestamp;
        this.currentRegisteredTimestamp = this.startTimestamp;
        this.times.length = 0;
        this.frameRate = 0;
        this.events.start.forEach((ev) => ev());
        this.animationFrame = window.requestAnimationFrame(this.loop);
        return this;
    }
    Stop() {
        if (!this.isActive) {
            console_1.Debug.Warn("Could not stop the thread loop because it is already inactive.", [
                "Call method Start() before stopping again.",
            ], codes_1.WarningCodes.THREAD_ALREADY_INACTIVE);
            return this;
        }
        this.isActive = false;
        if (this.animationFrame) {
            window.cancelAnimationFrame(this.animationFrame);
            this.animationFrame = 0;
        }
        this.events.stop.forEach((ev) => ev());
        this.events.idle.forEach((ev) => ev());
        return this;
    }
    SetSimulationUpdateRate(rate) {
        if (!Number.isFinite(rate) || rate <= 0) {
            console_1.Debug.Error(`SetSimulationUpdateRate: invalid rate "${rate}".`, [
                "Rate must be a positive number greater than zero.",
                `Received: ${rate}`
            ], codes_1.ErrorCodes.THREAD_INVALID_SIMULATION_UPDATE_RATE);
            return this;
        }
        this.simulationUpdateRate = rate;
        return this;
    }
    SetMaxDeltaMs(ms) {
        if (!Number.isFinite(ms) || ms <= 0) {
            console_1.Debug.Error(`SetMaxDeltaMs: invalid value "${ms}".`, [
                "Value must be a positive number greater than zero.",
                `Received: ${ms}`
            ], codes_1.ErrorCodes.THREAD_INVALID_DELTA_TIME);
            return this;
        }
        this.maxDeltaMs = ms;
        return this;
    }
    AddEventListener(event, cb) {
        this.events[event].push(cb);
        return () => this.RemoveEventListener(event, cb);
    }
    Once(event, cb) {
        const wrapper = ((...args) => {
            cb(...args);
            this.RemoveEventListener(event, wrapper);
        });
        return this.AddEventListener(event, wrapper);
    }
    RemoveEventListener(event, cb) {
        const arr = this.events[event];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === cb) {
                arr.splice(i, 1);
                break;
            }
        }
        return this;
    }
    ClearEventListeners(event) {
        if (event) {
            this.events[event].length = 0;
        }
        else {
            Object.keys(this.events).forEach((k) => (this.events[k].length = 0));
        }
        return this;
    }
    get IsRunning() {
        return this.isActive;
    }
}
exports.Thread = Thread;


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorCodes = exports.WarningCodes = void 0;
var WarningCodes;
(function (WarningCodes) {
    WarningCodes["THREAD_ALREADY_ACTIVE"] = "#THREAD_WARNING_0001";
    WarningCodes["THREAD_ALREADY_INACTIVE"] = "#THREAD_WARNING_0002";
})(WarningCodes = exports.WarningCodes || (exports.WarningCodes = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["THREAD_INVALID_SIMULATION_UPDATE_RATE"] = "#THREAD_ERROR_0001";
    ErrorCodes["THREAD_INVALID_DELTA_TIME"] = "#THREAD_ERROR_0002";
    ErrorCodes["NUMBER_NO_VALID_INPUT_PROVIDED"] = "#ARRAY_NO_VALID_INPUT_PROVIDED_0001";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [2], () => (__webpack_exec__(0)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);