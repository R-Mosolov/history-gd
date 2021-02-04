"use strict";
exports.__esModule = true;
var initialState = {
  fetchedManuscripts: [],
  filteredManuscripts: [],
  sortedManuscripts: [],
  areManuscriptsLoading: true,
  areTitlesSorted: {
    active: false,
    byDecrease: false,
  },
  areAuthorsSorted: {
    active: false,
    byDecrease: false,
  },
  areTypesSorted: {
    active: false,
    byDecrease: false,
  },
  areCreationDatesSorted: false,
};
exports["default"] = initialState;
