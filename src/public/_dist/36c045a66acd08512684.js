"use strict";
(self["webpackChunkfluex_gl_test_application"] = self["webpackChunkfluex_gl_test_application"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(1);
__webpack_require__(2);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const _fluexgl_1 = __webpack_require__(3);
_fluexgl_1.FluexGL.options.debugger.breakOnError = true;
(async function () {
    const renderer = new _fluexgl_1.WebGPURenderer({ msaaSampleCount: 4 });
    const scene = new _fluexgl_1.WebGPURendererScene(renderer);
    const thread = new _fluexgl_1.Thread();
    const camera = new _fluexgl_1.PerspectiveCamera(innerWidth / innerHeight);
    camera.SetPosition(0, 0, 3);
    camera.LookAt(0, 1, 0);
    renderer.AppendCanvasToElement(document.querySelector(".scene-wrapper"));
    renderer.SetCanvasSizeRelativeToWindow(0, true);
    await renderer.Initialize();
    const cube = new _fluexgl_1.CubeGeometry();
    scene.AddRenderable(cube);
    await scene.Prepare(camera);
    let t = 0;
    thread.AddEventListener("update", function () {
        try {
            t += 0.016;
            const c = Math.cos(t), s = Math.sin(t);
            const model = new Float32Array([
                c, 0, s, 0,
                0, 1, 0, 0,
                -s, 0, c, 0,
                0, 0, 0, 1,
            ]);
            const vp = camera.viewProjection;
            const mvp = new Float32Array(16);
            for (let r = 0; r < 4; r++) {
                for (let k = 0; k < 4; k++) {
                    let sum = 0;
                    for (let i = 0; i < 4; i++)
                        sum += vp[i * 4 + r] * model[k * 4 + i];
                    mvp[k * 4 + r] = sum;
                }
            }
            cube.UpdateUniforms(renderer.gpuDevice, mvp);
            renderer.Render(scene, camera);
        }
        catch (err) {
            thread.Stop();
            console.error(err);
        }
    });
    addEventListener("resize", () => {
        renderer.SetCanvasSizeRelativeToWindow(0, true);
        camera.SetAspect?.(innerWidth / innerHeight);
    });
    thread.Start();
})();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Thread = exports.WebGPURendererScene = exports.PerspectiveCamera = exports.Camera = exports.Renderable = exports.WebGPURenderer = exports.CubeGeometry = exports.SimpleTriangle = exports.Color = exports.Vector4 = exports.Vector3 = exports.Vector2 = exports.Debug = exports.DefaultAirDensity = exports.DefaultGravity = exports.MaxSafeInt = exports.MinSafeInt = exports.MaxInt32 = exports.MinInt32 = exports.QuarterPI = exports.HalfPI = exports.TwoPI = exports.PI = exports.InfinityValue = exports.Epsilon = exports.RadiansToDegrees = exports.DegreesToRadians = exports.PixelsPerMeter = exports.HSLToRGB = exports.RGBToHex = exports.HexToRGB = exports.RGBToHSL = exports.ConvertByteArrayToHex = exports.ConvertHexToByteArray = exports.RandomUnitVector3D = exports.RandomUnitVector2D = exports.RandomNormal = exports.RandomItem = exports.RandomIntegerInRange = exports.RandomFloatInRange = exports.RandomBoolean = exports.CalculateVectorDistance = exports.CalculateVectorAngle = exports.CalculateIntersection = exports.CalculateDirection = exports.CalculateAverageArrayValue = exports.FluexGL = void 0;
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
var exports_1 = __webpack_require__(4);
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
var exports_2 = __webpack_require__(15);
Object.defineProperty(exports, "SimpleTriangle", ({ enumerable: true, get: function () { return exports_2.SimpleTriangle; } }));
Object.defineProperty(exports, "CubeGeometry", ({ enumerable: true, get: function () { return exports_2.CubeGeometry; } }));
var exports_3 = __webpack_require__(17);
Object.defineProperty(exports, "WebGPURenderer", ({ enumerable: true, get: function () { return exports_3.WebGPURenderer; } }));
Object.defineProperty(exports, "Renderable", ({ enumerable: true, get: function () { return exports_3.Renderable; } }));
var exports_4 = __webpack_require__(46);
Object.defineProperty(exports, "Camera", ({ enumerable: true, get: function () { return exports_4.Camera; } }));
Object.defineProperty(exports, "PerspectiveCamera", ({ enumerable: true, get: function () { return exports_4.PerspectiveCamera; } }));
var exports_5 = __webpack_require__(60);
Object.defineProperty(exports, "WebGPURendererScene", ({ enumerable: true, get: function () { return exports_5.WebGPURendererScene; } }));
Object.defineProperty(exports, "Thread", ({ enumerable: true, get: function () { return exports_5.Thread; } }));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = exports.Vector4 = exports.Vector3 = exports.Vector2 = exports.Debug = exports.DefaultAirDensity = exports.DefaultGravity = exports.MaxSafeInt = exports.MinSafeInt = exports.MaxInt32 = exports.MinInt32 = exports.QuarterPI = exports.HalfPI = exports.TwoPI = exports.PI = exports.InfinityValue = exports.Epsilon = exports.RadiansToDegrees = exports.DegreesToRadians = exports.PixelsPerMeter = exports.HSLToRGB = exports.RGBToHex = exports.HexToRGB = exports.RGBToHSL = exports.ConvertByteArrayToHex = exports.ConvertHexToByteArray = exports.RandomUnitVector3D = exports.RandomUnitVector2D = exports.RandomNormal = exports.RandomItem = exports.RandomIntegerInRange = exports.RandomFloatInRange = exports.RandomBoolean = exports.CalculateVectorDistance = exports.CalculateVectorAngle = exports.CalculateIntersection = exports.CalculateDirection = exports.CalculateAverageArrayValue = void 0;
var calculators_1 = __webpack_require__(5);
Object.defineProperty(exports, "CalculateAverageArrayValue", ({ enumerable: true, get: function () { return calculators_1.CalculateAverageArrayValue; } }));
Object.defineProperty(exports, "CalculateDirection", ({ enumerable: true, get: function () { return calculators_1.CalculateDirection; } }));
Object.defineProperty(exports, "CalculateIntersection", ({ enumerable: true, get: function () { return calculators_1.CalculateIntersection; } }));
Object.defineProperty(exports, "CalculateVectorAngle", ({ enumerable: true, get: function () { return calculators_1.CalculateVectorAngle; } }));
Object.defineProperty(exports, "CalculateVectorDistance", ({ enumerable: true, get: function () { return calculators_1.CalculateVectorDistance; } }));
var randomizer_1 = __webpack_require__(7);
Object.defineProperty(exports, "RandomBoolean", ({ enumerable: true, get: function () { return randomizer_1.RandomBoolean; } }));
Object.defineProperty(exports, "RandomFloatInRange", ({ enumerable: true, get: function () { return randomizer_1.RandomFloatInRange; } }));
Object.defineProperty(exports, "RandomIntegerInRange", ({ enumerable: true, get: function () { return randomizer_1.RandomIntegerInRange; } }));
Object.defineProperty(exports, "RandomItem", ({ enumerable: true, get: function () { return randomizer_1.RandomItem; } }));
Object.defineProperty(exports, "RandomNormal", ({ enumerable: true, get: function () { return randomizer_1.RandomNormal; } }));
Object.defineProperty(exports, "RandomUnitVector2D", ({ enumerable: true, get: function () { return randomizer_1.RandomUnitVector2D; } }));
Object.defineProperty(exports, "RandomUnitVector3D", ({ enumerable: true, get: function () { return randomizer_1.RandomUnitVector3D; } }));
var converters_1 = __webpack_require__(8);
Object.defineProperty(exports, "ConvertHexToByteArray", ({ enumerable: true, get: function () { return converters_1.ConvertHexToByteArray; } }));
Object.defineProperty(exports, "ConvertByteArrayToHex", ({ enumerable: true, get: function () { return converters_1.ConvertByteArrayToHex; } }));
Object.defineProperty(exports, "RGBToHSL", ({ enumerable: true, get: function () { return converters_1.RGBToHSL; } }));
Object.defineProperty(exports, "HexToRGB", ({ enumerable: true, get: function () { return converters_1.HexToRGB; } }));
Object.defineProperty(exports, "RGBToHex", ({ enumerable: true, get: function () { return converters_1.RGBToHex; } }));
Object.defineProperty(exports, "HSLToRGB", ({ enumerable: true, get: function () { return converters_1.HSLToRGB; } }));
var constants_1 = __webpack_require__(9);
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
var console_1 = __webpack_require__(10);
Object.defineProperty(exports, "Debug", ({ enumerable: true, get: function () { return console_1.Debug; } }));
var Vector2_1 = __webpack_require__(11);
Object.defineProperty(exports, "Vector2", ({ enumerable: true, get: function () { return Vector2_1.Vector2; } }));
var Vector3_1 = __webpack_require__(12);
Object.defineProperty(exports, "Vector3", ({ enumerable: true, get: function () { return Vector3_1.Vector3; } }));
var Vector4_1 = __webpack_require__(13);
Object.defineProperty(exports, "Vector4", ({ enumerable: true, get: function () { return Vector4_1.Vector4; } }));
var Color_1 = __webpack_require__(14);
Object.defineProperty(exports, "Color", ({ enumerable: true, get: function () { return Color_1.Color; } }));


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalculateDirection = exports.CalculateIntersection = exports.CalculateVectorAngle = exports.CalculateVectorDistance = exports.CalculateAverageArrayValue = void 0;
const codes_1 = __webpack_require__(6);
const exports_1 = __webpack_require__(4);
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
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorCodes = exports.WarningCodes = void 0;
var WarningCodes;
(function (WarningCodes) {
    WarningCodes["THREAD_ALREADY_ACTIVE"] = "#FLUENTGL_WARNING_0001";
    WarningCodes["THREAD_ALREADY_INACTIVE"] = "#FLUENTGL_WARNING_0001";
    WarningCodes["WGPUR_HIGH_DPR_VALUE"] = "#FLUENTGL_WARNING_0003";
})(WarningCodes = exports.WarningCodes || (exports.WarningCodes = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["THREAD_INVALID_SIMULATION_UPDATE_RATE"] = "#FLUENTGL_ERROR_0001";
    ErrorCodes["THREAD_INVALID_DELTA_TIME"] = "#FLUENTGL_ERROR_0002";
    ErrorCodes["NUMBER_NO_VALID_INPUT_PROVIDED"] = "#FLUENTGL_ERROR_0003";
    ErrorCodes["WGPUR_CANVAS_NOT_CREATED"] = "#FLUENTGL_ERROR_0004";
    ErrorCodes["WGPUR_API_NOT_SUPPORTED"] = "#FLUENTGL_ERROR_0005";
    ErrorCodes["WGPUR_UNABLE_TO_GET_ADAPTER"] = "#FLUENTGL_ERROR_0006";
    ErrorCodes["WGPUR_INVALID_DPR_VALUE"] = "#FLUENTGL_ERROR_0007";
    ErrorCodes["WGPUR_DEVICE_UNCAPTURED_ERROR"] = "#FLUENTGL_ERROR_0008";
    ErrorCodes["WGPUR_DEVICE_LOST_ERROR"] = "#FLUENTGL_ERROR_0009";
    ErrorCodes["WGPUR_DEVICE_UNDEFINED"] = "#FLUENTGL_ERROR_0010";
    ErrorCodes["WGPUR_CONTEXT_UNDEFINED"] = "#FLUENTGL_ERROR_0011";
    ErrorCodes["RENDERABLE_VERTEX_BUFFER_UNDEFINED"] = "#FLUENTGL_ERROR_12";
    ErrorCodes["WGPURSCENE_RENDERER_NOT_INITIALIZED"] = "#FLUENTGL_ERROR_13";
    ErrorCodes["CAM_UNIFORM_BUFFER_UNDEFINED"] = "#FLUENTGL_ERROR_14";
    ErrorCodes["WGPUR_SCENE_NOT_PREPARED"] = "#FLUENTGL_ERROR_15";
    ErrorCodes["WGPUR_DEPTH_TEXTURE_VALIDATION_ERROR"] = "#FLUENTGL_ERROR_16";
    ErrorCodes["WGPUR_MSAA_TEXTURE_VALIDATION_ERROR"] = "#FLUENTGL_ERROR_17";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));


/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Debug = void 0;
const index_1 = __webpack_require__(3);
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
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
class Vector2 {
    x;
    y;
    static PPM = 30;
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


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
class Vector3 {
    x;
    y;
    z;
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
    static PPM = 30;
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


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector4 = void 0;
class Vector4 {
    x;
    y;
    z;
    w;
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
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
function clamp(value) {
    return value < 0 ? 0 : value > 1 ? 1 : value;
}
class Color {
    red;
    green;
    blue;
    alpha;
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
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CubeGeometry = exports.SimpleTriangle = void 0;
var SimpleTriangle_1 = __webpack_require__(16);
Object.defineProperty(exports, "SimpleTriangle", ({ enumerable: true, get: function () { return SimpleTriangle_1.SimpleTriangle; } }));
var CubeGeometry_1 = __webpack_require__(42);
Object.defineProperty(exports, "CubeGeometry", ({ enumerable: true, get: function () { return CubeGeometry_1.CubeGeometry; } }));


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimpleTriangle = void 0;
const codes_1 = __webpack_require__(6);
const exports_1 = __webpack_require__(17);
const SimpleTriangle_wgsl_1 = __importDefault(__webpack_require__(41));
const exports_2 = __webpack_require__(4);
class SimpleTriangle extends exports_1.Renderable {
    async Initialize(device, format, sampleCount) {
        this.shader = SimpleTriangle_wgsl_1.default;
        const msaa = Math.max(1, sampleCount | 0);
        const module = device.createShaderModule({ code: SimpleTriangle_wgsl_1.default, label: "SimpleTriangle.wgsl" });
        await device.pushErrorScope("validation");
        this.pipeline = device.createRenderPipeline({
            label: "SimpleTriangle-Pipeline",
            layout: "auto",
            vertex: {
                module,
                entryPoint: "vertexShaderMain",
                buffers: [{
                        arrayStride: 8,
                        attributes: [{ shaderLocation: 0, offset: 0, format: "float32x2" }],
                    }],
            },
            fragment: {
                module,
                entryPoint: "fragmentShaderMain",
                targets: [{ format }],
            },
            primitive: { topology: "triangle-list", cullMode: "none", frontFace: "ccw" },
            depthStencil: {
                format: "depth24plus",
                depthWriteEnabled: true,
                depthCompare: "less",
            },
            multisample: { count: msaa },
        });
        const err = await device.popErrorScope();
        if (err) {
            console.error("[SimpleTriangle] Pipeline validation error:", err);
            throw err;
        }
        const vertices = new Float32Array([
            0.0, 0.7,
            -0.7, -0.7,
            0.7, -0.7,
        ]);
        this.vertexBuffer = device.createBuffer({
            label: "SimpleTriangle-VertexBuffer",
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        });
        device.queue.writeBuffer(this.vertexBuffer, 0, vertices);
    }
    Render(pass) {
        pass.setPipeline(this.pipeline);
        pass.setVertexBuffer(0, this.vertexBuffer);
        pass.draw(3, 1, 0, 0);
    }
    Dispose() {
        if (!this.vertexBuffer)
            return exports_2.Debug.Error("Could not destroy vertex buffer because it is undefined", [
                `Renderable ID ${this.id}`
            ], codes_1.ErrorCodes.RENDERABLE_VERTEX_BUFFER_UNDEFINED);
        this.vertexBuffer.destroy();
    }
}
exports.SimpleTriangle = SimpleTriangle;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderable = exports.WebGPURenderer = void 0;
var WebGPURenderer_1 = __webpack_require__(18);
Object.defineProperty(exports, "WebGPURenderer", ({ enumerable: true, get: function () { return WebGPURenderer_1.WebGPURenderer; } }));
var Renderable_1 = __webpack_require__(40);
Object.defineProperty(exports, "Renderable", ({ enumerable: true, get: function () { return Renderable_1.Renderable; } }));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebGPURenderer = void 0;
const uuid_1 = __webpack_require__(19);
const codes_1 = __webpack_require__(6);
const exports_1 = __webpack_require__(4);
class WebGPURenderer {
    options;
    width = 0;
    height = 0;
    devicePixelRatio = window.devicePixelRatio || 1;
    id = (0, uuid_1.v4)();
    hasInitialized = false;
    constructor(options = {}) {
        this.options = options;
        this.canvas = document.createElement("canvas");
        this.canvas.width = options.canvasWidth ?? 800;
        this.canvas.height = options.canvasHeight ?? 600;
        this.canvas.setAttribute("fluexgl-renderer-type", "WebGPURenderer");
        this.canvas.setAttribute("fluexgl-renderer-id", this.id);
    }
    SetCanvasSizeRelativeToWindow(margin = 0, updateOnResize = false) {
        if (!this.canvas)
            return exports_1.Debug.Error("WebGPURenderer: Cannot set canvas size because canvas is not created.", [
                "Make sure that the WebGPURenderer instance is created properly."
            ], codes_1.ErrorCodes.WGPUR_CANVAS_NOT_CREATED);
        const self = this;
        this.SetSize(window.innerWidth - margin, window.innerHeight - margin);
        updateOnResize && window.addEventListener("resize", function () {
            self.SetSize(window.innerWidth - margin, window.innerHeight - margin);
        });
    }
    AppendCanvasToElement(element) {
        if (!this.canvas)
            return exports_1.Debug.Error("WebGPURenderer: Cannot append canvas to element because canvas is not created.", [
                "Make sure that the WebGPURenderer instance is created properly."
            ], codes_1.ErrorCodes.WGPUR_CANVAS_NOT_CREATED);
        element.appendChild(this.canvas);
    }
    SetDevicePixelRatio(ratio = 1) {
        if (ratio >= 2)
            exports_1.Debug.Warn("WebGPURenderer: Setting display pixel ratio to 2 or higher may cause performance issues on some devices.", [
                "Make sure that the device running FluexGL can handle high pixel ratios.",
                "Consider using a ratio between 1 and 2 for better performance."
            ], codes_1.WarningCodes.WGPUR_HIGH_DPR_VALUE);
        if (ratio >= 10)
            exports_1.Debug.Warn("Bruh this gpu gonna die bro 🥀", [
                "Setting display pixel ratio to 10 or higher is not recommended.",
                "This may cause severe performance issues or even crash the application.",
            ], codes_1.WarningCodes.WGPUR_HIGH_DPR_VALUE);
        if (ratio <= 0) {
            exports_1.Debug.Error("WebGPURenderer: Display pixel ratio must be greater than 0. Display pixel ratio will be set to 1.", [
                "Provided value: " + ratio
            ], codes_1.ErrorCodes.WGPUR_INVALID_DPR_VALUE);
            this.devicePixelRatio = window.devicePixelRatio || 1;
            return null;
        }
        this.devicePixelRatio = Math.max(1, Math.min(ratio || 1, 100));
        this.applySizeChanges();
        return this;
    }
    SetSize(width = 0, height = 0) {
        this.canvas.width = Math.max(1, Math.floor(width * this.devicePixelRatio));
        this.canvas.height = Math.max(1, Math.floor(height * this.devicePixelRatio));
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.createOrResizeTargets();
        return this;
    }
    async Initialize() {
        if (!navigator.gpu) {
            exports_1.Debug.Error("WebGPURenderer: WebGPU is not supported in this browser.", [
                "Make sure that you are using a compatible browser.",
                "Check https://caniuse.com/webgpu for more information."
            ], codes_1.ErrorCodes.WGPUR_API_NOT_SUPPORTED);
            return null;
        }
        exports_1.Debug.Log("WebGPURenderer: Attempting to request GPU adapter.", [
            "Options: " + JSON.stringify(this.options)
        ]);
        const gpuAdapter = await navigator.gpu.requestAdapter({
            powerPreference: this.options.powerPreference ?? "high-performance"
        });
        if (!gpuAdapter) {
            exports_1.Debug.Error("WebGPURenderer: Unable to get GPU Adapter.", [
                "Make sure that your system has a compatible GPU and that WebGPU is enabled in your browser."
            ], codes_1.ErrorCodes.WGPUR_UNABLE_TO_GET_ADAPTER);
            return null;
        }
        exports_1.Debug.Log("WebGPURenderer: Successfully obtained GPU adapter.", [
            "Architecture: " + (gpuAdapter.info.architecture ?? "Unknown"),
            "Device: " + (gpuAdapter.info.device ?? "Unknown"),
            "Vendor: " + (gpuAdapter.info.vendor ?? "Unknown"),
            "Renderer ID: " + this.id
        ]);
        this.gpuAdapter = gpuAdapter;
        const device = await this.gpuAdapter.requestDevice({
            requiredFeatures: this.options.requiredFeatures ?? [],
            requiredLimits: this.options.requiredLimits ?? {},
            label: "FluexGL-WebGPURenderer-Device-" + this.id
        });
        device.addEventListener("uncapturederror", function (event) {
            return exports_1.Debug.Error("WebGPURenderer: An uncaught GPU error occurred.", [
                "Error: " + event.error.message
            ], codes_1.ErrorCodes.WGPUR_DEVICE_UNCAPTURED_ERROR);
        });
        device.lost.then(function (info) {
            return exports_1.Debug.Error("WebGPURenderer: The GPU device was lost.", [
                "Reason: " + info.message
            ], codes_1.ErrorCodes.WGPUR_DEVICE_LOST_ERROR);
        });
        this.gpuDevice = device;
        this.context = this.canvas.getContext("webgpu");
        this.format = this.options.format ?? navigator.gpu.getPreferredCanvasFormat();
        this.configureContext();
        this.SetDevicePixelRatio(this.options.devicePixelRatio ?? (window.devicePixelRatio || 1));
        this.applySizeChanges();
        this.hasInitialized = true;
        return this;
    }
    BeginFrame() {
        const clear = this.options.clearColor ?? { r: 0, g: 0, b: 0, a: 1 };
        const currentTextureView = this.context.getCurrentTexture().createView();
        const encoder = this.gpuDevice.createCommandEncoder({
            label: "FluexGL-WebGPURenderer-CommandEncoder-" + this.id,
        });
        const msaa = Math.max(1, this.options.msaaSampleCount ?? 1);
        let colorAttachment;
        if (!this.depthTextureView) {
            this.createOrResizeTargets();
        }
        if (msaa > 1) {
            if (!this.msaaTextureView) {
                this.createOrResizeTargets();
            }
            colorAttachment = {
                view: this.msaaTextureView,
                resolveTarget: currentTextureView,
                loadOp: "clear",
                storeOp: "store",
                clearValue: clear,
            };
        }
        else {
            colorAttachment = {
                view: currentTextureView,
                loadOp: "clear",
                storeOp: "store",
                clearValue: clear,
            };
        }
        const pass = encoder.beginRenderPass({
            label: "FluexGL-WebGPURenderer-RenderPass-" + this.id,
            colorAttachments: [colorAttachment],
            depthStencilAttachment: {
                view: this.depthTextureView,
                depthLoadOp: "clear",
                depthStoreOp: "store",
                depthClearValue: 1.0,
            },
        });
        return { encoder, pass, colorView: currentTextureView };
    }
    EndFrame(frameInfo) {
        frameInfo.pass.end();
        this.gpuDevice.queue.submit([frameInfo.encoder.finish()]);
    }
    Dispose() {
        this.depthTexture && this.depthTexture.destroy();
        this.msaaTexture && this.msaaTexture.destroy();
    }
    Render(scene, camera) {
        if (!scene.hasPrepared)
            return exports_1.Debug.Error("Could not render because the renderable objects in the scene has not been prepared.", [
                "Make sure to call 'await <WebGPURendererScene>.Prepare()' before calling this method."
            ], codes_1.ErrorCodes.WGPUR_SCENE_NOT_PREPARED);
        if (!this.gpuDevice.queue)
            return;
        camera.WriteUniformsToQueue(this.gpuDevice.queue);
        const frame = this.BeginFrame();
        frame.pass.setBindGroup(0, camera.bindGroup);
        for (let i = 0; i < scene.rendererables.length; i++) {
            const renderable = scene.rendererables[i];
            const cameraViewProjectionCast = camera.viewProjection;
            renderable.Render(frame.pass, cameraViewProjectionCast);
        }
        this.EndFrame(frame);
    }
    applySizeChanges() {
        const width = this.options.canvasWidth ?? this.canvas.clientWidth ?? 800;
        const height = this.options.canvasHeight ?? this.canvas.clientHeight ?? 600;
        this.SetSize(width, height);
    }
    createOrResizeTargets() {
        this.depthTexture?.destroy();
        this.msaaTexture?.destroy();
        if (!this.gpuDevice)
            return;
        const width = Math.max(1, this.width | 0);
        const height = Math.max(1, this.height | 0);
        const msaa = this.getMsaa();
        this.depthTexture = this.gpuDevice.createTexture({
            size: { width, height },
            format: "depth24plus",
            sampleCount: msaa,
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
            label: `FluexGL-WebGPURenderer-DepthTexture-${this.id}`,
        });
        this.depthTextureView = this.depthTexture.createView();
        if (msaa > 1) {
            this.msaaTexture = this.gpuDevice.createTexture({
                size: { width, height },
                format: this.format,
                sampleCount: msaa,
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
                label: `FluexGL-WebGPURenderer-MSAATexture-${this.id}`,
            });
            this.msaaTextureView = this.msaaTexture.createView();
        }
        else {
            this.msaaTexture = undefined;
            this.msaaTextureView = undefined;
        }
    }
    configureContext() {
        if (!this.gpuDevice)
            return exports_1.Debug.Error("WebGPURenderer: Cannot configure context because GPU device is undefined.", [
                "At configuring context."
            ], codes_1.ErrorCodes.WGPUR_DEVICE_UNDEFINED);
        const configuration = {
            device: this.gpuDevice,
            format: this.format,
            alphaMode: this.options.alphaMode ?? "premultiplied",
            colorSpace: this.options.colorSpace ?? "srgb",
        };
        if (!this.context)
            return exports_1.Debug.Error("WebGPURenderer: Cannot configure context because GPU canvas context is undefined.", [
                "At configuring context."
            ], codes_1.ErrorCodes.WGPUR_CONTEXT_UNDEFINED);
        this.context.configure(configuration);
        return exports_1.Debug.Log("WebGPURenderer: Successfully configured GPU canvas context.", [
            "Configuration: " + JSON.stringify(configuration)
        ]);
    }
    getMsaa() {
        const n = this.options.msaaSampleCount ?? 1;
        return (n === 1 || n === 2 || n === 4 || n === 8) ? n : 1;
    }
}
exports.WebGPURenderer = WebGPURenderer;


/***/ }),
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
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderable = void 0;
const uuid_1 = __webpack_require__(19);
class Renderable {
    isRenderable = true;
    id = (0, uuid_1.v4)();
    shader = "";
}
exports.Renderable = Renderable;


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = "struct VertexShaderOutput {\r\n    @builtin(position) position: vec4f\r\n}\r\n\r\n@vertex fn vertexShaderMain(@location(0) position: vec2f) -> VertexShaderOutput {\r\n    \r\n    var output: VertexShaderOutput;\r\n\r\n    output.position = vec4f(position, 0, 1);\r\n    return output;\r\n}\r\n\r\n@fragment fn fragmentShaderMain() -> @location(0) vec4f {\r\n    return vec4f(0.9, 0.3, 0.2, 1);\r\n}";

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CubeGeometry = void 0;
const exports_1 = __webpack_require__(17);
const CubeGeometryShader_wgsl_1 = __importDefault(__webpack_require__(43));
const CubeGeometryIndices_1 = __importDefault(__webpack_require__(44));
const CubeGeometryVertices_1 = __importDefault(__webpack_require__(45));
const align4 = (n) => (n + 3) & ~3;
class CubeGeometry extends exports_1.Renderable {
    positionStride = 3;
    colorStride = 3;
    vertices = new Float32Array((0, CubeGeometryVertices_1.default)());
    indices = new Uint16Array((0, CubeGeometryIndices_1.default)());
    indexCount = this.indices.length;
    uniformBufferMatrixSize = (4 * 4) * 4;
    Initialize(device, format, sampleCount) {
        this.shader = CubeGeometryShader_wgsl_1.default;
        const module = device.createShaderModule({ code: CubeGeometryShader_wgsl_1.default });
        this.pipeline = device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module,
                entryPoint: "vertexShaderMain",
                buffers: [
                    {
                        arrayStride: (this.positionStride + this.colorStride) * 4,
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: 0,
                                format: "float32x3"
                            },
                            {
                                shaderLocation: 1,
                                offset: 12,
                                format: "float32x3"
                            }
                        ]
                    }
                ]
            },
            fragment: {
                module,
                entryPoint: "fragmentShaderMain",
                targets: [{ format }]
            },
            primitive: {
                topology: "triangle-list",
                cullMode: "back",
            },
            depthStencil: {
                format: "depth24plus",
                depthWriteEnabled: true,
                depthCompare: "less"
            },
            multisample: {
                count: sampleCount
            }
        });
        this.vertexBuffer = device.createBuffer({
            size: this.vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        });
        this.indexBuffer = device.createBuffer({
            size: align4(this.indices.byteLength),
            usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        });
        device.queue.writeBuffer(this.vertexBuffer, 0, this.vertices);
        device.queue.writeBuffer(this.indexBuffer, 0, this.indices);
        this.uniformBuffer = device.createBuffer({
            size: this.uniformBufferMatrixSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        this.bindGroup = device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer
                    }
                }
            ]
        });
    }
    UpdateUniforms(device, mvp) {
        device.queue.writeBuffer(this.uniformBuffer, 0, mvp);
    }
    Render(pass, viewProjectionMatrix) {
        pass.setPipeline(this.pipeline);
        pass.setBindGroup(0, this.bindGroup);
        pass.setVertexBuffer(0, this.vertexBuffer);
        pass.setIndexBuffer(this.indexBuffer, "uint16");
        pass.drawIndexed(this.indexCount, 1, 0, 0, 0);
    }
    Dispose() {
        this.vertexBuffer.destroy();
        this.indexBuffer.destroy();
        this.uniformBuffer.destroy();
    }
}
exports.CubeGeometry = CubeGeometry;


