import { createStore } from 'redux';
import { ActionConfig } from '../configs';

import { 
  MANUSCRIPTS, MANUSCRIPT_TYPES, MONOGRAPH, TEACHING_AID,
  SCIENCE_PUBLICATION, CONFERENCE_THESES 
} from '../constants';
import initialState from './initial-state';
import TYPES from '../store/types';
import { utils } from '../utils';

// Restructure types
const {
  SET_INITIAL_STATE,
  SORT_BY_TITLES,
  SORT_BY_AUTHORS,
  FILTER_BY_LARGE_MANUSCRIPTS,
  FILTER_BY_SMALL_MANUSCRIPTS,
  RESET_STATE
} = TYPES;

// Create the reducer
const reducer: any = (store = initialState, action: ActionConfig) => {
  switch(action.type) {
    case SET_INITIAL_STATE:
      return action.payload;
    
    default:
      return initialState;
  }
};

const store: any = createStore(reducer);

export default store;