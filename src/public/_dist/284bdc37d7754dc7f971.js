"use strict";
(self["webpackChunkfluex_gl_test_application"] = self["webpackChunkfluex_gl_test_application"] || []).push([[0],{

/***/ 0:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(1);
__webpack_require__(362);


/***/ }),

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SUPPORTED_FILE_TYPES = exports.LoadAudioSource = exports.ResolveDefaultAudioOutputDevice = exports.ResolveDefaultAudioInputDevice = exports.ResolveAudioInputDevices = exports.ResolveAudioOutputDevices = exports.EnsureAudioPermission = exports.AudioClip = exports.Master = exports.Effector = exports.Channel = exports.AudioDevice = exports.RoomReverb = exports.HallReverb = exports.GenericReverb = exports.ConvolverReverb = exports.ChamberReverb = exports.StereoDelay = exports.PingPongDelay = exports.MonoDelay = exports.AdvancedDelay = exports.MultibandCompressor = exports.Compressor = exports.StereoPanner = exports.Saturation = exports.Limiter = exports.Filter = exports.Equalizer = exports.Distortion = exports.Chorus = exports.FluexGLAudio = void 0;
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
Object.defineProperty(exports, "AudioClip", ({ enumerable: true, get: function () { return exports_2.AudioClip; } }));
var helpers_1 = __webpack_require__(356);
Object.defineProperty(exports, "EnsureAudioPermission", ({ enumerable: true, get: function () { return helpers_1.EnsureAudioPermission; } }));
Object.defineProperty(exports, "ResolveAudioOutputDevices", ({ enumerable: true, get: function () { return helpers_1.ResolveAudioOutputDevices; } }));
Object.defineProperty(exports, "ResolveAudioInputDevices", ({ enumerable: true, get: function () { return helpers_1.ResolveAudioInputDevices; } }));
Object.defineProperty(exports, "ResolveDefaultAudioInputDevice", ({ enumerable: true, get: function () { return helpers_1.ResolveDefaultAudioInputDevice; } }));
Object.defineProperty(exports, "ResolveDefaultAudioOutputDevice", ({ enumerable: true, get: function () { return helpers_1.ResolveDefaultAudioOutputDevice; } }));
Object.defineProperty(exports, "LoadAudioSource", ({ enumerable: true, get: function () { return helpers_1.LoadAudioSource; } }));
var constants_1 = __webpack_require__(361);
Object.defineProperty(exports, "SUPPORTED_FILE_TYPES", ({ enumerable: true, get: function () { return constants_1.SUPPORTED_FILE_TYPES; } }));


/***/ }),

/***/ 4:
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

/***/ 5:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chorus = void 0;
class Chorus {
}
exports.Chorus = Chorus;


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Distortion = void 0;
class Distortion {
}
exports.Distortion = Distortion;


/***/ }),

/***/ 7:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Equalizer = void 0;
class Equalizer {
}
exports.Equalizer = Equalizer;


/***/ }),

/***/ 8:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Filter = void 0;
class Filter {
}
exports.Filter = Filter;


/***/ }),

/***/ 9:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Limiter = void 0;
class Limiter {
}
exports.Limiter = Limiter;


/***/ }),

/***/ 10:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Saturation = void 0;
class Saturation {
}
exports.Saturation = Saturation;


/***/ }),

/***/ 11:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StereoPanner = void 0;
class StereoPanner {
}
exports.StereoPanner = StereoPanner;


/***/ }),

/***/ 12:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Compressor = void 0;
class Compressor {
}
exports.Compressor = Compressor;


/***/ }),

/***/ 13:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultibandCompressor = void 0;
class MultibandCompressor {
}
exports.MultibandCompressor = MultibandCompressor;


/***/ }),

/***/ 14:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdvancedDelay = void 0;
class AdvancedDelay {
}
exports.AdvancedDelay = AdvancedDelay;


/***/ }),

