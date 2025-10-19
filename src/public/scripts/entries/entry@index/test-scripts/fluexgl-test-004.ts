import { 
    AudioDevice, 
    EnsureAudioPermission, 
    LoadAudioSource, 
    ResolveDefaultAudioOutputDevice, 
    Channel, 
    AudioSourceData, 
    AudioClip 
} from "@fluexgl/dsp";

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

    // Load the data from the audio source.
    const audioSourceData: AudioSourceData | null = await LoadAudioSource("/assets/data/bruh.mp3");

    if(!audioSourceData) return;

    // Create a audio node based on the data.
    const audioClip = new AudioClip(audioSourceData);

    // Attach the audio node to the channel.
    channel.AttachAudioClip(audioClip);

    // Click event listener on window.
    window.addEventListener("click", function() {

        // Play the audio clip
        audioClip.Play();
    });
})();