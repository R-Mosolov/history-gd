// Configs
import { ActionConfig, InitialStateConfig } from "../configs";

import initialState from "./initial-state";
import TYPES from "./types";

import {
  MANUSCRIPT_TYPES,
  MONOGRAPH,
  TEACHING_AID,
  SCIENCE_PUBLICATION,
  CONFERENCE_THESES,
  OTHER,
  LARGE_MANUSCRIPTS,
  SMALL_MANUSCRIPTS,
  FETCHED_MANUSCRIPTS,
  INTERSECTED_MANUSCRIPTS,
  FILTERED_MANUSCRIPTS,
  SEARCHED_MANUSCRIPTS,
  SORTED_MANUSCRIPTS,
} from "../constants";
import { utils } from "../utils";

// Restructure types
const {
  UPDATE_ALL_MANUSCRIPTS,
  SET_AUTHENTICATION,
  CHECK_INTERSECTIONS,
  SORT_MANUSCRIPTS,
  FILTER_MANUSCRIPTS,
  SEARCH_MANUSCRIPTS,
  RESET_STATE,
} = TYPES;

// Create the reducer
const reducer = (store = initialState, action) => {
  switch (action.type) {

    /**
     * App
     */
    case UPDATE_ALL_MANUSCRIPTS:
      return {
        ...store,
        fetchedManuscripts: action.payload,
        areManuscriptsLoading: false,
      };
    case SET_AUTHENTICATION:
      return {
        ...store,
        isAuthenticated: true,
      };

    /**
     * Manuscripts page
     */
    case CHECK_INTERSECTIONS:
      const { areManuscriptsFiltered, areManuscriptsSearched, areManuscriptsSorted } = store;

      const NOTAll = !areManuscriptsFiltered.isActive && !areManuscriptsSearched && !areManuscriptsSorted.isActive;
      const manuscriptsOnlyFiltered = areManuscriptsFiltered.isActive && !areManuscriptsSearched && !areManuscriptsSorted.isActive;
      const manuscriptsOnlySearched = !areManuscriptsFiltered.isActive && areManuscriptsSearched && !areManuscriptsSorted.isActive;
      const manuscriptsOnlySorted = !areManuscriptsFiltered.isActive && !areManuscriptsSearched && areManuscriptsSorted.isActive;

      if (NOTAll) {
        return {
          ...store,
          areManuscriptsIntersected: false,
        };
      } else if (manuscriptsOnlyFiltered) {
        return {
          ...store,
          areManuscriptsIntersected: false,
          intersectedManuscripts: store.filteredManuscripts,
        };
      } else if (manuscriptsOnlySearched) {
        return {
          ...store,
          areManuscriptsIntersected: false,
          intersectedManuscripts: store.searchedManuscripts,
        };
      }  else if (manuscriptsOnlySorted) {
        return {
          ...store,
          areManuscriptsIntersected: false,
          intersectedManuscripts: store.sortedManuscripts,
        };
      } else {
        return {
          ...store,
          areManuscriptsIntersected: true,
          intersectedManuscripts: store.fetchedManuscripts.filter((manuscript) => {
            // TODO: Add searching by date
            const { title, author, type } = manuscript;
            const filterParam = store.intersectionParams.filter;

            if (filterParam === LARGE_MANUSCRIPTS) {
              if (
                (type === MONOGRAPH || type === TEACHING_AID)
                && (
                  title.includes(store.intersectionParams.searcher.toString().toLowerCase())
                  || author.includes(store.intersectionParams.searcher.toString().toLowerCase())
                  || utils.getLabelById(type, MANUSCRIPT_TYPES).toLowerCase()
                    .includes(store.intersectionParams.searcher.toString().toLowerCase())
                )
              ) {
                return true;
              }
            } else if (filterParam === SMALL_MANUSCRIPTS) {
              if (
                (type === SCIENCE_PUBLICATION || type === CONFERENCE_THESES || type === OTHER)
                && (
                  title.includes(store.intersectionParams.searcher.toString().toLowerCase())
                  || author.includes(store.intersectionParams.searcher.toString().toLowerCase())
                  || utils.getLabelById(type, MANUSCRIPT_TYPES).toLowerCase()
                    .includes(store.intersectionParams.searcher.toString().toLowerCase())
                )
              ) {
                return true;
              }
            }
          }),
        };
      }

    case SORT_MANUSCRIPTS:
      const sorterParam = action.payload;
      return {
        ...store,
        // TODO: Change Any type
        sortedManuscripts: store[FETCHED_MANUSCRIPTS].sort((a, b) => {
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
      const filterParam = action.payload;
      let filteredStoreChunk = FETCHED_MANUSCRIPTS;

      if (store.areManuscriptsIntersected) {
        filteredStoreChunk = INTERSECTED_MANUSCRIPTS;
      } else {
        if (store.areManuscriptsSorted.isActive && !store.areManuscriptsSearched) {
          filteredStoreChunk = SORTED_MANUSCRIPTS;
        } else if (!store.areManuscriptsSorted.isActive && store.areManuscriptsSearched) {
          filteredStoreChunk = SEARCHED_MANUSCRIPTS;
        }
      }

      return {
        ...store,
        // TODO: Change Any type
        filteredManuscripts: store[filteredStoreChunk].filter((manuscript) => {
          if (filterParam === LARGE_MANUSCRIPTS) {
            if (
              manuscript.type === MONOGRAPH ||
              manuscript.type === TEACHING_AID
            ) {
              return true;
            }
          } else if (filterParam === SMALL_MANUSCRIPTS) {
            if (
              manuscript.type === SCIENCE_PUBLICATION ||
              manuscript.type === CONFERENCE_THESES
            ) {
              return true;
            }
          }
        }),
        intersectionParams: {
          ...store.intersectionParams,
          filter: filterParam,
        },
        areManuscriptsFiltered: {
          isActive: true,
          byLargeManuscripts: store.areManuscriptsFiltered.byLargeManuscripts
            ? false
            : true,
        },
      };

    case SEARCH_MANUSCRIPTS:
      const searcherParam = action.payload.toString().toLowerCase();
      let searchedStoreChunk = FETCHED_MANUSCRIPTS;

      if (store.areManuscriptsIntersected) {
        searchedStoreChunk = INTERSECTED_MANUSCRIPTS;
      } else {
        if (store.areManuscriptsSorted.isActive) {
          searchedStoreChunk = SORTED_MANUSCRIPTS;
        } else if (store.areManuscriptsFiltered.isActive) {
          searchedStoreChunk = FILTERED_MANUSCRIPTS;
        }
      }

      return {
        ...store,
        searchedManuscripts: store[searchedStoreChunk].filter((manuscript) => {
          // TODO: Add searching by date
          const { title, author, type } = manuscript;

          if (
            title.toString().toLowerCase().includes(searcherParam) ||
            author.toString().toLowerCase().includes(searcherParam) ||
            type.toString().toLowerCase().includes(searcherParam)
          ) {
            return true;
          }
        }),
        intersectionParams: {
          ...store.intersectionParams,
          searcher: searcherParam,
        },
        areManuscriptsSearched: true,
      };

    case RESET_STATE:
      return {
        ...store,
        areManuscriptsIntersected: false,
        areManuscriptsSearched: false,
        areManuscriptsSorted: {
          ...store.areManuscriptsSorted,
          isActive: false,
        },
        areManuscriptsFiltered: {
          ...store.areManuscriptsFiltered,
          isActive: false,
        },
      };

    default:
      return initialState;
  }
};

export default reducer;
