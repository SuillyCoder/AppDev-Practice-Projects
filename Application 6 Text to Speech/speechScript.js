let talkingVoice = new SpeechSynthesisUtterance();
let voiceChange = [];
let voiceSelector =  document.getElementById("voiceSelector");
let voiceFile;
var outputLevel = document.getElementById("volumeRange");
let volume = Math.log(outputLevel.value / 100) / Math.log(100 / 100);

window.speechSynthesis.onvoiceschanged = () => {
    voiceChange = window.speechSynthesis.getVoices();
    talkingVoice.voice = voiceChange[0];

    voiceChange.forEach((voice, i) => (voiceSelector.options[i] = new Option(voice.name, i)));
}

voiceSelector.addEventListener("change", () => {
    talkingVoice.voice = voiceChange[voiceSelector.value];
})

document.getElementById("button").addEventListener("click", () =>{
    let volume = outputLevel.value / 100;
    talkingVoice.text =  document.getElementById("textarea").value;
    talkingVoice.volume = volume;
    voiceFile = window.speechSynthesis.speak(talkingVoice);

});

