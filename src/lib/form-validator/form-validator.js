"use strict";
exports.__esModule = true;
// Importing dependencies
var render_error_1 = require("./render-error");
// import * as users from "../../data/users.json";
function deleteOldErrorField(fieldId) {
    var errorField = document.getElementById("error-" + fieldId);
    if (errorField) {
        return errorField.remove();
    }
}
// Creating the new class
var FormValidator = /** @class */ (function () {
    function FormValidator() {
    }
    FormValidator.prototype.checkStringLength = function (fieldId, minLength, maxLength) {
        var fieldToCheck = document.getElementById("" + fieldId);
        var errorText = "";
        deleteOldErrorField(fieldId);
        if ((fieldToCheck.value && fieldToCheck.value.length < minLength) ||
            (fieldToCheck.value && fieldToCheck.value.length > maxLength)) {
            errorText = "\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442 " + minLength + " \u0434\u043E " + maxLength + " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.";
        }
        if (errorText !== "") {
            return render_error_1["default"](fieldId, errorText);
        }
        return errorText;
    };
    return FormValidator;
}());
// Exporting the module
module.exports = FormValidator;
