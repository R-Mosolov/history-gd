const milenaVoice = {
    name: "Milena",
    lang: "ru-RU",
  };

const btnToCreateAudio = document.getElementById("btn-to-create-audio");
// const speakText = new SpeechSynthesisUtterance("Hello, World!");

const msg = new SpeechSynthesisUtterance();
msg.volume = 1;
msg.rate = 1;
msg.pitch = 1.5;
msg.text = "Здравствуйте, Роман!";

const voice = milenaVoice;
msg.voiceURI = voice.name;
msg.lang = voice.lang;

// document.addEventListener("DOMContentLoaded", () => {
//   btnToCreateAudio.addEventListener("click", () => {
//     alert(1);
//     speechSynthesis.speak(msg);
//   });
// });