/***/ 15:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonoDelay = void 0;
class MonoDelay {
}
exports.MonoDelay = MonoDelay;


/***/ }),

/***/ 16:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PingPongDelay = void 0;
class PingPongDelay {
}
exports.PingPongDelay = PingPongDelay;


/***/ }),

/***/ 17:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StereoDelay = void 0;
class StereoDelay {
}
exports.StereoDelay = StereoDelay;


/***/ }),

/***/ 18:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChamberReverb = void 0;
class ChamberReverb {
}
exports.ChamberReverb = ChamberReverb;


/***/ }),

/***/ 19:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConvolverReverb = void 0;
class ConvolverReverb {
}
exports.ConvolverReverb = ConvolverReverb;


/***/ }),

/***/ 20:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericReverb = void 0;
class GenericReverb {
}
exports.GenericReverb = GenericReverb;


/***/ }),

/***/ 21:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HallReverb = void 0;
class HallReverb {
}
exports.HallReverb = HallReverb;


/***/ }),

/***/ 22:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomReverb = void 0;
class RoomReverb {
}
exports.RoomReverb = RoomReverb;


/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioClip = exports.Master = exports.Effector = exports.Channel = exports.AudioDevice = void 0;
var AudioDevice_1 = __webpack_require__(24);
Object.defineProperty(exports, "AudioDevice", ({ enumerable: true, get: function () { return AudioDevice_1.AudioDevice; } }));
var Channel_1 = __webpack_require__(49);
Object.defineProperty(exports, "Channel", ({ enumerable: true, get: function () { return Channel_1.Channel; } }));
var Effector_1 = __webpack_require__(50);
Object.defineProperty(exports, "Effector", ({ enumerable: true, get: function () { return Effector_1.Effector; } }));
var Master_1 = __webpack_require__(46);
Object.defineProperty(exports, "Master", ({ enumerable: true, get: function () { return Master_1.Master; } }));
var AudioClip_1 = __webpack_require__(51);
Object.defineProperty(exports, "AudioClip", ({ enumerable: true, get: function () { return AudioClip_1.AudioClip; } }));


/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioDevice = void 0;
const uuid_1 = __webpack_require__(25);
const Master_1 = __webpack_require__(46);
const console_codes_1 = __webpack_require__(48);
const debugger_1 = __webpack_require__(47);
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

/***/ 46:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Master = void 0;
const uuid_1 = __webpack_require__(25);
const debugger_1 = __webpack_require__(47);
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

/***/ 47:
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

/***/ 48:
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

/***/ 49:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
const uuid_1 = __webpack_require__(25);
const debugger_1 = __webpack_require__(47);
class Channel {
    options;
    id = (0, uuid_1.v4)();
    effects = [];
    context = new AudioContext();
    label;
    audioClips = [];
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
    AttachAudioClip(clip) {
        if (this.audioClips.includes(clip))
            return debugger_1.Debug.Error("Could not attach audio clip because it is already part of this channel", [
                "Call .DetachAudioClip([clip AudioClip]) before attaching audio clip."
            ]);
        clip.InitializeAudioClipOnAttaching(this);
        this.audioClips.push(clip);
    }
    DetachAudioClip(clip) {
        if (!this.audioClips.includes(clip))
            return debugger_1.Debug.Error("Could not detach audio clip, because it is not part of this channel.", [
                "Call .AttachAudioClip([clip AudioClip]) before deattaching audio clip."
            ]);
        const self = this;
        clip.parentialAudioContext = null;
        clip.parentialChannel = null;
        clip.hasAttachedToChannel = false;
        clip.stereoPannerNode?.disconnect();
        clip.gainNode?.disconnect();
        clip.DisconnectAllAudioBufferSourceNodes();
        this.audioClips.forEach(function (_clip, index) {
            if (clip.id === _clip.id)
                return self.audioClips.splice(index, 1);
        });
    }
}
exports.Channel = Channel;


