// Core
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

// Configs
import { ActionConfig } from "../configs";

import initialState from "./initial-state";
import TYPES from "../store/types";

// Restructure types
const { SET_STATE, SORT_BY_TITLES } = TYPES;

// Create the reducer
const reducer: any = (store = initialState, action: ActionConfig) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...store,
        fetchedManuscripts: action.payload,
        areManuscriptsLoading: false,
      };

    case SORT_BY_TITLES:
      return {
        ...store,
        // TODO: Change Any types
        sortedManuscripts: store.fetchedManuscripts.sort((a: any, b: any) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          if (store.areTitlesSorted.byDecrease) {
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
          } else {
            if (titleA < titleB) return 1;
            if (titleA > titleB) return -1;
          }
          return 0;
        }),
        areTitlesSorted: {
          active: true,
          byDecrease: store.areTitlesSorted.byDecrease ? false : true,
        },
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
