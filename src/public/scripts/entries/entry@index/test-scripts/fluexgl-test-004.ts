import { AudioDevice, EnsureAudioPermission, LoadAudioSource, ResolveDefaultAudioOutputDevice, Channel } from "@fluexgl/audio";

(async function() {

    // Make sure that FluexGL can access audio devices.
    const canAccessAudioDevices = await EnsureAudioPermission();

    if(!canAccessAudioDevices) return null;

    // Resolves the default audio output device.
    const audioDevice: AudioDevice | null = await ResolveDefaultAudioOutputDevice();

    if(!audioDevice) return;

    // Get the master channel from the default audio output device.
    const masterChannel = audioDevice.GetMasterChannel();

    // Create a new empty channel.
    const channel = new Channel();

    // Label the channel as 'BackgroundMusic'.
    channel.SetLabel("BackgroundMusic");

    // Attach the 'BackgroundMusic' channel, to the device's master channel.
    masterChannel.AttachChannel(channel);

    const audioSource = await LoadAudioSource("/assets/data/bruh.mp3");

    console.log(audioSource);
})();