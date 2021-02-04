// Configs
import { ActionConfig } from "../configs";

import initialState from "./initial-state";
import TYPES from "../store/types";

import {
  MANUSCRIPTS,
  MANUSCRIPT_TYPES,
  MONOGRAPH,
  TEACHING_AID,
  SCIENCE_PUBLICATION,
  CONFERENCE_THESES,
} from "../constants";
import { utils } from "../utils";

// Restructure types
const { SET_STATE, SORT_MANUSCRIPTS, FILTER_MANUSCRIPTS } = TYPES;

// Create the reducer
const reducer: any = (store = initialState, action: ActionConfig) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...store,
        fetchedManuscripts: action.payload,
        areManuscriptsLoading: false,
      };

    case SORT_MANUSCRIPTS:
      // TODO: Change Any types
      const sorterParam: String = action.payload;

      return {
        ...store,
        // TODO: Change Any types
        sortedManuscripts: store.fetchedManuscripts.sort((a: any, b: any) => {
          const aParam = a[`${sorterParam}`].toUpperCase();
          const bParam = b[`${sorterParam}`].toUpperCase();

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
      };

    case FILTER_MANUSCRIPTS:
      // TODO: Change Any types
      const filterParam: String = action.payload;

      return {
        ...store,
        // TODO: Change Any types
        filteredManuscripts: store.fetchedManuscripts.filter((manuscript) => {
          if (filterParam === "largeManuscripts") {
            if (
              manuscript.type ===
                utils.getLabelById(MONOGRAPH, MANUSCRIPT_TYPES) ||
              manuscript.type ===
                utils.getLabelById(TEACHING_AID, MANUSCRIPT_TYPES)
            ) {
              return true;
            }
          } else if (filterParam === "smallManuscripts") {
            if (
              manuscript.type ===
                utils.getLabelById(SCIENCE_PUBLICATION, MANUSCRIPT_TYPES) ||
              manuscript.type ===
                utils.getLabelById(CONFERENCE_THESES, MANUSCRIPT_TYPES)
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
      };

    default:
      return initialState;
  }
};

export default reducer;
