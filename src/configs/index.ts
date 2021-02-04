export interface TypesConfig {
  [key: string]: string;
}

export interface InitialStateConfig {
  fetchedManuscripts: Array<object>;
  filteredManuscripts: Array<object>;
  sortedManuscripts: Array<object>;
  areTitlesSortedByIncrease: Boolean;
  areAuthorsSortedByIncrease: Boolean;
  areTypesSortedByIncrease: Boolean;
  areCreationDatesSortedByIncrease: Boolean;
}

export interface ActionConfig {
  [key: string]: string;
}
