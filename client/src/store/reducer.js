import { auth } from '../server';
import initialState from './initial-state';
import TYPES from './types';

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
  CREATE,
} from '../constants';
import { utils } from '../utils';

// Restructure types
const {
  // App
  UPDATE_ALL_MANUSCRIPTS,
  SET_AUTHENTICATION,
  SET_REGISTRATION,

  // Manuscripts page
  CHECK_INTERSECTIONS,
  SORT_MANUSCRIPTS,
  FILTER_MANUSCRIPTS,
  SEARCH_MANUSCRIPTS,
  RESET_STATE,

  // Add Manuscript page
  SET_ACTIVE_PICTURE_LINK,
  UPDATE_ACTIVE_MANUSCRIPT,
} = TYPES;

// Create the reducer
const reducer = (store = initialState, action) => {
  const {
    isRegistered,
    isAuthenticated,
    intersectionParams,
    areManuscriptsIntersected,
    areManuscriptsFiltered,
    areManuscriptsSearched,
    areManuscriptsSorted,
    filteredManuscripts,
    searchedManuscripts,
    sortedManuscripts,
    fetchedManuscripts,
    activeManuscriptContent,
  } = store;
  const { filter, searcher } = intersectionParams;
  const userId = auth.getUserId();

  switch (action.type) {
    /**
     * App
     */
    case SET_REGISTRATION:
      return {
        ...store,
        isRegistered: true,
      };
    case SET_AUTHENTICATION:
      return {
        ...store,
        userId: isAuthenticated ? undefined : userId,
        isAuthenticated: isAuthenticated ? false : true,
      };
    case UPDATE_ALL_MANUSCRIPTS:
      return {
        ...store,
        userId: userId,
        isAuthenticated: true,
        fetchedManuscripts: userId
          ? action.payload.filter((manuscript) => manuscript.userId === userId)
          : action.payload,
        areManuscriptsLoading: false,
      };

    /**
     * Manuscripts page
     */
    case CHECK_INTERSECTIONS:
      const NOTAll =
        !areManuscriptsFiltered.isActive &&
        !areManuscriptsSearched &&
        !areManuscriptsSorted.isActive;
      const manuscriptsOnlyFiltered =
        areManuscriptsFiltered.isActive &&
        !areManuscriptsSearched &&
        !areManuscriptsSorted.isActive;
      const manuscriptsOnlySearched =
        !areManuscriptsFiltered.isActive &&
        areManuscriptsSearched &&
        !areManuscriptsSorted.isActive;
      const manuscriptsOnlySorted =
        !areManuscriptsFiltered.isActive &&
        !areManuscriptsSearched &&
        areManuscriptsSorted.isActive;

      if (NOTAll) {
        return {
          ...store,
          areManuscriptsIntersected: false,
        };
      } else if (manuscriptsOnlyFiltered) {
        return {
          ...store,
          areManuscriptsIntersected: false,
          intersectedManuscripts: filteredManuscripts,
        };
      } else if (manuscriptsOnlySearched) {
        return {
          ...store,
          areManuscriptsIntersected: false,
          intersectedManuscripts: searchedManuscripts,
        };
      } else if (manuscriptsOnlySorted) {
        return {
          ...store,
          areManuscriptsIntersected: false,
          intersectedManuscripts: sortedManuscripts,
        };
      } else {
        return {
          ...store,
          areManuscriptsIntersected: true,
          intersectedManuscripts: fetchedManuscripts.filter((manuscript) => {
            // TODO: Add searching by date
            const { title, author, type } = manuscript;
            const filterParam = filter;

            if (filterParam === LARGE_MANUSCRIPTS) {
              if (
                (type === MONOGRAPH || type === TEACHING_AID) &&
                (title
                  .toString()
                  .toLowerCase()
                  .includes(searcher.toString().toLowerCase()) ||
                  author
                    .toString()
                    .toLowerCase()
                    .includes(searcher.toString().toLowerCase()) ||
                  utils
                    .getLabelById(type, MANUSCRIPT_TYPES)
                    .toString()
                    .toLowerCase()
                    .includes(searcher.toString().toLowerCase()))
              ) {
                return true;
              }
            } else if (filterParam === SMALL_MANUSCRIPTS) {
              if (
                (type === SCIENCE_PUBLICATION ||
                  type === CONFERENCE_THESES ||
                  type === OTHER) &&
                (title
                  .toString()
                  .toLowerCase()
                  .includes(searcher.toString().toLowerCase()) ||
                  author
                    .toString()
                    .toLowerCase()
                    .includes(searcher.toString().toLowerCase()) ||
                  utils
                    .getLabelById(type, MANUSCRIPT_TYPES)
                    .toString()
                    .toLowerCase()
                    .includes(searcher.toString().toLowerCase()))
              ) {
                return true;
              }
            }
          }),
        };
      }

    case SORT_MANUSCRIPTS:
      const sorterParam = action.payload;
      let sortedStoreChunk = FETCHED_MANUSCRIPTS;

      if (areManuscriptsIntersected) {
        sortedStoreChunk = INTERSECTED_MANUSCRIPTS;
      } else {
        if (areManuscriptsFiltered.isActive && !areManuscriptsSearched) {
          sortedStoreChunk = FILTERED_MANUSCRIPTS;
        } else if (!areManuscriptsFiltered.isActive && areManuscriptsSearched) {
          sortedStoreChunk = SEARCHED_MANUSCRIPTS;
        }
      }

      return {
        ...store,
        // TODO: Change Any type
        sortedManuscripts: store[sortedStoreChunk].sort((a, b) => {
          const aParam = a[`${sorterParam}`].toLowerCase();
          const bParam = b[`${sorterParam}`].toLowerCase();

          if (areManuscriptsSorted.byDecrease) {
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
          byDecrease: areManuscriptsSorted.byDecrease ? false : true,
        },
      };

    case FILTER_MANUSCRIPTS:
      const filterParam = action.payload;
      let filteredStoreChunk = FETCHED_MANUSCRIPTS;

      if (areManuscriptsIntersected) {
        filteredStoreChunk = INTERSECTED_MANUSCRIPTS;
      } else {
        if (areManuscriptsSorted.isActive && !areManuscriptsSearched) {
          filteredStoreChunk = SORTED_MANUSCRIPTS;
        } else if (!areManuscriptsSorted.isActive && areManuscriptsSearched) {
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
              manuscript.type === CONFERENCE_THESES ||
              manuscript.type === OTHER
            ) {
              return true;
            }
          }
        }),
        intersectionParams: {
          ...intersectionParams,
          filter: filterParam,
        },
        areManuscriptsFiltered: {
          isActive: true,
          byLargeManuscripts: areManuscriptsFiltered.byLargeManuscripts
            ? false
            : true,
        },
      };

    case SEARCH_MANUSCRIPTS:
      const searcherParam = action.payload.toString().toLowerCase().trim();
      let searchedStoreChunk = FETCHED_MANUSCRIPTS;

      if (areManuscriptsIntersected) {
        searchedStoreChunk = INTERSECTED_MANUSCRIPTS;
      } else {
        if (areManuscriptsSorted.isActive) {
          searchedStoreChunk = SORTED_MANUSCRIPTS;
        } else if (areManuscriptsFiltered.isActive) {
          searchedStoreChunk = FILTERED_MANUSCRIPTS;
        }
      }

      return {
        ...store,
        searchedManuscripts: store[FETCHED_MANUSCRIPTS].filter((manuscript) => {
          // TODO: Add searching by date
          const { title, author, type } = manuscript;

          if (
            title.toString().toLowerCase().includes(searcherParam) ||
            author.toString().toLowerCase().includes(searcherParam) ||
            utils
              .getLabelById(type, MANUSCRIPT_TYPES)
              .toString()
              .toLowerCase()
              .includes(searcherParam)
          ) {
            return true;
          }
        }),
        intersectionParams: {
          ...intersectionParams,
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
          ...areManuscriptsSorted,
          isActive: false,
        },
        areManuscriptsFiltered: {
          ...areManuscriptsFiltered,
          isActive: false,
        },
      };

    /**
     * Add Manuscript page
     */
     case SET_ACTIVE_PICTURE_LINK:
      const { fileId, fileExtension } = action.payload;
      const activePictureLink =
        'manuscripts-content/manuscript-content-' +
        `${fileId.toString()}.${fileExtension.toLowerCase()}`;

      return {
        ...store,
        activePictureLink: activePictureLink,
      };

    case UPDATE_ACTIVE_MANUSCRIPT:
      const payload = action.payload;

      return {
        ...store,
        activeManuscriptContent:
          payload.operation === CREATE
            ? (activeManuscriptContent.push({
                id: payload.id,
                type: payload.type,
                content: payload.content,
              }),
              activeManuscriptContent)
            : ((activeManuscriptContent.filter(
                (content) => content.id === payload.id
              )[0].content = payload.content),
              activeManuscriptContent),
      };

    default:
      return initialState;
  }
};

export default reducer;
