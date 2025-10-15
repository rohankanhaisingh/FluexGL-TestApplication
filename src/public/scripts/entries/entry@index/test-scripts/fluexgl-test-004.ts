import { AudioDevice, EnsureAudioPermission, ResolveAudioOutputDevices, ResolveDefaultAudioOutputDevice } from "@fluexgl/audio";

(async function() {

    const canAccessAudioDevices = await EnsureAudioPermission();

    if(!canAccessAudioDevices) return null;

    const audioDevice: AudioDevice | null = await ResolveDefaultAudioOutputDevice();

    if(!audioDevice) return;

    console.log(audioDevice);
})();