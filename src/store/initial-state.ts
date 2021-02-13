import { InitialStateConfig } from "../configs";

const isAuthenticatedLS: boolean = localStorage.getItem('isAuthenticated') === 'true';

const initialState: InitialStateConfig = {
  isAuthenticated: (isAuthenticatedLS) ? true : false,
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
};

export default initialState;
