"use strict";
exports.__esModule = true;
var manuscripts_base_1 = require("../../../../data/manuscripts/manuscripts-base");
var manuscripts_details_1 = require("../../../../data/manuscripts/manuscripts-details");
function expandManuscripts() {
    // Initializing variables
    var manuscriptType = (document.getElementById("manuscript-type")).value;
    var manuscriptTitle = (document.getElementById("manuscript-title")).value;
    var manuscriptAuthor = (document.getElementById("manuscript-author")).value;
    var manuscriptContent = (document.getElementById("manuscript-content")).value;
    // Adding new data to project's general data
    if (manuscriptType && manuscriptTitle && manuscriptAuthor) {
        manuscripts_base_1["default"].push({
            title: manuscriptTitle,
            type: manuscriptType,
            author: manuscriptAuthor,
            creationDate: new Date().getFullYear()
        });
    }
    if (manuscriptContent) {
        manuscripts_details_1["default"].push({
            content: manuscriptContent
        });
    }
    alert("Рукопись успешно создана!");
}
exports["default"] = expandManuscripts;
