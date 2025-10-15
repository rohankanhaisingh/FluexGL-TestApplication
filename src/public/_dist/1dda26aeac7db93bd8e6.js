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
const audio_1 = __webpack_require__(3);
(async function () {
    const canAccessAudioDevices = await (0, audio_1.EnsureAudioPermission)();
    if (!canAccessAudioDevices)
        return null;
    const audioDevice = await (0, audio_1.ResolveDefaultAudioOutputDevice)();
    if (!audioDevice)
        return;
    console.log(audioDevice);
})();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResolveDefaultAudioOutputDevice = exports.ResolveDefaultAudioInputDevice = exports.ResolveAudioInputDevices = exports.ResolveAudioOutputDevices = exports.EnsureAudioPermission = exports.Master = exports.Effector = exports.Channel = exports.AudioDevice = exports.RoomReverb = exports.HallReverb = exports.GenericReverb = exports.ConvolverReverb = exports.ChamberReverb = exports.StereoDelay = exports.PingPongDelay = exports.MonoDelay = exports.AdvancedDelay = exports.MultibandCompressor = exports.Compressor = exports.StereoPanner = exports.Saturation = exports.Limiter = exports.Filter = exports.Equalizer = exports.Distortion = exports.Chorus = exports.FluexGLAudio = void 0;
exports.FluexGLAudio = {
    name: "FluexGL Audio",
    author: "Rohan Kanhaisingh",
    version: "0.0.1",
    license: "MIT",
    repository: "https://github.com/rohankanhaisingh/FluexGL-Audio",
    options: {
        maxMasterChannels: 8,
        maxTotalChannels: 128,
        sampleRate: 44000,
        spatialization: "stereo",
        debugger: {
            showErrors: true,
            showInfo: true,
            showWarnings: true,
            breakOnError: true
        }
    }
};
var exports_1 = __webpack_require__(31);
Object.defineProperty(exports, "Chorus", ({ enumerable: true, get: function () { return exports_1.Chorus; } }));
Object.defineProperty(exports, "Distortion", ({ enumerable: true, get: function () { return exports_1.Distortion; } }));
Object.defineProperty(exports, "Equalizer", ({ enumerable: true, get: function () { return exports_1.Equalizer; } }));
Object.defineProperty(exports, "Filter", ({ enumerable: true, get: function () { return exports_1.Filter; } }));
Object.defineProperty(exports, "Limiter", ({ enumerable: true, get: function () { return exports_1.Limiter; } }));
Object.defineProperty(exports, "Saturation", ({ enumerable: true, get: function () { return exports_1.Saturation; } }));
Object.defineProperty(exports, "StereoPanner", ({ enumerable: true, get: function () { return exports_1.StereoPanner; } }));
Object.defineProperty(exports, "Compressor", ({ enumerable: true, get: function () { return exports_1.Compressor; } }));
Object.defineProperty(exports, "MultibandCompressor", ({ enumerable: true, get: function () { return exports_1.MultibandCompressor; } }));
Object.defineProperty(exports, "AdvancedDelay", ({ enumerable: true, get: function () { return exports_1.AdvancedDelay; } }));
Object.defineProperty(exports, "MonoDelay", ({ enumerable: true, get: function () { return exports_1.MonoDelay; } }));
Object.defineProperty(exports, "PingPongDelay", ({ enumerable: true, get: function () { return exports_1.PingPongDelay; } }));
Object.defineProperty(exports, "StereoDelay", ({ enumerable: true, get: function () { return exports_1.StereoDelay; } }));
Object.defineProperty(exports, "ChamberReverb", ({ enumerable: true, get: function () { return exports_1.ChamberReverb; } }));
Object.defineProperty(exports, "ConvolverReverb", ({ enumerable: true, get: function () { return exports_1.ConvolverReverb; } }));
Object.defineProperty(exports, "GenericReverb", ({ enumerable: true, get: function () { return exports_1.GenericReverb; } }));
Object.defineProperty(exports, "HallReverb", ({ enumerable: true, get: function () { return exports_1.HallReverb; } }));
Object.defineProperty(exports, "RoomReverb", ({ enumerable: true, get: function () { return exports_1.RoomReverb; } }));
var exports_2 = __webpack_require__(28);
Object.defineProperty(exports, "AudioDevice", ({ enumerable: true, get: function () { return exports_2.AudioDevice; } }));
Object.defineProperty(exports, "Channel", ({ enumerable: true, get: function () { return exports_2.Channel; } }));
Object.defineProperty(exports, "Effector", ({ enumerable: true, get: function () { return exports_2.Effector; } }));
Object.defineProperty(exports, "Master", ({ enumerable: true, get: function () { return exports_2.Master; } }));
var helpers_1 = __webpack_require__(4);
Object.defineProperty(exports, "EnsureAudioPermission", ({ enumerable: true, get: function () { return helpers_1.EnsureAudioPermission; } }));
Object.defineProperty(exports, "ResolveAudioOutputDevices", ({ enumerable: true, get: function () { return helpers_1.ResolveAudioOutputDevices; } }));
Object.defineProperty(exports, "ResolveAudioInputDevices", ({ enumerable: true, get: function () { return helpers_1.ResolveAudioInputDevices; } }));
Object.defineProperty(exports, "ResolveDefaultAudioInputDevice", ({ enumerable: true, get: function () { return helpers_1.ResolveDefaultAudioInputDevice; } }));
Object.defineProperty(exports, "ResolveDefaultAudioOutputDevice", ({ enumerable: true, get: function () { return helpers_1.ResolveDefaultAudioOutputDevice; } }));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResolveDefaultAudioInputDevice = exports.ResolveDefaultAudioOutputDevice = exports.ResolveAudioInputDevices = exports.ResolveAudioOutputDevices = exports.EnsureAudioPermission = void 0;
const AudioDevice_1 = __webpack_require__(5);
const debugger_1 = __webpack_require__(50);
const error_codes_1 = __webpack_require__(51);
async function EnsureAudioPermission() {
    let canEnumerateDevices = true;
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
    }
    catch (err) {
        canEnumerateDevices = false;
    }
    if (!canEnumerateDevices)
        debugger_1.Debug.Error("Permission to access media devices has not been granted.", [
            "Make sure the user has granted FluentGL permission to access media devices."
        ], error_codes_1.ErrorCodes.NO_CONTEXT_PERMISSION);
    return canEnumerateDevices;
}
exports.EnsureAudioPermission = EnsureAudioPermission;
async function ResolveAudioOutputDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevices = [];
    for (let device of devices)
        device.kind === "audiooutput" && audioDevices.push(new AudioDevice_1.AudioDevice(device));
    return audioDevices;
}
exports.ResolveAudioOutputDevices = ResolveAudioOutputDevices;
async function ResolveAudioInputDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevices = [];
    for (let device of devices)
        device.kind === "audioinput" && audioDevices.push(new AudioDevice_1.AudioDevice(device));
    return audioDevices;
}
exports.ResolveAudioInputDevices = ResolveAudioInputDevices;
async function ResolveDefaultAudioOutputDevice() {
    const audioDeviceInfos = [];
    const devices = await navigator.mediaDevices.enumerateDevices();
    for (let device of devices)
        (device.kind === "audiooutput" && device.deviceId == "default")
            && audioDeviceInfos.push(device);
    devices.length === 0 && debugger_1.Debug.Warn("No default audio device found.", [], error_codes_1.WarningCodes.NO_DEFAULT_AUDIO_DEVICE_FOUND);
    return devices.length === 0 ? null : new AudioDevice_1.AudioDevice(audioDeviceInfos[0]);
}
exports.ResolveDefaultAudioOutputDevice = ResolveDefaultAudioOutputDevice;
async function ResolveDefaultAudioInputDevice() {
    const audioDeviceInfos = [];
    const devices = await navigator.mediaDevices.enumerateDevices();
    for (let device of devices)
        (device.kind === "audioinput" && device.deviceId == "default")
            && audioDeviceInfos.push(device);
    devices.length === 0 && debugger_1.Debug.Warn("No default audio device found.", [], error_codes_1.WarningCodes.NO_DEFAULT_AUDIO_DEVICE_FOUND);
    return devices.length === 0 ? null : new AudioDevice_1.AudioDevice(audioDeviceInfos[0]);
}
exports.ResolveDefaultAudioInputDevice = ResolveDefaultAudioInputDevice;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioDevice = void 0;
const uuid_1 = __webpack_require__(6);
const Master_1 = __webpack_require__(27);
class AudioDevice {
    deviceInfo;
    id = (0, uuid_1.v4)();
    timestamp = Date.now();
    masterChannel = new Master_1.Master();
    constructor(deviceInfo) {
        this.deviceInfo = deviceInfo;
    }
    SetMasterChannel(channel) {
    }
}
exports.AudioDevice = AudioDevice;


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
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
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Master = void 0;
const uuid_1 = __webpack_require__(6);
class Master {
    id = (0, uuid_1.v4)();
    channels = [];
}
exports.Master = Master;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Master = exports.Effector = exports.Channel = exports.AudioDevice = void 0;
var AudioDevice_1 = __webpack_require__(5);
Object.defineProperty(exports, "AudioDevice", ({ enumerable: true, get: function () { return AudioDevice_1.AudioDevice; } }));
var Channel_1 = __webpack_require__(29);
Object.defineProperty(exports, "Channel", ({ enumerable: true, get: function () { return Channel_1.Channel; } }));
var Effector_1 = __webpack_require__(30);
Object.defineProperty(exports, "Effector", ({ enumerable: true, get: function () { return Effector_1.Effector; } }));
var Master_1 = __webpack_require__(27);
Object.defineProperty(exports, "Master", ({ enumerable: true, get: function () { return Master_1.Master; } }));


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
const uuid_1 = __webpack_require__(6);
class Channel {
    id = (0, uuid_1.v4)();
    effects = [];
}
exports.Channel = Channel;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Effector = void 0;
const uuid_1 = __webpack_require__(6);
class Effector {
    id = (0, uuid_1.v4)();
}
exports.Effector = Effector;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomReverb = exports.HallReverb = exports.GenericReverb = exports.ConvolverReverb = exports.ChamberReverb = exports.StereoDelay = exports.PingPongDelay = exports.MonoDelay = exports.AdvancedDelay = exports.MultibandCompressor = exports.Compressor = exports.StereoPanner = exports.Saturation = exports.Limiter = exports.Filter = exports.Equalizer = exports.Distortion = exports.Chorus = void 0;
var Chorus_1 = __webpack_require__(32);
Object.defineProperty(exports, "Chorus", ({ enumerable: true, get: function () { return Chorus_1.Chorus; } }));
var Distortion_1 = __webpack_require__(33);
Object.defineProperty(exports, "Distortion", ({ enumerable: true, get: function () { return Distortion_1.Distortion; } }));
var Equalizer_1 = __webpack_require__(34);
Object.defineProperty(exports, "Equalizer", ({ enumerable: true, get: function () { return Equalizer_1.Equalizer; } }));
var Filter_1 = __webpack_require__(35);
Object.defineProperty(exports, "Filter", ({ enumerable: true, get: function () { return Filter_1.Filter; } }));
var Limiter_1 = __webpack_require__(36);
Object.defineProperty(exports, "Limiter", ({ enumerable: true, get: function () { return Limiter_1.Limiter; } }));
var Saturation_1 = __webpack_require__(37);
Object.defineProperty(exports, "Saturation", ({ enumerable: true, get: function () { return Saturation_1.Saturation; } }));
var StereoPanner_1 = __webpack_require__(38);
Object.defineProperty(exports, "StereoPanner", ({ enumerable: true, get: function () { return StereoPanner_1.StereoPanner; } }));
var Compressor_1 = __webpack_require__(39);
Object.defineProperty(exports, "Compressor", ({ enumerable: true, get: function () { return Compressor_1.Compressor; } }));
var MultibandCompressor_1 = __webpack_require__(40);
Object.defineProperty(exports, "MultibandCompressor", ({ enumerable: true, get: function () { return MultibandCompressor_1.MultibandCompressor; } }));
var AdvancedDelay_1 = __webpack_require__(41);
Object.defineProperty(exports, "AdvancedDelay", ({ enumerable: true, get: function () { return AdvancedDelay_1.AdvancedDelay; } }));
var MonoDelay_1 = __webpack_require__(42);
Object.defineProperty(exports, "MonoDelay", ({ enumerable: true, get: function () { return MonoDelay_1.MonoDelay; } }));
var PingPongDelay_1 = __webpack_require__(43);
Object.defineProperty(exports, "PingPongDelay", ({ enumerable: true, get: function () { return PingPongDelay_1.PingPongDelay; } }));
var StereoDelay_1 = __webpack_require__(44);
Object.defineProperty(exports, "StereoDelay", ({ enumerable: true, get: function () { return StereoDelay_1.StereoDelay; } }));
var ChamberReverb_1 = __webpack_require__(45);
Object.defineProperty(exports, "ChamberReverb", ({ enumerable: true, get: function () { return ChamberReverb_1.ChamberReverb; } }));
var ConvolverReverb_1 = __webpack_require__(46);
Object.defineProperty(exports, "ConvolverReverb", ({ enumerable: true, get: function () { return ConvolverReverb_1.ConvolverReverb; } }));
var GenericReverb_1 = __webpack_require__(47);
Object.defineProperty(exports, "GenericReverb", ({ enumerable: true, get: function () { return GenericReverb_1.GenericReverb; } }));
var HallReverb_1 = __webpack_require__(48);
Object.defineProperty(exports, "HallReverb", ({ enumerable: true, get: function () { return HallReverb_1.HallReverb; } }));
var RoomReverb_1 = __webpack_require__(49);
Object.defineProperty(exports, "RoomReverb", ({ enumerable: true, get: function () { return RoomReverb_1.RoomReverb; } }));


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chorus = void 0;
class Chorus {
}
exports.Chorus = Chorus;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Distortion = void 0;
class Distortion {
}
exports.Distortion = Distortion;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Equalizer = void 0;
class Equalizer {
}
exports.Equalizer = Equalizer;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Filter = void 0;
class Filter {
}
exports.Filter = Filter;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Limiter = void 0;
class Limiter {
}
exports.Limiter = Limiter;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Saturation = void 0;
class Saturation {
}
exports.Saturation = Saturation;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StereoPanner = void 0;
class StereoPanner {
}
exports.StereoPanner = StereoPanner;


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Compressor = void 0;
class Compressor {
}
exports.Compressor = Compressor;


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultibandCompressor = void 0;
class MultibandCompressor {
}
exports.MultibandCompressor = MultibandCompressor;


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdvancedDelay = void 0;
class AdvancedDelay {
}
exports.AdvancedDelay = AdvancedDelay;


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonoDelay = void 0;
class MonoDelay {
}
exports.MonoDelay = MonoDelay;


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PingPongDelay = void 0;
class PingPongDelay {
}
exports.PingPongDelay = PingPongDelay;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StereoDelay = void 0;
class StereoDelay {
}
exports.StereoDelay = StereoDelay;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChamberReverb = void 0;
class ChamberReverb {
}
exports.ChamberReverb = ChamberReverb;


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConvolverReverb = void 0;
class ConvolverReverb {
}
exports.ConvolverReverb = ConvolverReverb;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericReverb = void 0;
class GenericReverb {
}
exports.GenericReverb = GenericReverb;


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HallReverb = void 0;
class HallReverb {
}
exports.HallReverb = HallReverb;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomReverb = void 0;
class RoomReverb {
}
exports.RoomReverb = RoomReverb;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Debug = void 0;
const index_1 = __webpack_require__(3);
var Debug;
(function (Debug) {
    function Log(message, additionalDetails) {
        if (!index_1.FluexGLAudio.options.debugger.showInfo)
            return;
        let outputString = `%c[INFO]: %c${message} %c`;
        additionalDetails && additionalDetails.forEach(function (detail) {
            outputString += `\n\u0009  > ${detail}`;
        });
        return console.log(outputString, "color: white;", "color: gray", "color: gray");
    }
    Debug.Log = Log;
    function Warn(message, additionalDetails, warningCode) {
        if (!index_1.FluexGLAudio.options.debugger.showWarnings)
            return;
        let outputString = `%c(${warningCode ? warningCode : "Unknown".toUpperCase()}) %c[WARNING]: %c${message} %c`;
        (additionalDetails && additionalDetails !== null) && additionalDetails.forEach(function (detail) {
            outputString += `\n\u0009  > ${detail}`;
        });
        return console.log(outputString, "color: gray", "color: yellow;", "color: white", "color: white; font-style: italic;");
    }
    Debug.Warn = Warn;
    function Error(message, additionalDetails, errorCode) {
        if (!index_1.FluexGLAudio.options.debugger.showErrors)
            return;
        let outputString = `%c(${errorCode ? errorCode : "Unknown".toUpperCase()}) %c[ERROR]: %c${message} %c`;
        (additionalDetails && additionalDetails !== null) && additionalDetails.forEach(function (detail) {
            outputString += `\n\u0009  > ${detail}`;
        });
        console.log(outputString, "color: red", "color: red;", "color: white", "color: white; font-style: italic;");
        if (index_1.FluexGLAudio.options.debugger.breakOnError) {
            for (let char of message)
                outputString = outputString.replace("%c", "");
            throw new window.Error(outputString);
        }
    }
    Debug.Error = Error;
})(Debug = exports.Debug || (exports.Debug = {}));


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuccessCodes = exports.WarningCodes = exports.ErrorCodes = void 0;
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["NO_CONTEXT_PERMISSION"] = "FLUEXGL@AUDIO_ERROR_0001";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var WarningCodes;
(function (WarningCodes) {
    WarningCodes["NO_DEFAULT_AUDIO_DEVICE_FOUND"] = "FLUEXGL@AUDIO_WARNING_0001";
})(WarningCodes = exports.WarningCodes || (exports.WarningCodes = {}));
var SuccessCodes;
(function (SuccessCodes) {
})(SuccessCodes = exports.SuccessCodes || (exports.SuccessCodes = {}));


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [2], () => (__webpack_exec__(0)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);