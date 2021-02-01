import { createStore } from 'redux';

import { 
  MANUSCRIPTS, MANUSCRIPT_TYPES, MONOGRAPH, TEACHING_AID,
  SCIENCE_PUBLICATION, CONFERENCE_THESES 
} from '../constants';
import { utils } from '../utils';

const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
const SORT_BY_TITLES = 'SORT_BY_TITLES';
const SORT_BY_AUTHORS = 'SORT_BY_AUTHORS';
const FILTER_BY_LARGE_MANUSCRIPTS = 'FILTER_BY_LARGE_MANUSCRIPTS';
const FILTER_BY_SMALL_MANUSCRIPTS = 'FILTER_BY_SMALL_MANUSCRIPTS';
const RESET_STATE = 'RESET_STATE';

// Set initial state
const initialState = [];

// Create the reducer
const reducer = (store = initialState, action) => {
  const payload = action.payload;
  
  switch(action.type) {
    case SET_INITIAL_STATE:
      return store = action.payload;
    
    case SORT_BY_TITLES:
      return store = store.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (action.payload) {
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
        } 
        else {
          if (titleA < titleB) return 1;
          if (titleA > titleB) return -1;
        }
        return 0;
      });

    case SORT_BY_AUTHORS:
      return store = store.sort((a, b) => {
        const authorA = a.author.toLowerCase();
        const authorB = b.author.toLowerCase();

        if (action.payload) {
          if (authorA < authorB) return -1;
          if (authorA > authorB) return 1;
        } 
        else {
          if (authorA < authorB) return 1;
          if (authorA > authorB) return -1;
        }
        return 0;
      });

    case FILTER_BY_LARGE_MANUSCRIPTS:
      return store.filter((manuscript) => {
        if (
          manuscript.type === utils.getLabelById(MONOGRAPH, MANUSCRIPT_TYPES)
          || manuscript.type === utils.getLabelById(TEACHING_AID, MANUSCRIPT_TYPES)
        ) {
          return true;
        }
      });

    case FILTER_BY_SMALL_MANUSCRIPTS:
      return store.filter((manuscript) => {
        if (
          manuscript.type === utils.getLabelById(SCIENCE_PUBLICATION, MANUSCRIPT_TYPES)
          || manuscript.type === utils.getLabelById(CONFERENCE_THESES, MANUSCRIPT_TYPES)
        ) {
          return true;
        }
      })

    case RESET_STATE:
      return store = payload;
    
    default:
      return initialState;
  }
};

const store = createStore(reducer);

export default store;