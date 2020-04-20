// Imports the Google Cloud client library
const speech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

// const audioMonographInput = document.getElementById("audio-monograph-input").value;

// Creates a client
const client = new speech.TextToSpeechClient();

const text = "Hello, World!";
const outputFile = "/output.mp3";

const request = {
  input: { text: text },
  voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
  audioConfig: { audioEncoding: "MP3" },
};
const [response] = client.synthesizeSpeech(request);
const writeFile = util.promisify(fs.writeFile);
writeFile(outputFile, response.audioContent, "binary");
console.log(`Audio content written to file: ${outputFile}`);
