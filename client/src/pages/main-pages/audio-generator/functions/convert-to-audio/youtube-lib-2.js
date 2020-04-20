const synth = window.speechSynthesis;

const btnToCreateAudio = document.getElementById("btn-to-create-audio");
const speakText = new SpeechSynthesisUtterance("Hello, World!");

if (btnToCreateAudio) {
  btnToCreateAudio.addEventListener("click", () => {
    synth.speak(speakText);
  });
}

// var inputForm = document.querySelector('form');
// var inputTxt = document.querySelector('.txt');
// var voiceSelect = document.querySelector('select');
//
// var voices = [];
//
// function populateVoiceList() {
//     voices = synth.getVoices();
//
//     for(i = 0; i < voices.length ; i++) {
//         var option = document.createElement('option');
//         option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
//
//         if(voices[i].default) {
//             option.textContent += ' -- DEFAULT';
//         }
//
//         option.setAttribute('data-lang', voices[i].lang);
//         option.setAttribute('data-name', voices[i].name);
//         voiceSelect.appendChild(option);
//     }
// }
//
// populateVoiceList();
// if (speechSynthesis.onvoiceschanged !== undefined) {
//     speechSynthesis.onvoiceschanged = populateVoiceList;
// }
//
// inputForm.onsubmit = function(event) {
//     event.preventDefault();
//
//     var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
//     var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
//     for(i = 0; i < voices.length ; i++) {
//         if(voices[i].name === selectedOption) {
//             utterThis.voice = voices[i];
//         }
//     }
//     synth.speak(utterThis);
//
//     inputTxt.blur();
// };