/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = "struct Uniforms {\r\n    modelViewProjectionMatrix: mat4x4<f32>\r\n}\r\n\r\n@group(0) @binding(0)\r\nvar<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexShaderInputData {\r\n    @location(0) position: vec3<f32>,\r\n    @location(1) color: vec3<f32>\r\n}\r\n\r\nstruct VertexShaderOutputData {\r\n    @builtin(position) position: vec4<f32>,\r\n    @location(0) color: vec3<f32>\r\n}\r\n\r\n@vertex\r\nfn vertexShaderMain(inputData: VertexShaderInputData) -> VertexShaderOutputData {\r\n\r\n    var outputData: VertexShaderOutputData;\r\n\r\n    outputData.position = uniforms.modelViewProjectionMatrix * vec4<f32>(inputData.position, 1.0);\r\n    outputData.color = inputData.color;\r\n\r\n    return outputData;\r\n}\r\n\r\n@fragment\r\nfn fragmentShaderMain(inputData: VertexShaderOutputData) -> @location(0) vec4<f32> {\r\n\r\n    return vec4<f32>(inputData.color, 1.0);\r\n}";

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function CubeGeometryIndices() {
    return [
        0, 1, 2, 2, 3, 0,
        1, 5, 6, 6, 2, 1,
        5, 4, 7, 7, 6, 5,
        4, 0, 3, 3, 7, 4,
        3, 2, 6, 6, 7, 3,
        4, 5, 1, 1, 0, 4,
    ];
}
exports["default"] = CubeGeometryIndices;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function CubeGeometryVertices() {
    return [
        -1, -1, 1, 1, 0, 0,
        1, -1, 1, 0, 1, 0,
        1, 1, 1, 0, 0, 1,
        -1, 1, 1, 1, 1, 1,
        -1, -1, -1, 1, 0, 0,
        1, -1, -1, 0, 1, 0,
        1, 1, -1, 0, 0, 1,
        -1, 1, -1, 1, 1, 1,
    ];
}
exports["default"] = CubeGeometryVertices;


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerspectiveCamera = exports.Camera = void 0;
var Camera_1 = __webpack_require__(47);
Object.defineProperty(exports, "Camera", ({ enumerable: true, get: function () { return Camera_1.Camera; } }));
var PerspectiveCamera_1 = __webpack_require__(59);
Object.defineProperty(exports, "PerspectiveCamera", ({ enumerable: true, get: function () { return PerspectiveCamera_1.PerspectiveCamera; } }));


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Camera = void 0;
const gl_matrix_1 = __webpack_require__(48);
const uuid_1 = __webpack_require__(19);
const exports_1 = __webpack_require__(4);
const codes_1 = __webpack_require__(6);
class Camera {
    id = (0, uuid_1.v4)();
    position = new exports_1.Vector3(0, 0, 0);
    target = new exports_1.Vector3(0, 0, 0);
    up = new exports_1.Vector3(0, 1, 0);
    aspect = 1;
    view = gl_matrix_1.mat4.create();
    projection = gl_matrix_1.mat4.create();
    viewProjection = gl_matrix_1.mat4.create();
    SetAspect(aspect) {
        this.aspect = Math.max(1e-6, aspect);
        this.updateMatrices();
    }
    SetPosition(x, y, z) {
        (x instanceof exports_1.Vector3)
            ? this.position = x
            : this.position.Set(x, y ?? this.position.x, z ?? this.position.y);
        return this.updateMatrices();
    }
    LookAt(x, y, z) {
        (x instanceof exports_1.Vector3)
            ? this.target = x
            : this.target.Set(x, y ?? this.target.x, z ?? this.target.y);
        return this.updateMatrices();
    }
    CreateUniformBuffer(device) {
        if (this.uniformBuffer)
            return this.uniformBuffer;
        this.uniformBuffer = device.createBuffer({
            size: 80,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: "CameraUniformBuffer-" + this.id
        });
        return this.uniformBuffer;
    }
    WriteUniformsToQueue(queue) {
        if (!this.uniformBuffer)
            return exports_1.Debug.Error("Could not write uniform buffer to queue, because the buffer is undefined.", [], codes_1.ErrorCodes.CAM_UNIFORM_BUFFER_UNDEFINED);
        const viewProjectionCast = this.viewProjection;
        const positionArrayBuffer = gl_matrix_1.vec3.fromValues(this.position.x, this.position.y, this.position.z), positionArrayBufferCast = positionArrayBuffer;
        queue.writeBuffer(this.uniformBuffer, 0, viewProjectionCast);
        queue.writeBuffer(this.uniformBuffer, 64, positionArrayBufferCast);
        return this;
    }
    EnsureBinding(device) {
        if (!this.bindGroupLayout)
            this.bindGroupLayout = device.createBindGroupLayout({
                label: "CameraBindGroupLayout",
                entries: [
                    {
                        binding: 0,
                        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                        buffer: {
                            type: "uniform"
                        }
                    }
                ]
            });
        if (!this.bindGroup) {
            const uniformBuffer = this.CreateUniformBuffer(device);
            this.bindGroup = device.createBindGroup({
                label: "CameraBindGroup",
                layout: this.bindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: uniformBuffer
                        }
                    }
                ]
            });
        }
        this.updateMatrices();
        return this.bindGroupLayout;
    }
    updateMatrices() {
        const position = gl_matrix_1.vec3.fromValues(this.position.x, this.position.y, this.position.z), target = gl_matrix_1.vec3.fromValues(this.target.x, this.target.y, this.target.z), up = gl_matrix_1.vec3.fromValues(this.up.x, this.up.y, this.up.z);
        gl_matrix_1.mat4.lookAt(this.view, position, target, up);
        this.updateProjection();
        gl_matrix_1.mat4.multiply(this.viewProjection, this.projection, this.view);
        return this;
    }
}
exports.Camera = Camera;


