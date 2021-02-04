import { InitialStateConfig } from "../configs";

const initialState: InitialStateConfig = {
  fetchedManuscripts: [],
  filteredManuscripts: [],
  sortedManuscripts: [],
  areManuscriptsLoading: true,
  areTitlesSorted: {
    active: false,
    byDecrease: false,
  },
  areAuthorsSorted: {
    active: false,
    byDecrease: false,
  },
  areTypesSorted: {
    active: false,
    byDecrease: false,
  },
  areCreationDatesSorted: false,
};

export default initialState;