/***/ }),

/***/ 50:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Effector = void 0;
const uuid_1 = __webpack_require__(25);
class Effector {
    id = (0, uuid_1.v4)();
}
exports.Effector = Effector;


/***/ }),

/***/ 51:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioClip = void 0;
const uuid_1 = __webpack_require__(25);
const date_fns_1 = __webpack_require__(52);
const debugger_1 = __webpack_require__(47);
class AudioClip {
    data;
    id = (0, uuid_1.v4)();
    hasAttachedToChannel = false;
    loop = false;
    isPlaying = false;
    startTime = 0;
    offsetAtStart = 0;
    gainNode = null;
    stereoPannerNode = null;
    parentialAudioContext = null;
    parentialChannel = null;
    preAnalyser = null;
    postAnalyser = null;
    preAnalyserEnabled = false;
    postAnalyserEnabled = false;
    preAnalyserOptions = {};
    postAnalyserOptions = {};
    preAnalyserFloatArrayBuffer = new Float32Array();
    postAnalyserFloatArrayBuffer = new Float32Array();
    preAnalyserByteArrayBuffer = new Uint8Array();
    postAnalyserByteArrayBuffer = new Uint8Array();
    audioBufferSourceNodes = [];
    maxAudioBufferSourceNodes = 1;
    progressInterval = 0;
    events = {
        "progress": []
    };
    constructor(data) {
        this.data = data;
    }
    createBufferSource() {
        if (!this.parentialAudioContext)
            return null;
        const context = this.parentialAudioContext;
        const bufferSource = context.createBufferSource();
        bufferSource.buffer = this.data.audioBuffer;
        bufferSource.loop = this.loop;
        return bufferSource;
    }
    connectSourcesTo(target) {
        for (const src of this.audioBufferSourceNodes) {
            src.disconnect();
            src.connect(target);
        }
    }
    safeDisconnect(node) {
        node?.disconnect();
    }
    rebuildNodeChain() {
        if (!this.parentialAudioContext || !this.gainNode || !this.stereoPannerNode) {
            debugger_1.Debug.Error("rebuildNodeChain: missing context or core nodes (gain/panner).");
            return false;
        }
        const ctx = this.parentialAudioContext;
        const dest = ctx.destination;
        this.safeDisconnect(this.gainNode);
        this.safeDisconnect(this.stereoPannerNode);
        this.safeDisconnect(this.preAnalyser);
        this.safeDisconnect(this.postAnalyser);
        let entry = this.gainNode;
        if (this.preAnalyserEnabled && this.preAnalyser) {
            entry = this.preAnalyser;
            this.preAnalyser.connect(this.gainNode);
        }
        this.gainNode.connect(this.stereoPannerNode);
        if (this.postAnalyserEnabled && this.postAnalyser) {
            this.stereoPannerNode.connect(this.postAnalyser);
            this.postAnalyser.connect(dest);
        }
        else {
            this.stereoPannerNode.connect(dest);
        }
        this.connectSourcesTo(entry);
        return true;
    }
    InitializeAudioClipOnAttaching(channel) {
        this.gainNode = new GainNode(channel.context);
        this.stereoPannerNode = new StereoPannerNode(channel.context);
        this.gainNode.connect(channel.context.destination);
        this.stereoPannerNode.connect(this.gainNode);
        this.parentialAudioContext = channel.context;
        this.parentialChannel = channel;
        this.hasAttachedToChannel = true;
        return this;
    }
    Play(timestamp, offset = 0) {
        if (!this.hasAttachedToChannel || !this.parentialAudioContext || !this.parentialChannel) {
            debugger_1.Debug.Error("Could not play the audio node because it is not attached to a channel", [
                "Call 'AttachAudioClip([clip AudioClip])' on a channel, before playing this audio node."
            ]);
            return this;
        }
        const context = this.parentialAudioContext;
        const self = this;
        if (this.audioBufferSourceNodes.length > this.maxAudioBufferSourceNodes - 1)
            return null;
        const bufferSource = this.createBufferSource();
        if (!bufferSource) {
            debugger_1.Debug.Error("Something went wrong.");
            return null;
        }
        this.startTime = context.currentTime;
        this.offsetAtStart = offset;
        this.isPlaying = true;
        if (this.progressInterval)
            clearInterval(this.progressInterval);
        if (this.isPlaying)
            this.progressInterval = setInterval(function () {
                if (!self.isPlaying)
                    return;
                const current = self.offsetAtStart + (context.currentTime - self.startTime);
                const date = new Date(current * 1000);
                const formattedTime = (0, date_fns_1.format)(date, "mm:ss");
                const progressPayload = {
                    current: parseFloat(current.toFixed(2)),
                    startTime: self.startTime,
                    offset: self.offsetAtStart,
                    contextTimestamp: context.currentTime,
                    formatted: formattedTime
                };
                self.events.progress.forEach(function (cb) {
                    cb(progressPayload);
                });
            }, 20);
        bufferSource.addEventListener("ended", function () {
            const i = self.audioBufferSourceNodes.indexOf(bufferSource);
            bufferSource.disconnect();
            if (i === 0)
                self.isPlaying = false;
            if (i >= 0)
                return self.audioBufferSourceNodes.splice(i, 1);
        });
        this.audioBufferSourceNodes.push(bufferSource);
        this.rebuildNodeChain();
        bufferSource.start(timestamp ?? this.startTime, offset);
        return this;
    }
    Stop() {
        if (!this.hasAttachedToChannel || !this.parentialAudioContext) {
            debugger_1.Debug.Error("Could not stop the audio node because it is not attached to a channel", [
                "Call 'AttachAudioClip([node AudioNode])' on a channel, before stopping this audio node."
            ]);
            return null;
        }
        this.audioBufferSourceNodes.forEach(function (node) {
            node.stop();
            node.disconnect();
        });
        this.audioBufferSourceNodes.length = 0;
        this.isPlaying = false;
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
        return this;
    }
    SetVolume(volume) {
        if (!this.gainNode || !this.parentialAudioContext)
            return debugger_1.Debug.Error("Something went wrong while setting the volume.", [
                `Gain node on audio clip '${this.id}' is undefined.`
            ]);
        this.gainNode.gain.setValueAtTime(volume, this.parentialAudioContext.currentTime);
        return this;
    }
    SetPanLevel(panLevel) {
        if (!this.stereoPannerNode || !this.parentialAudioContext)
            return debugger_1.Debug.Error("Something went wrong while setting the pan level", [
                `Stereo panner node on audio clip '${this.id}' is undefined`
            ]);
        if (panLevel < -1 || panLevel > 1)
            return debugger_1.Debug.Error("Could not set the pan level because it is not between -1 and 1.", [
                "Provide this method with a value between -1 and 1"
            ]);
        this.stereoPannerNode.pan.setValueAtTime(panLevel, this.parentialAudioContext.currentTime);
        return this;
    }
    Loop(loop) {
        this.audioBufferSourceNodes.forEach(function (node) {
            node.loop = loop ?? true;
        });
        this.loop = loop ?? true;
        return this;
    }
    SetMaxAudioBufferSourceNodes(value) {
        debugger_1.Debug.Warn("Changing the amount of buffer source nodes may cause some properties of this class instance to work inproperly.", [
            "The default value is 1."
        ]);
        this.maxAudioBufferSourceNodes = value;
        return this;
    }
    DisconnectAllAudioBufferSourceNodes() {
        if (!this.parentialAudioContext) {
            debugger_1.Debug.Error("Could not disconnect audio buffer source nodes, because the parential audio contex has not been found", [
                `Clip ID: ${this.id}`,
                `Parential channel id: ${this.parentialChannel ? this.parentialChannel.id : "none"}`
            ]);
            return false;
        }
        const contextCurrentTime = this.parentialAudioContext?.currentTime;
        this.audioBufferSourceNodes.forEach(function (node) {
            node.stop(contextCurrentTime);
            node.disconnect();
        });
        return true;
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
    GetChannelData(channel = 0) {
        return this.data.audioBuffer.getChannelData(channel);
    }
    EnablePreAnalyser() {
        if (!this.parentialAudioContext || !this.parentialChannel || !this.hasAttachedToChannel) {
            debugger_1.Debug.Error("EnablePreAnalyser: clip niet aan channel gekoppeld.");
            return false;
        }
        if (!this.preAnalyser)
            this.preAnalyser = new AnalyserNode(this.parentialAudioContext, this.preAnalyserOptions);
        this.preAnalyserEnabled = true;
        return this.rebuildNodeChain();
    }
    DisablePreAnalyser() {
        this.preAnalyserEnabled = false;
        return this.rebuildNodeChain();
    }
    EnablePostAnalyser() {
        if (!this.parentialAudioContext || !this.parentialChannel || !this.hasAttachedToChannel) {
            debugger_1.Debug.Error("EnablePostAnalyser: clip niet aan channel gekoppeld.");
            return false;
        }
        if (!this.postAnalyser)
            this.postAnalyser = new AnalyserNode(this.parentialAudioContext, this.postAnalyserOptions);
        this.postAnalyserEnabled = true;
        return this.rebuildNodeChain();
    }
    DisablePostAnalyser() {
        this.postAnalyserEnabled = false;
        return this.rebuildNodeChain();
    }
    SetPreAnalyserOptions(options) {
        this.preAnalyserOptions = { ...options };
        if (!this.preAnalyser)
            return;
        this.preAnalyser.fftSize = options.fftSize ?? this.preAnalyser.fftSize;
        this.preAnalyser.minDecibels = options.minDecibels ?? this.preAnalyser.minDecibels;
        this.preAnalyser.maxDecibels = options.maxDecibels ?? this.preAnalyser.maxDecibels;
        this.preAnalyser.smoothingTimeConstant = options.smoothingTimeConstant ?? this.preAnalyser.smoothingTimeConstant;
    }
    SetPostAnalyserOptions(options) {
        this.postAnalyserOptions = { ...options };
        if (!this.postAnalyser)
            return;
        this.postAnalyser.fftSize = options.fftSize ?? this.postAnalyser.fftSize;
        this.postAnalyser.minDecibels = options.minDecibels ?? this.postAnalyser.minDecibels;
        this.postAnalyser.maxDecibels = options.maxDecibels ?? this.postAnalyser.maxDecibels;
        this.postAnalyser.smoothingTimeConstant = options.smoothingTimeConstant ?? this.postAnalyser.smoothingTimeConstant;
    }
    SetAnalyserOption(analyserType, property, value) {
        const node = analyserType === "pre" ? this.preAnalyser : this.postAnalyser;
        if (node)
            switch (property) {
                case "fftSize":
                    node.fftSize = value;
                    break;
                case "minDecibels":
                    node.minDecibels = value;
                    break;
                case "maxDecibels":
                    node.maxDecibels = value;
                    break;
                case "smoothingTimeConstant":
                    node.smoothingTimeConstant = value;
                    break;
                default: return false;
            }
        const opts = analyserType === "pre" ? this.preAnalyserOptions : this.postAnalyserOptions;
        switch (property) {
            case "fftSize":
                opts.fftSize = value;
                break;
            case "minDecibels":
                opts.minDecibels = value;
                break;
            case "maxDecibels":
                opts.maxDecibels = value;
                break;
            case "smoothingTimeConstant":
                opts.smoothingTimeConstant = value;
                break;
            default: return false;
        }
        return true;
    }
    GetWaveformFloatData(analyserType) {
        if (!this.preAnalyser || !this.postAnalyser) {
            debugger_1.Debug.Error("Could not get floating waveform data because the pre analyser or post analyser has not been enabled.", [
                "Call .EnablePreAnalyser() or .EnablePostAnalyser() before getting waveform data."
            ]);
            return null;
        }
        switch (analyserType) {
            case "pre":
                this.preAnalyser.getFloatTimeDomainData(this.preAnalyserFloatArrayBuffer);
                return this.preAnalyserFloatArrayBuffer;
            case "post":
                this.postAnalyser.getFloatFrequencyData(this.postAnalyserFloatArrayBuffer);
                return this.postAnalyserFloatArrayBuffer;
            default:
                return null;
        }
    }
    get currentPlaybackTime() {
        return (!this.isPlaying || !this.parentialAudioContext)
            ? 0
            : this.offsetAtStart + (this.parentialAudioContext.currentTime - this.startTime);
    }
    get duration() {
        return this.data.audioBuffer.duration;
    }
    get formattedDuration() {
        const date = new Date(this.duration * 1000);
        return (0, date_fns_1.format)(date, "mm:ss");
    }
    get sampleRate() {
        return this.data.audioBuffer.sampleRate;
    }
    get numberOfChannels() {
        return this.data.audioBuffer.numberOfChannels;
    }
    get byteLength() {
        return this.data.arrayBuffer.byteLength;
    }
}
exports.AudioClip = AudioClip;


/***/ }),