/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerspectiveCamera = void 0;
const gl_matrix_1 = __webpack_require__(48);
const Camera_1 = __webpack_require__(47);
class PerspectiveCamera extends Camera_1.Camera {
    fieldOfViewDegrees;
    aspect;
    near;
    far;
    constructor(fieldOfViewDegrees = 60, aspect = 1, near = 0.1, far = 1000) {
        super();
        this.fieldOfViewDegrees = fieldOfViewDegrees;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.updateMatrices();
    }
    SetFieldOfViewInDegrees(degrees) {
        this.fieldOfViewDegrees = Math.max(1, Math.min(179, degrees));
        return this.updateMatrices();
    }
    SetNear(near) {
        this.near = Math.max(1e-4, near);
        return this.updateMatrices();
    }
    SetFar(far) {
        this.far = Math.max(this.near + 1e-3, far);
        return this.updateMatrices();
    }
    updateProjection() {
        const verticalFieldOfView = gl_matrix_1.glMatrix.toRadian(this.fieldOfViewDegrees);
        gl_matrix_1.mat4.perspective(this.projection, verticalFieldOfView, this.aspect, this.near, this.far);
        return this;
    }
}
exports.PerspectiveCamera = PerspectiveCamera;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Thread = exports.WebGPURendererScene = void 0;
var WebGPURendererScene_1 = __webpack_require__(61);
Object.defineProperty(exports, "WebGPURendererScene", ({ enumerable: true, get: function () { return WebGPURendererScene_1.WebGPURendererScene; } }));
var Thread_1 = __webpack_require__(62);
Object.defineProperty(exports, "Thread", ({ enumerable: true, get: function () { return Thread_1.Thread; } }));


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebGPURendererScene = void 0;
const uuid_1 = __webpack_require__(19);
const exports_1 = __webpack_require__(4);
const codes_1 = __webpack_require__(6);
class WebGPURendererScene {
    renderer;
    rendererables = [];
    id = (0, uuid_1.v4)();
    hasPrepared = false;
    constructor(renderer) {
        this.renderer = renderer;
    }
    AddRenderable(renderable) {
        if (renderable.isRenderable) {
            this.rendererables.push(renderable);
        }
    }
    RemoveRenderable(renderable) {
        const index = this.rendererables.indexOf(renderable);
        if (index > -1) {
            this.rendererables.splice(index, 1);
        }
    }
    ClearRenderables() {
        this.rendererables = [];
    }
    async Prepare(camera) {
        if (!this.renderer.hasInitialized)
            return exports_1.Debug.Error("Could not prepare the scene because the renderer has not been initialized.", [
                "Make sure to call 'await [name of renderer].Initialize()' before preparing the scene."
            ], codes_1.ErrorCodes.WGPURSCENE_RENDERER_NOT_INITIALIZED);
        const startTimestamp = Date.now();
        const renderer = this.renderer, rendererables = this.rendererables, amountOfRenderables = rendererables.length;
        for (let i = 0; i < amountOfRenderables; i++) {
            const renderable = rendererables[i];
            await renderable.Initialize(renderer.gpuDevice, renderer.format, renderer.options.msaaSampleCount ?? 1);
        }
        camera.EnsureBinding(this.renderer.gpuDevice);
        const stopTimestamp = Date.now(), timeDifferenceInMs = stopTimestamp - startTimestamp;
        this.hasPrepared = true;
        return exports_1.Debug.Log("Succesfully prepared renderables.", [
            `Amount of renderables: ${amountOfRenderables}`,
            `Prepared in ${timeDifferenceInMs} milliseconds.`
        ]);
    }
}
exports.WebGPURendererScene = WebGPURendererScene;


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Thread = void 0;
const uuid_1 = __webpack_require__(19);
const console_1 = __webpack_require__(10);
const codes_1 = __webpack_require__(6);
class Thread {
    id = (0, uuid_1.v4)();
    simulationUpdateRate = 60;
    frameRate = 0;
    deltaTime = 0;
    currentRegisteredTimestamp = Date.now();
    lastRegisteredTimestamp = Date.now();
    startTimestamp = Date.now();
    events = {
        idle: [],
        start: [],
        stop: [],
        update: [],
    };
    isActive = false;
    animationFrame = 0;
    times = [];
    maxDeltaMs = 250;
    loop = (rafTime) => {
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
    constructor() { }
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


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [2,3,4], () => (__webpack_exec__(0)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);