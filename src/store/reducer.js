import initialState from './initial-state';

import { utils } from '../utils';
import { MANUSCRIPT_TYPES, MONOGRAPH, TEACHING_AID } from '../constants';

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

    default:
      return initialState;
  }
};

export default reducer;
