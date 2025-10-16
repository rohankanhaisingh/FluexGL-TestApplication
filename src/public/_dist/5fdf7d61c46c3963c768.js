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
    const masterChannel = audioDevice.GetMasterChannel();
    const channel = new audio_1.Channel();
    channel.SetLabel("BackgroundMusic");
    masterChannel.AttachChannel(channel);
    const audioSource = await (0, audio_1.LoadAudioSource)("/assets/data/bruh.mp3");
    console.log(audioSource);
})();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SUPPORTED_FILE_TYPES = exports.LoadAudioSource = exports.ResolveDefaultAudioOutputDevice = exports.ResolveDefaultAudioInputDevice = exports.ResolveAudioInputDevices = exports.ResolveAudioOutputDevices = exports.EnsureAudioPermission = exports.Master = exports.Effector = exports.Channel = exports.AudioDevice = exports.RoomReverb = exports.HallReverb = exports.GenericReverb = exports.ConvolverReverb = exports.ChamberReverb = exports.StereoDelay = exports.PingPongDelay = exports.MonoDelay = exports.AdvancedDelay = exports.MultibandCompressor = exports.Compressor = exports.StereoPanner = exports.Saturation = exports.Limiter = exports.Filter = exports.Equalizer = exports.Distortion = exports.Chorus = exports.FluexGLAudio = void 0;
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
var exports_1 = __webpack_require__(4);
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
var exports_2 = __webpack_require__(23);
Object.defineProperty(exports, "AudioDevice", ({ enumerable: true, get: function () { return exports_2.AudioDevice; } }));
Object.defineProperty(exports, "Channel", ({ enumerable: true, get: function () { return exports_2.Channel; } }));
Object.defineProperty(exports, "Effector", ({ enumerable: true, get: function () { return exports_2.Effector; } }));
Object.defineProperty(exports, "Master", ({ enumerable: true, get: function () { return exports_2.Master; } }));
var helpers_1 = __webpack_require__(49);
Object.defineProperty(exports, "EnsureAudioPermission", ({ enumerable: true, get: function () { return helpers_1.EnsureAudioPermission; } }));
Object.defineProperty(exports, "ResolveAudioOutputDevices", ({ enumerable: true, get: function () { return helpers_1.ResolveAudioOutputDevices; } }));
Object.defineProperty(exports, "ResolveAudioInputDevices", ({ enumerable: true, get: function () { return helpers_1.ResolveAudioInputDevices; } }));
Object.defineProperty(exports, "ResolveDefaultAudioInputDevice", ({ enumerable: true, get: function () { return helpers_1.ResolveDefaultAudioInputDevice; } }));
Object.defineProperty(exports, "ResolveDefaultAudioOutputDevice", ({ enumerable: true, get: function () { return helpers_1.ResolveDefaultAudioOutputDevice; } }));
Object.defineProperty(exports, "LoadAudioSource", ({ enumerable: true, get: function () { return helpers_1.LoadAudioSource; } }));
var constants_1 = __webpack_require__(56);
Object.defineProperty(exports, "SUPPORTED_FILE_TYPES", ({ enumerable: true, get: function () { return constants_1.SUPPORTED_FILE_TYPES; } }));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomReverb = exports.HallReverb = exports.GenericReverb = exports.ConvolverReverb = exports.ChamberReverb = exports.StereoDelay = exports.PingPongDelay = exports.MonoDelay = exports.AdvancedDelay = exports.MultibandCompressor = exports.Compressor = exports.StereoPanner = exports.Saturation = exports.Limiter = exports.Filter = exports.Equalizer = exports.Distortion = exports.Chorus = void 0;
var Chorus_1 = __webpack_require__(5);
Object.defineProperty(exports, "Chorus", ({ enumerable: true, get: function () { return Chorus_1.Chorus; } }));
var Distortion_1 = __webpack_require__(6);
Object.defineProperty(exports, "Distortion", ({ enumerable: true, get: function () { return Distortion_1.Distortion; } }));
var Equalizer_1 = __webpack_require__(7);
Object.defineProperty(exports, "Equalizer", ({ enumerable: true, get: function () { return Equalizer_1.Equalizer; } }));
var Filter_1 = __webpack_require__(8);
Object.defineProperty(exports, "Filter", ({ enumerable: true, get: function () { return Filter_1.Filter; } }));
var Limiter_1 = __webpack_require__(9);
Object.defineProperty(exports, "Limiter", ({ enumerable: true, get: function () { return Limiter_1.Limiter; } }));
var Saturation_1 = __webpack_require__(10);
Object.defineProperty(exports, "Saturation", ({ enumerable: true, get: function () { return Saturation_1.Saturation; } }));
var StereoPanner_1 = __webpack_require__(11);
Object.defineProperty(exports, "StereoPanner", ({ enumerable: true, get: function () { return StereoPanner_1.StereoPanner; } }));
var Compressor_1 = __webpack_require__(12);
Object.defineProperty(exports, "Compressor", ({ enumerable: true, get: function () { return Compressor_1.Compressor; } }));
var MultibandCompressor_1 = __webpack_require__(13);
Object.defineProperty(exports, "MultibandCompressor", ({ enumerable: true, get: function () { return MultibandCompressor_1.MultibandCompressor; } }));
var AdvancedDelay_1 = __webpack_require__(14);
Object.defineProperty(exports, "AdvancedDelay", ({ enumerable: true, get: function () { return AdvancedDelay_1.AdvancedDelay; } }));
var MonoDelay_1 = __webpack_require__(15);
Object.defineProperty(exports, "MonoDelay", ({ enumerable: true, get: function () { return MonoDelay_1.MonoDelay; } }));
var PingPongDelay_1 = __webpack_require__(16);
Object.defineProperty(exports, "PingPongDelay", ({ enumerable: true, get: function () { return PingPongDelay_1.PingPongDelay; } }));
var StereoDelay_1 = __webpack_require__(17);
Object.defineProperty(exports, "StereoDelay", ({ enumerable: true, get: function () { return StereoDelay_1.StereoDelay; } }));
var ChamberReverb_1 = __webpack_require__(18);
Object.defineProperty(exports, "ChamberReverb", ({ enumerable: true, get: function () { return ChamberReverb_1.ChamberReverb; } }));
var ConvolverReverb_1 = __webpack_require__(19);
Object.defineProperty(exports, "ConvolverReverb", ({ enumerable: true, get: function () { return ConvolverReverb_1.ConvolverReverb; } }));
var GenericReverb_1 = __webpack_require__(20);
Object.defineProperty(exports, "GenericReverb", ({ enumerable: true, get: function () { return GenericReverb_1.GenericReverb; } }));
var HallReverb_1 = __webpack_require__(21);
Object.defineProperty(exports, "HallReverb", ({ enumerable: true, get: function () { return HallReverb_1.HallReverb; } }));
var RoomReverb_1 = __webpack_require__(22);
Object.defineProperty(exports, "RoomReverb", ({ enumerable: true, get: function () { return RoomReverb_1.RoomReverb; } }));


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chorus = void 0;
class Chorus {
}
exports.Chorus = Chorus;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Distortion = void 0;
class Distortion {
}
exports.Distortion = Distortion;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Equalizer = void 0;
class Equalizer {
}
exports.Equalizer = Equalizer;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Filter = void 0;
class Filter {
}
exports.Filter = Filter;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Limiter = void 0;
class Limiter {
}
exports.Limiter = Limiter;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Saturation = void 0;
class Saturation {
}
exports.Saturation = Saturation;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StereoPanner = void 0;
class StereoPanner {
}
exports.StereoPanner = StereoPanner;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Compressor = void 0;
class Compressor {
}
exports.Compressor = Compressor;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultibandCompressor = void 0;
class MultibandCompressor {
}
exports.MultibandCompressor = MultibandCompressor;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdvancedDelay = void 0;
class AdvancedDelay {
}
exports.AdvancedDelay = AdvancedDelay;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonoDelay = void 0;
class MonoDelay {
}
exports.MonoDelay = MonoDelay;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PingPongDelay = void 0;
class PingPongDelay {
}
exports.PingPongDelay = PingPongDelay;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StereoDelay = void 0;
class StereoDelay {
}
exports.StereoDelay = StereoDelay;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChamberReverb = void 0;
class ChamberReverb {
}
exports.ChamberReverb = ChamberReverb;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConvolverReverb = void 0;
class ConvolverReverb {
}
exports.ConvolverReverb = ConvolverReverb;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericReverb = void 0;
class GenericReverb {
}
exports.GenericReverb = GenericReverb;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HallReverb = void 0;
class HallReverb {
}
exports.HallReverb = HallReverb;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomReverb = void 0;
class RoomReverb {
}
exports.RoomReverb = RoomReverb;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Master = exports.Effector = exports.Channel = exports.AudioDevice = void 0;
var AudioDevice_1 = __webpack_require__(24);
Object.defineProperty(exports, "AudioDevice", ({ enumerable: true, get: function () { return AudioDevice_1.AudioDevice; } }));
var Channel_1 = __webpack_require__(47);
Object.defineProperty(exports, "Channel", ({ enumerable: true, get: function () { return Channel_1.Channel; } }));
var Effector_1 = __webpack_require__(48);
Object.defineProperty(exports, "Effector", ({ enumerable: true, get: function () { return Effector_1.Effector; } }));
var Master_1 = __webpack_require__(46);
Object.defineProperty(exports, "Master", ({ enumerable: true, get: function () { return Master_1.Master; } }));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioDevice = void 0;
const uuid_1 = __webpack_require__(25);
const Master_1 = __webpack_require__(46);
const console_codes_1 = __webpack_require__(51);
const debugger_1 = __webpack_require__(50);
class AudioDevice {
    deviceInfo;
    id = (0, uuid_1.v4)();
    timestamp = Date.now();
    masterChannel = new Master_1.Master();
    constructor(deviceInfo) {
        this.deviceInfo = deviceInfo;
    }
    GetMasterChannel() {
        return this.masterChannel;
    }
    SetMasterChannel(channel) {
        if (channel.id === this.masterChannel.id)
            return debugger_1.Debug.Error("The provided master channel is the same as the current channel.", [
                "Provide this method with a different master channel.",
                `Received master channel ID ${channel.id}.`
            ], console_codes_1.ErrorCodes.SAME_MASTER_CHANNEL);
        this.masterChannel = channel;
    }
}
exports.AudioDevice = AudioDevice;


