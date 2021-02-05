"use strict";
exports.__esModule = true;
function prettyText(inputText) {
    var outputText = "";
    var inputTextTokens = inputText.split("");
    var braceCounter = 0;
    inputTextTokens.forEach(function (token, index) {
        if (token === '"') {
            braceCounter += 1;
            if (braceCounter % 2 === 1) {
                return (inputTextTokens[index] = "«");
            }
            else if (braceCounter % 2 === 0) {
                return (inputTextTokens[index] = "»");
            }
        }
    });
    return inputTextTokens;
}
exports["default"] = prettyText;
console.log(prettyText('"Labore sit duis aliquip aliquip cupidatat. "Laborum" incididunt sint aliquip enim ex."' +
    '"Labore sit duis aliquip aliquip cupidatat". "Laborum incididunt sint aliquip enim ex."'));
