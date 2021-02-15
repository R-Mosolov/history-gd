import firebase from "firebase/app";
import "firebase/auth";
import { InitialStateConfig } from "../configs";

const userId: string | null | undefined = localStorage.getItem('userId');
const isLSUserId: boolean = localStorage.getItem('userId') !== ''
  && localStorage.getItem('userId') !== undefined
  && localStorage.getItem('userId') !== null;

const initialState: InitialStateConfig = {
  userId: (isLSUserId) ? userId : '',
  isAuthenticated: (isLSUserId) ? true : false,
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
