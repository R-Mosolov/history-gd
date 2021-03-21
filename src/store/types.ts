import { TypesConfig } from '../configs';

const TYPES: TypesConfig = {
  // App
  SET_AUTHENTICATION: 'SET_AUTHENTICATION',
  UPDATE_ALL_MANUSCRIPTS: 'UPDATE_ALL_MANUSCRIPTS',

  // Manuscripts page
  READ_ALL_MANUSCRIPTS: 'READ_ALL_MANUSCRIPTS',
  DELETE_MANUSCRIPT: 'DELETE_MANUSCRIPT',
  CREATE_MANUSCRIPT: 'CREATE_MANUSCRIPT',
  CHECK_INTERSECTIONS: 'CHECK_INTERSECTIONS',
  SORT_MANUSCRIPTS: 'SORT_MANUSCRIPTS',
  FILTER_MANUSCRIPTS: 'FILTER_MANUSCRIPTS',
  SEARCH_MANUSCRIPTS: 'SEARCH_MANUSCRIPTS',
  RESET_STATE: 'RESET_STATE',

  // Add Manuscript page
  SET_ACTIVE_PICTURE_LINK: 'SET_ACTIVE_PICTURE_LINK',
  UPDATE_ACTIVE_MANUSCRIPT: 'UPDATE_ACTIVE_MANUSCRIPT',
};

export default TYPES;
