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
  areAuthorsSorted: {
    active: Boolean;
    byDecrease: Boolean;
  };
  areTypesSorted: {
    active: Boolean;
    byDecrease: Boolean;
  };
  areCreationDatesSorted: Boolean;
}

// TODO: Change Any types
export interface ActionConfig {
  [key: string]: any;
}
