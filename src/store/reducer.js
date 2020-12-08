import initialState from './initial-state';

import { utils } from '../utils';
import { MANUSCRIPT_TYPES, MONOGRAPH, TEACHING_AID, SCIENCE_PUBLICATION, CONFERENCE_THESES } from '../constants';

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'FILTER_BY_LARGE_MANUSCRIPTS':
      return state = state.filter((manuscript) => {
        if (
          manuscript.type === utils.getLabelById(MONOGRAPH, MANUSCRIPT_TYPES)
            || manuscript.type === utils.getLabelById(TEACHING_AID, MANUSCRIPT_TYPES)
        ) {
          return true;
        }
      });

    case 'FILTER_BY_SMALL_MANUSCRIPTS':
      return state = state.filter((manuscript) => {
        if (
          manuscript.type === utils.getLabelById(SCIENCE_PUBLICATION, MANUSCRIPT_TYPES)
            || manuscript.type === utils.getLabelById(CONFERENCE_THESES, MANUSCRIPT_TYPES)
        ) {
          return true;
        }
      });

    case 'SORT_TITLE_FROM_A_TO_Z':
      return state = state.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });

    case 'SORT_TITLE_FROM_Z_TO_A':
      return state = state.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });

    default:
      return initialState;
  }
};

export default reducer;
