"use strict";
exports.__esModule = true;
// TODO: Change Any types
var initialState = {
  fetchedManuscripts: [],
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
    byDecrease: false,
  },
  areManuscriptsFiltered: {
    isActive: false,
    byLargeManuscripts: false,
  },
  areManuscriptsSearched: false,
};
exports["default"] = initialState;
