"use strict";
exports.__esModule = true;
var initialState = {
    fetchedManuscripts: [],
    intersectionParams: {
        filter: null,
        searcher: null
    },
    intersectedManuscripts: [],
    filteredManuscripts: [],
    sortedManuscripts: [],
    searchedManuscripts: [],
    areManuscriptsLoading: true,
    // TODO: Add sorting by date
    areCreationDatesSorted: false,
    areManuscriptsIntersected: false,
    areManuscriptsSorted: {
        isActive: false,
        byDecrease: false
    },
    areManuscriptsFiltered: {
        isActive: false,
        byLargeManuscripts: false
    },
    areManuscriptsSearched: false
};
exports["default"] = initialState;
