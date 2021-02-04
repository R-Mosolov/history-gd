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
  areAuthorsSorted: false,
  areTypesSorted: false,
  areCreationDatesSorted: false,
};

export default initialState;
