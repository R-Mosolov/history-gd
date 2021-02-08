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
var SET_STATE = types_1["default"].SET_STATE, SET_AUTHENTICATION = types_1["default"].SET_AUTHENTICATION, CHECK_INTERSECTIONS = types_1["default"].CHECK_INTERSECTIONS, SORT_MANUSCRIPTS = types_1["default"].SORT_MANUSCRIPTS, FILTER_MANUSCRIPTS = types_1["default"].FILTER_MANUSCRIPTS, SEARCH_MANUSCRIPTS = types_1["default"].SEARCH_MANUSCRIPTS, RESET_STATE = types_1["default"].RESET_STATE;
// Create the reducer
var reducer = function (store, action) {
    if (store === void 0) { store = initial_state_1["default"]; }
    switch (action.type) {
        /**
         * App
         */
        case SET_STATE:
            return __assign(__assign({}, store), { fetchedManuscripts: action.payload, areManuscriptsLoading: false });
        case SET_AUTHENTICATION:
            return __assign(__assign({}, store), { isAuthenticated: true });
        /**
         * Manuscripts page
         */
        case CHECK_INTERSECTIONS:
            var areManuscriptsFiltered = store.areManuscriptsFiltered, areManuscriptsSearched = store.areManuscriptsSearched, areManuscriptsSorted = store.areManuscriptsSorted;
            var NOTAll = !areManuscriptsFiltered.isActive && !areManuscriptsSearched && !areManuscriptsSorted.isActive;
            var manuscriptsOnlyFiltered = areManuscriptsFiltered.isActive && !areManuscriptsSearched && !areManuscriptsSorted.isActive;
            var manuscriptsOnlySearched = !areManuscriptsFiltered.isActive && areManuscriptsSearched && !areManuscriptsSorted.isActive;
            var manuscriptsOnlySorted = !areManuscriptsFiltered.isActive && !areManuscriptsSearched && areManuscriptsSorted.isActive;
            if (NOTAll) {
                return __assign(__assign({}, store), { areManuscriptsIntersected: false });
            }
            else if (manuscriptsOnlyFiltered) {
                return __assign(__assign({}, store), { areManuscriptsIntersected: false, intersectedManuscripts: store.filteredManuscripts });
            }
            else if (manuscriptsOnlySearched) {
                return __assign(__assign({}, store), { areManuscriptsIntersected: false, intersectedManuscripts: store.searchedManuscripts });
            }
            else if (manuscriptsOnlySorted) {
                return __assign(__assign({}, store), { areManuscriptsIntersected: false, intersectedManuscripts: store.sortedManuscripts });
            }
            else {
                return __assign(__assign({}, store), { areManuscriptsIntersected: true, intersectedManuscripts: store.fetchedManuscripts.filter(function (manuscript) {
                        // TODO: Add searching by date
                        var title = manuscript.title, author = manuscript.author, type = manuscript.type;
                        var filterParam = store.intersectionParams.filter;
                        if (filterParam === constants_1.LARGE_MANUSCRIPTS) {
                            if ((type === constants_1.MONOGRAPH || type === constants_1.TEACHING_AID)
                                && (title.includes(store.intersectionParams.searcher.toString().toLowerCase())
                                    || author.includes(store.intersectionParams.searcher.toString().toLowerCase())
                                    || utils_1.utils.getLabelById(type, constants_1.MANUSCRIPT_TYPES).toLowerCase()
                                        .includes(store.intersectionParams.searcher.toString().toLowerCase()))) {
                                return true;
                            }
                        }
                        else if (filterParam === constants_1.SMALL_MANUSCRIPTS) {
                            if ((type === constants_1.SCIENCE_PUBLICATION || type === constants_1.CONFERENCE_THESES || type === constants_1.OTHER)
                                && (title.includes(store.intersectionParams.searcher.toString().toLowerCase())
                                    || author.includes(store.intersectionParams.searcher.toString().toLowerCase())
                                    || utils_1.utils.getLabelById(type, constants_1.MANUSCRIPT_TYPES).toLowerCase()
                                        .includes(store.intersectionParams.searcher.toString().toLowerCase()))) {
                                return true;
                            }
                        }
                    }) });
            }
        case SORT_MANUSCRIPTS:
            var sorterParam_1 = action.payload;
            var sortedStoreChunk = constants_1.FETCHED_MANUSCRIPTS;
            if (store.areManuscriptsIntersected) {
                sortedStoreChunk = constants_1.INTERSECTED_MANUSCRIPTS;
            }
            else {
                if (store.areManuscriptsFiltered.isActive) {
                    sortedStoreChunk = constants_1.FILTERED_MANUSCRIPTS;
                }
                else if (store.areManuscriptsSearched) {
                    sortedStoreChunk = constants_1.SEARCHED_MANUSCRIPTS;
                }
            }
            return __assign(__assign({}, store), { 
                // TODO: Change Any type
                sortedManuscripts: store[sortedStoreChunk].sort(function (a, b) {
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
                } });
        case FILTER_MANUSCRIPTS:
            var filterParam_1 = action.payload;
            var filteredStoreChunk = constants_1.FETCHED_MANUSCRIPTS;
            if (store.areManuscriptsIntersected) {
                filteredStoreChunk = constants_1.INTERSECTED_MANUSCRIPTS;
            }
            else {
                if (store.areManuscriptsSorted.isActive && !store.areManuscriptsSearched) {
                    filteredStoreChunk = constants_1.SORTED_MANUSCRIPTS;
                }
                else if (!store.areManuscriptsSorted.isActive && store.areManuscriptsSearched) {
                    filteredStoreChunk = constants_1.SEARCHED_MANUSCRIPTS;
                }
            }
            return __assign(__assign({}, store), { 
                // TODO: Change Any type
                filteredManuscripts: store[filteredStoreChunk].filter(function (manuscript) {
                    if (filterParam_1 === constants_1.LARGE_MANUSCRIPTS) {
                        if (manuscript.type === constants_1.MONOGRAPH ||
                            manuscript.type === constants_1.TEACHING_AID) {
                            return true;
                        }
                    }
                    else if (filterParam_1 === constants_1.SMALL_MANUSCRIPTS) {
                        if (manuscript.type === constants_1.SCIENCE_PUBLICATION ||
                            manuscript.type === constants_1.CONFERENCE_THESES) {
                            return true;
                        }
                    }
                }), intersectionParams: __assign(__assign({}, store.intersectionParams), { filter: filterParam_1 }), areManuscriptsFiltered: {
                    isActive: true,
                    byLargeManuscripts: store.areManuscriptsFiltered.byLargeManuscripts
                        ? false
                        : true
                } });
        case SEARCH_MANUSCRIPTS:
            var searcherParam_1 = action.payload.toString().toLowerCase();
            var searchedStoreChunk = constants_1.FETCHED_MANUSCRIPTS;
            if (store.areManuscriptsIntersected) {
                searchedStoreChunk = constants_1.INTERSECTED_MANUSCRIPTS;
            }
            else {
                if (store.areManuscriptsSorted.isActive) {
                    searchedStoreChunk = constants_1.SORTED_MANUSCRIPTS;
                }
                else if (store.areManuscriptsFiltered.isActive) {
                    searchedStoreChunk = constants_1.FILTERED_MANUSCRIPTS;
                }
            }
            return __assign(__assign({}, store), { searchedManuscripts: store[searchedStoreChunk].filter(function (manuscript) {
                    // TODO: Add searching by date
                    var title = manuscript.title, author = manuscript.author, type = manuscript.type;
                    if (title.toString().toLowerCase().includes(searcherParam_1) ||
                        author.toString().toLowerCase().includes(searcherParam_1) ||
                        type.toString().toLowerCase().includes(searcherParam_1)) {
                        return true;
                    }
                }), intersectionParams: __assign(__assign({}, store.intersectionParams), { searcher: searcherParam_1 }), areManuscriptsSearched: true });
        case RESET_STATE:
            return __assign(__assign({}, store), { areManuscriptsIntersected: false, areManuscriptsSearched: false, areManuscriptsSorted: __assign(__assign({}, store.areManuscriptsSorted), { isActive: false }), areManuscriptsFiltered: __assign(__assign({}, store.areManuscriptsFiltered), { isActive: false }) });
        default:
            return initial_state_1["default"];
    }
};
exports["default"] = reducer;
