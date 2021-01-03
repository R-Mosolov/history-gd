"use strict";
exports.__esModule = true;
var db_1 = require("../server/db");
var constants_1 = require("../constants");
var initialState = [];
db_1["default"]
    .collection(constants_1.MANUSCRIPTS)
    .get()
    .then(function (docs) { return docs.forEach(function (doc) { return initialState.push(doc.data()); }); })
    .then(function () { return console.log(initialState); })
    .then(function () { return console.log('Step 1'); })["catch"](function (err) { return console.log(err); });
// async function f() {
//   return console.log('Step 1');
// }
// f().then((res) => res);
console.log('Step 2');
exports["default"] = initialState;
