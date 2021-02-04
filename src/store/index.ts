// Core
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

// Configs
import { ActionConfig } from "../configs";

import initialState from "./initial-state";
import TYPES from "../store/types";
import { utils } from "../utils";

// Restructure types
const { SET_STATE } = TYPES;

// Create the reducer
const reducer: any = (store = initialState, action: ActionConfig) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...store,
        fetchedManuscripts: action.payload,
        areManuscriptsLoading: false,
      };

    default:
      return initialState;
  }
};

// Set up logger
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

const store: any = createStore(reducer, applyMiddleware(...middleware));

export default store;