/***/ 356:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadAudioSource = exports.ResolveDefaultAudioInputDevice = exports.ResolveDefaultAudioOutputDevice = exports.ResolveAudioInputDevices = exports.ResolveAudioOutputDevices = exports.EnsureAudioPermission = void 0;
const mime_1 = __importDefault(__webpack_require__(357));
const AudioDevice_1 = __webpack_require__(24);
const debugger_1 = __webpack_require__(47);
const console_codes_1 = __webpack_require__(48);
const constants_1 = __webpack_require__(361);
const uuid_1 = __webpack_require__(25);
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
    const tempContext = new AudioContext(), arrayBuffer = await file.arrayBuffer(), audioBuffer = await tempContext.decodeAudioData(arrayBuffer);
    tempContext.close();
    return {
        arrayBuffer, audioBuffer,
        id: (0, uuid_1.v4)(),
        timestamp: Date.now()
    };
}
exports.LoadAudioSource = LoadAudioSource;


/***/ }),

/***/ 361:
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


/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const audio_1 = __webpack_require__(3);
const btnPlay = document.querySelector("#btn-play"), btnStop = document.querySelector("#btn-stop"), playbackCurrentTime = document.querySelector("#playback-current-time"), playbackDuration = document.querySelector("#playback-duration"), playbackTracker = document.querySelector("#playback-tracker");
async function init() {
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
    const audioSourceData = await (0, audio_1.LoadAudioSource)("/assets/data/Chill Instrumental [Non Copyrighted Music] Embrace by @Sappheiros.mp3");
    if (!audioSourceData)
        return;
    const audioClip = new audio_1.AudioClip(audioSourceData);
    audioClip.AddEventListener("progress", function (event) {
        playbackCurrentTime.innerText = `${event.formatted}`;
        playbackDuration.innerText = `${audioClip.formattedDuration}`;
        let trackerValue = 100 / audioClip.duration * event.current;
        playbackTracker.value = trackerValue.toString();
    });
    channel.AttachAudioClip(audioClip);
    audioClip.EnablePreAnalyser();
    audioClip.GetWaveformFloatData("pre");
    btnPlay.addEventListener("click", () => audioClip.Play());
    btnStop.addEventListener("click", () => audioClip.Stop());
}
window.addEventListener("load", init);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [2,3,4,6,5,7,8,9,10,11,12,14,13,15], () => (__webpack_exec__(0)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);