/***/ }),
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
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Master = void 0;
const uuid_1 = __webpack_require__(25);
const debugger_1 = __webpack_require__(50);
class Master {
    id = (0, uuid_1.v4)();
    channels = [];
    context = new AudioContext();
    AttachChannel(channel) {
        if (this.channels.includes(channel))
            return debugger_1.Debug.Error("Could not attach the channel because it is already part of this master channel.", [
                "Call .DetachChannel([channel Channel]) before attaching the channel."
            ]);
        this.channels.push(channel);
        return;
    }
    DetachChannel(channel) {
        if (!this.channels.includes(channel))
            return debugger_1.Debug.Error("Could not detach the channel because it is not part of this master channel.", [
                "Call .AttachChannel([channel Channel]) before detaching the channel."
            ]);
        const self = this;
        this.channels.forEach(function (_channel, index) {
            if (channel.id === _channel.id)
                return self.channels.splice(index, 1);
        });
    }
}
exports.Master = Master;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
const uuid_1 = __webpack_require__(25);
class Channel {
    options;
    id = (0, uuid_1.v4)();
    effects = [];
    context = new AudioContext();
    label;
    constructor(options = {
        maxAudioNodes: 8,
        maxEffects: 8
    }) {
        this.options = options;
        this.label = options.label ?? null;
    }
    SetLabel(label) {
        this.options.label = label;
        this.label = label;
    }
    ClearLabel() {
        this.options.label = "";
        this.label = null;
    }
}
exports.Channel = Channel;


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Effector = void 0;
const uuid_1 = __webpack_require__(25);
class Effector {
    id = (0, uuid_1.v4)();
}
exports.Effector = Effector;


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadAudioSource = exports.ResolveDefaultAudioInputDevice = exports.ResolveDefaultAudioOutputDevice = exports.ResolveAudioInputDevices = exports.ResolveAudioOutputDevices = exports.EnsureAudioPermission = void 0;
const mime_1 = __importDefault(__webpack_require__(52));
const AudioDevice_1 = __webpack_require__(24);
const debugger_1 = __webpack_require__(50);
const console_codes_1 = __webpack_require__(51);
const constants_1 = __webpack_require__(56);
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
        ], console_codes_1.ErrorCodes.NO_CONTEXT_PERMISSION);
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
    devices.length === 0 && debugger_1.Debug.Warn("No default audio device found.", [], console_codes_1.WarningCodes.NO_DEFAULT_AUDIO_DEVICE_FOUND);
    return devices.length === 0 ? null : new AudioDevice_1.AudioDevice(audioDeviceInfos[0]);
}
exports.ResolveDefaultAudioOutputDevice = ResolveDefaultAudioOutputDevice;
async function ResolveDefaultAudioInputDevice() {
    const audioDeviceInfos = [];
    const devices = await navigator.mediaDevices.enumerateDevices();
    for (let device of devices)
        (device.kind === "audioinput" && device.deviceId == "default")
            && audioDeviceInfos.push(device);
    devices.length === 0 && debugger_1.Debug.Warn("No default audio device found.", [], console_codes_1.WarningCodes.NO_DEFAULT_AUDIO_DEVICE_FOUND);
    return devices.length === 0 ? null : new AudioDevice_1.AudioDevice(audioDeviceInfos[0]);
}
exports.ResolveDefaultAudioInputDevice = ResolveDefaultAudioInputDevice;
async function LoadAudioSource(path, options = { allowForeignFileTypes: false }) {
    const extension = mime_1.default.getType(path);
    if (!extension && !options.allowForeignFileTypes) {
        debugger_1.Debug.Error("The file type of the specified file could not be identified.", [
            `Set allowForeignFileTypes to true in the properties to allow foreign or unknown file types.`
        ], console_codes_1.ErrorCodes.NO_FILE_TYPE_FOUND);
        return null;
    }
    if (!constants_1.SUPPORTED_FILE_TYPES.includes(extension))
        debugger_1.Debug.Warn("The file type of the specified file is unknown and possibly unknown, but will be used anyways.");
    const file = await fetch(path, { method: "get" });
    if (file.status !== 200) {
        debugger_1.Debug.Error("The specified file could not be loaded.", [
            `Received status code: ${file.status}.`
        ], console_codes_1.ErrorCodes.PATH_TO_FILE_NOT_FOUND);
        return null;
    }
    return await file.arrayBuffer();
}
exports.LoadAudioSource = LoadAudioSource;


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
    ErrorCodes["NO_FILE_TYPE_FOUND"] = "FLUEXGL@AUDIO_ERROR_0002";
    ErrorCodes["PATH_TO_FILE_NOT_FOUND"] = "FLUEXGL@AUDIO_ERROR_0003";
    ErrorCodes["SAME_MASTER_CHANNEL"] = "FLUEXGL@AUDIO_ERROR_0004";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var WarningCodes;
(function (WarningCodes) {
    WarningCodes["NO_DEFAULT_AUDIO_DEVICE_FOUND"] = "FLUEXGL@AUDIO_WARNING_0001";
})(WarningCodes = exports.WarningCodes || (exports.WarningCodes = {}));
var SuccessCodes;
(function (SuccessCodes) {
})(SuccessCodes = exports.SuccessCodes || (exports.SuccessCodes = {}));


/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SUPPORTED_FILE_TYPES = void 0;
exports.SUPPORTED_FILE_TYPES = [
    "audio/aac",
    "audio/mp3",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/wave",
    "audio/webm"
];


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [2], () => (__webpack_exec__(0)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);