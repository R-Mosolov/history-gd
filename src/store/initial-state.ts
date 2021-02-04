import { InitialStateConfig } from "../configs";

const initialState: InitialStateConfig = {
  fetchedManuscripts: [],
  filteredManuscripts: [],
  sortedManuscripts: [],
  areManuscriptsLoading: true,
  areTitlesSortedByIncrease: false,
  areAuthorsSortedByIncrease: false,
  areTypesSortedByIncrease: false,
  areCreationDatesSortedByIncrease: false,
};

export default initialState;
