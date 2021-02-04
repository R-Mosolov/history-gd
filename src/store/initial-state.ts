import { InitialStateConfig } from "../configs";

const initialState: InitialStateConfig = {
  fetchedManuscripts: [],
  filteredManuscripts: [],
  sortedManuscripts: [],
  areManuscriptsLoading: true,
  areManuscriptsSorted: {
    isActive: false,
    byDecrease: false,
  },
  areCreationDatesSorted: false,
};

export default initialState;
