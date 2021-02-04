export interface TypesConfig {
  [key: string]: string;
}

export interface InitialStateConfig {
  fetchedManuscripts: Array<object>;
  filteredManuscripts: Array<object>;
  sortedManuscripts: Array<object>;
  areManuscriptsLoading: Boolean;
  areTitlesSortedByIncrease: Boolean;
  areAuthorsSortedByIncrease: Boolean;
  areTypesSortedByIncrease: Boolean;
  areCreationDatesSortedByIncrease: Boolean;
}

// TODO: Change Any types
export interface ActionConfig {
  [key: string]: any;
}
