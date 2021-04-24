import { InitialStateConfig } from '../configs';

const initialState: InitialStateConfig = {
  /**
   * App
   */
  userId: undefined,
  isAuthenticated: false,

  /**
   * Manuscripts page
   */
  // TODO: Add the feature to save an user manuscripts in LS
  fetchedManuscripts: [],
  intersectionParams: {
    filter: null,
    searcher: null,
  },
  intersectedManuscripts: [],
  filteredManuscripts: [],
  sortedManuscripts: [],
  searchedManuscripts: [],
  areManuscriptsLoading: true,
  // TODO: Add sorting by date
  areCreationDatesSorted: false,
  areManuscriptsIntersected: false,
  areManuscriptsSorted: {
    isActive: false,
    byDecrease: false,
  },
  areManuscriptsFiltered: {
    isActive: false,
    byLargeManuscripts: false,
  },
  areManuscriptsSearched: false,

  /**
   * Add Manuscript page
   */
  activePictureLink: null,
  activeManuscriptContent: [],
};

export default initialState;