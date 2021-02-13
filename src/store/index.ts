// Core
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducer from "./reducer.js";

// Set up logger
// TODO: Add writing logs for only dev mode
const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => "lightblue",
    prevState: () => "blue",
    action: () => "green",
    nextState: () => "orange",
    error: () => "red",
  },
});

const middleware = [thunk, logger];

// TODO: Create dependency with localStorage
const store: any = createStore(reducer, applyMiddleware(...middleware));

export default store;
