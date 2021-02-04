"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
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
var SET_STATE = types_1["default"].SET_STATE,
  SORT_MANUSCRIPTS = types_1["default"].SORT_MANUSCRIPTS,
  FILTER_MANUSCRIPTS = types_1["default"].FILTER_MANUSCRIPTS;
// Create the reducer
var reducer = function (store, action) {
  if (store === void 0) {
    store = initial_state_1["default"];
  }
  switch (action.type) {
    case SET_STATE:
      return __assign(__assign({}, store), {
        fetchedManuscripts: action.payload,
        areManuscriptsLoading: false,
      });
    case SORT_MANUSCRIPTS:
      // TODO: Change Any types
      var sorterParam_1 = action.payload;
      return __assign(__assign({}, store), {
        // TODO: Change Any types
        sortedManuscripts: store.fetchedManuscripts.sort(function (a, b) {
          var aParam = a["" + sorterParam_1].toUpperCase();
          var bParam = b["" + sorterParam_1].toUpperCase();
          if (store.areManuscriptsSorted.byDecrease) {
            if (aParam < bParam) return -1;
            if (aParam > bParam) return 1;
          } else {
            if (aParam < bParam) return 1;
            if (aParam > bParam) return -1;
          }
          return 0;
        }),
        areManuscriptsSorted: {
          isActive: true,
          byDecrease: store.areManuscriptsSorted.byDecrease ? false : true,
        },
      });
    case FILTER_MANUSCRIPTS:
      // TODO: Change Any types
      var filterParam_1 = action.payload;
      return __assign(__assign({}, store), {
        // TODO: Change Any types
        filteredManuscripts: store.fetchedManuscripts.filter(function (
          manuscript
        ) {
          if (filterParam_1 === "largeManuscripts") {
            if (
              manuscript.type ===
                utils_1.utils.getLabelById(
                  constants_1.MONOGRAPH,
                  constants_1.MANUSCRIPT_TYPES
                ) ||
              manuscript.type ===
                utils_1.utils.getLabelById(
                  constants_1.TEACHING_AID,
                  constants_1.MANUSCRIPT_TYPES
                )
            ) {
              return true;
            }
          } else if (filterParam_1 === "smallManuscripts") {
            if (
              manuscript.type ===
                utils_1.utils.getLabelById(
                  constants_1.SCIENCE_PUBLICATION,
                  constants_1.MANUSCRIPT_TYPES
                ) ||
              manuscript.type ===
                utils_1.utils.getLabelById(
                  constants_1.CONFERENCE_THESES,
                  constants_1.MANUSCRIPT_TYPES
                )
            ) {
              return true;
            }
          }
        }),
        areManuscriptsFiltered: {
          isActive: true,
          byLargeManuscripts: store.areManuscriptsFiltered.byLargeManuscripts
            ? false
            : true,
        },
      });
    default:
      return initial_state_1["default"];
  }
};
exports["default"] = reducer;
