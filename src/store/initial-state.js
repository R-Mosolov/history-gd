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
  areAuthorsSorted: false,
  areTypesSorted: false,
  areCreationDatesSorted: false,
};
exports["default"] = initialState;
