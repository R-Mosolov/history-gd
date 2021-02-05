"use strict";
exports.__esModule = true;
// Core
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var redux_logger_1 = require("redux-logger");
var reducer_1 = require("./reducer");
// Set up logger
// TODO: Add writing logs for only dev mode
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
// TODO: Create dependency with localStorage
var store = redux_1.createStore(
  reducer_1["default"],
  redux_1.applyMiddleware.apply(void 0, middleware)
);
exports["default"] = store;
