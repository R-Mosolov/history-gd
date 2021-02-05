"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var initial_state_1 = require("./initial-state");
var types_1 = require("../store/types");
var constants_1 = require("../constants");
var utils_1 = require("../utils");
// Restructure types
var SET_STATE = types_1["default"].SET_STATE, CHECK_INTERSECTIONS = types_1["default"].CHECK_INTERSECTIONS, SORT_MANUSCRIPTS = types_1["default"].SORT_MANUSCRIPTS, FILTER_MANUSCRIPTS = types_1["default"].FILTER_MANUSCRIPTS, SEARCH_MANUSCRIPTS = types_1["default"].SEARCH_MANUSCRIPTS, RESET_STATE = types_1["default"].RESET_STATE;
// Create the reducer
var reducer = function (store, action) {
    if (store === void 0) { store = initial_state_1["default"]; }
    switch (action.type) {
        case SET_STATE:
            return __assign(__assign({}, store), { fetchedManuscripts: action.payload, areManuscriptsLoading: false });
        case CHECK_INTERSECTIONS:
            if (store.areManuscriptsFiltered) {
                return __assign(__assign({}, store), { intersectedManuscripts: store.filteredManuscripts, areManuscriptsIntersected: true });
            }
        case SORT_MANUSCRIPTS:
            var sorterParam_1 = action.payload;
            return __assign(__assign({}, store), { 
                // TODO: Change Any types
                sortedManuscripts: store.fetchedManuscripts.sort(function (a, b) {
                    var aParam = a["" + sorterParam_1].toUpperCase();
                    var bParam = b["" + sorterParam_1].toUpperCase();
                    if (store.areManuscriptsSorted.byDecrease) {
                        if (aParam < bParam)
                            return -1;
                        if (aParam > bParam)
                            return 1;
                    }
                    else {
                        if (aParam < bParam)
                            return 1;
                        if (aParam > bParam)
                            return -1;
                    }
                    return 0;
                }), areManuscriptsSorted: {
                    isActive: true,
                    byDecrease: store.areManuscriptsSorted.byDecrease ? false : true
                }, areManuscriptsFiltered: __assign(__assign({}, store.areManuscriptsFiltered), { isActive: false }), areManuscriptsSearched: false });
        case FILTER_MANUSCRIPTS:
            var filterParam_1 = action.payload;
            return __assign(__assign({}, store), { 
                // TODO: Change Any types
                filteredManuscripts: store.fetchedManuscripts.filter(function (manuscript) {
                    if (filterParam_1 === constants_1.LARGE_MANUSCRIPTS) {
                        if (manuscript.type ===
                            utils_1.utils.getLabelById(constants_1.MONOGRAPH, constants_1.MANUSCRIPT_TYPES) ||
                            manuscript.type ===
                                utils_1.utils.getLabelById(constants_1.TEACHING_AID, constants_1.MANUSCRIPT_TYPES)) {
                            return true;
                        }
                    }
                    else if (filterParam_1 === constants_1.SMALL_MANUSCRIPTS) {
                        if (manuscript.type ===
                            utils_1.utils.getLabelById(constants_1.SCIENCE_PUBLICATION, constants_1.MANUSCRIPT_TYPES) ||
                            manuscript.type ===
                                utils_1.utils.getLabelById(constants_1.CONFERENCE_THESES, constants_1.MANUSCRIPT_TYPES)) {
                            return true;
                        }
                    }
                }), areManuscriptsFiltered: {
                    isActive: true,
                    byLargeManuscripts: store.areManuscriptsFiltered.byLargeManuscripts
                        ? false
                        : true
                }, areManuscriptsSorted: __assign(__assign({}, store.areManuscriptsSorted), { isActive: false }), areManuscriptsSearched: false });
        case SEARCH_MANUSCRIPTS:
            var searcherParam_1 = action.payload.toString().toLowerCase();
            var searchedStoreChunk = constants_1.FETCHED_MANUSCRIPTS;
            if (store.areManuscriptsIntersected) {
                searchedStoreChunk = constants_1.INTERSECTED_MANUSCRIPTS;
            }
            return __assign(__assign({}, store), { searchedManuscripts: store[searchedStoreChunk].filter(function (manuscript) {
                    // TODO: Add searching by date
                    var title = manuscript.title, author = manuscript.author, type = manuscript.type;
                    if (title.toString().toLowerCase().includes(searcherParam_1) ||
                        author.toString().toLowerCase().includes(searcherParam_1) ||
                        type.toString().toLowerCase().includes(searcherParam_1)) {
                        return true;
                    }
                }), areManuscriptsSearched: true, areManuscriptsSorted: __assign(__assign({}, store.areManuscriptsSorted), { isActive: false }), areManuscriptsFiltered: __assign(__assign({}, store.areManuscriptsFiltered), { isActive: false }) });
        case RESET_STATE:
            return __assign(__assign({}, store), { areManuscriptsIntersected: false, areManuscriptsSearched: false, areManuscriptsSorted: __assign(__assign({}, store.areManuscriptsSorted), { isActive: false }), areManuscriptsFiltered: __assign(__assign({}, store.areManuscriptsFiltered), { isActive: false }) });
        default:
            return initial_state_1["default"];
    }
};
exports["default"] = reducer;
