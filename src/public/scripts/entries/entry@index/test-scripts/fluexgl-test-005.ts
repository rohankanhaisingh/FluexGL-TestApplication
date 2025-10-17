import { 
    AudioDevice, 
    EnsureAudioPermission, 
    LoadAudioSource, 
    ResolveDefaultAudioOutputDevice, 
    Channel, 
    AudioSourceData, 
    AudioClip, 
    AudioClipOnProgressEvent
} from "@fluexgl/audio";

const btnPlay = document.querySelector("#btn-play") as HTMLButtonElement,
    btnStop = document.querySelector("#btn-stop") as HTMLButtonElement,
    playbackCurrentTime = document.querySelector("#playback-current-time") as HTMLParagraphElement,
    playbackDuration = document.querySelector("#playback-duration") as HTMLParagraphElement,
    playbackTracker = document.querySelector("#playback-tracker");

async function init() {

    const canAccessAudioDevices = await EnsureAudioPermission();

    if(!canAccessAudioDevices) return null;

    const audioDevice: AudioDevice | null = await ResolveDefaultAudioOutputDevice();

    if(!audioDevice) return;

    const masterChannel = audioDevice.GetMasterChannel();
    const channel = new Channel();

    channel.SetLabel("BackgroundMusic");
    masterChannel.AttachChannel(channel);

    const audioSourceData: AudioSourceData | null = await LoadAudioSource("/assets/data/Chill Instrumental [Non Copyrighted Music] Embrace by @Sappheiros.mp3");

    if(!audioSourceData) return;

    const audioClip = new AudioClip(audioSourceData);
    
    audioClip.AddEventListener("progress", function(event: AudioClipOnProgressEvent) {
        
        playbackCurrentTime.innerText = `${event.formatted}`;
        playbackDuration.innerText = `${audioClip.formattedDuration}`
    });
    
    channel.AttachAudioClip(audioClip);
    
    btnPlay.addEventListener("click", () => audioClip.Play());
}

window.addEventListener("load", init);