import TextToSpeech from "text-to-speech-js";

const btnToCreateAudio = document.getElementById("btn-to-create-audio");

if (btnToCreateAudio) {
  btnToCreateAudio.addEventListener("click", () => {
    TextToSpeech.talk("Hello Beautiful World!");
  });
}
