"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var initial_state_1 = require("./initial-state");
var types_1 = require("../store/types");
// Restructure types
var SET_INITIAL_STATE = types_1["default"].SET_INITIAL_STATE,
  SORT_BY_TITLES = types_1["default"].SORT_BY_TITLES,
  SORT_BY_AUTHORS = types_1["default"].SORT_BY_AUTHORS,
  FILTER_BY_LARGE_MANUSCRIPTS = types_1["default"].FILTER_BY_LARGE_MANUSCRIPTS,
  FILTER_BY_SMALL_MANUSCRIPTS = types_1["default"].FILTER_BY_SMALL_MANUSCRIPTS,
  RESET_STATE = types_1["default"].RESET_STATE;
// Create the reducer
var reducer = function (store, action) {
  if (store === void 0) {
    store = initial_state_1["default"];
  }
  switch (action.type) {
    case SET_INITIAL_STATE:
      return action.payload;
    default:
      return initial_state_1["default"];
  }
};
var store = redux_1.createStore(reducer);
exports["default"] = store;
