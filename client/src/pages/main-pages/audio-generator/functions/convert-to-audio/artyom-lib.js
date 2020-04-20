import Artyom from "artyom.js";

const artyom = new Artyom();
const btnToCreateAudio = document.getElementById("btn-to-create-audio");

artyom.initialize({
  lang: "en-GB",
  debug: true,
  listen: true,
  speed: 0.9,
  mode: "normal",
});

if (btnToCreateAudio) {
  btnToCreateAudio.addEventListener("click", () => {
    artyom.say("Hello World !");
  });
}
