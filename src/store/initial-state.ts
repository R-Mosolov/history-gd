import firebase from "firebase/app";
import "firebase/auth";
import { InitialStateConfig } from "../configs";

const isUserIdLS: boolean = localStorage.getItem('userId') !== '';
const isAuthenticatedLS: boolean = localStorage.getItem('isAuthenticated') === 'true';

const initialState: InitialStateConfig = {
  userId: (isUserIdLS) ? firebase.auth().currentUser?.uid : '',
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
