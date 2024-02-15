let talkingVoice = new SpeechSynthesisUtterance();
let voiceChange = [];
let voiceSelector =  document.getElementById("voiceSelector");

window.speechSynthesis.onvoiceschanged = () => {
    voiceChange = window.speechSynthesis.getVoices();
    talkingVoice.voice = voiceChange[0];

    voiceChange.forEach((voice, i) => (voiceSelector.options[i] = new Option(voice.name, i)));
}

voiceSelector.addEventListener("change", () => {
    talkingVoice.voice = voiceChange[voiceSelector.value];
})

document.getElementById("button").addEventListener("click", () =>{
    talkingVoice.text =  document.getElementById("textarea").value;
    window.speechSynthesis.speak(talkingVoice);
});
