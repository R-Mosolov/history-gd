"use strict";
exports.__esModule = true;
exports.utils = void 0;
var getLabelById = function (id, obj) { return obj.find(function (item) { return item.id === id; }).label; };
var getPlaceholderById = function (id, obj) { return obj.find(function (item) { return item.id === id; }).placeholder; };
var getRequiredById = function (id, obj) { return obj.find(function (item) { return item.id === id; }).isRequired; };
exports.utils = {
    getLabelById: getLabelById,
    getPlaceholderById: getPlaceholderById,
    getRequiredById: getRequiredById
};
