export interface TypesConfig {
  [key: string]: string;
}

export interface InitialStateConfig {
  // TODO: Add sorting by date
  fetchedManuscripts: any;
  filteredManuscripts: Array<object>;
  sortedManuscripts: Array<object>;
  searchedManuscripts: Array<object>;
  areManuscriptsLoading: Boolean;
  // TODO: Add sorting by date
  areCreationDatesSorted: Boolean;
  areManuscriptsSorted: {
    isActive: Boolean;
    byDecrease: Boolean;
  };
  areManuscriptsFiltered: {
    isActive: Boolean;
    byLargeManuscripts: Boolean;
  };
  areManuscriptsSearched: Boolean;
}

// TODO: Change Any types
export interface ActionConfig {
  [key: string]: any;
}
