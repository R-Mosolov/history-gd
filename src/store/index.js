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
// Core
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var redux_logger_1 = require("redux-logger");
var initial_state_1 = require("./initial-state");
var types_1 = require("../store/types");
// Restructure types
var SET_STATE = types_1["default"].SET_STATE;
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
    default:
      return initial_state_1["default"];
  }
};
// Set up logger
var logger = redux_logger_1.createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: function () {
      return "lightblue";
    },
    prevState: function () {
      return "blue";
    },
    action: function () {
      return "green";
    },
    nextState: function () {
      return "orange";
    },
    error: function () {
      return "red";
    },
  },
});
var middleware = [redux_thunk_1["default"], logger];
var store = redux_1.createStore(
  reducer,
  redux_1.applyMiddleware.apply(void 0, middleware)
);
exports["default"] = store;
