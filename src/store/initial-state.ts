import firebase from "firebase/app";
import "firebase/auth";
import { InitialStateConfig } from "../configs";

const userId = firebase.auth().currentUser?.uid;
const isUserIdInLS = localStorage.getItem('userId') !== undefined;
const isAuthenticatedInLS = localStorage.getItem('isAuthenticated') === 'true';

const initialState: InitialStateConfig = {
  userId: (isUserIdInLS) ? userId : undefined,
  isAuthenticated: (isAuthenticatedInLS) ? true : false,
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
