"use strict";
exports.__esModule = true;
exports.utils = void 0;
var getLabelById = function (id, obj) {
  return obj.find(function (item) {
    return item.id === id;
  }).label;
};
var getPlaceholderById = function (id, obj) {
  return obj.find(function (item) {
    return item.id === id;
  }).placeholder;
};
var getRequiredById = function (id, obj) {
  return obj.find(function (item) {
    return item.id === id;
  }).isRequired;
};
var convertDateToCustom = function (date) {
  // TODO: To parse a date, use DateJS library (see https://github.com/datejs/Datejs)
  var datePrototype = new Date(date);
  var day = datePrototype.getDate();
  var month = datePrototype.getMonth() + 1;
  var year = datePrototype.getFullYear();
  var hour = datePrototype.getHours();
  var minute = datePrototype.getMinutes();
  return (
    (day > 9 ? day : "0" + day) +
    "." +
    ((month > 9 ? month : "0" + month) + ".") +
    ("" + year) +
    ", " +
    ("" + (hour > 9 ? hour : "0" + hour)) +
    (":" + (minute > 9 ? minute : "0" + minute) + " (\u041C\u0421\u041A)")
  );
};
exports.utils = {
  getLabelById: getLabelById,
  getPlaceholderById: getPlaceholderById,
  getRequiredById: getRequiredById,
  convertDateToCustom: convertDateToCustom,
};
