export interface TypesConfig {
  [key: string]: string;
}

export interface InitialStateConfig {
  fetchedManuscripts: Array<object>;
  filteredManuscripts: Array<object>;
  sortedManuscripts: Array<object>;
  areManuscriptsLoading: Boolean;
  areTitlesSorted: {
    active: Boolean;
    byDecrease: Boolean;
  };
  areAuthorsSorted: Boolean;
  areTypesSorted: Boolean;
  areCreationDatesSorted: Boolean;
}

// TODO: Change Any types
export interface ActionConfig {
  [key: string]: any;
}
