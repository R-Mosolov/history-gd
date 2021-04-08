export interface ObjConfig {
  [key: string]: any;
}

// TODO: Delete this config saving only ObjConfig instead
export interface TypesConfig {
  [key: string]: string;
}

export interface InitialStateConfig {
  userId: string | null | undefined;
  isRegistered: boolean;
  isAuthenticated: boolean;
  // TODO: Change Any type
  fetchedManuscripts: any;
  intersectionParams: {
    filter: string | null;
    searcher: string | null;
  };
  intersectedManuscripts: Array<object>;
  filteredManuscripts: Array<object>;
  sortedManuscripts: Array<object>;
  searchedManuscripts: Array<object>;
  areManuscriptsLoading: boolean;
  // TODO: Add sorting by date
  areCreationDatesSorted: boolean;
  areManuscriptsIntersected: boolean;
  areManuscriptsSorted: {
    isActive: boolean;
    byDecrease: boolean;
  };
  areManuscriptsFiltered: {
    isActive: boolean;
    byLargeManuscripts: boolean;
  };
  areManuscriptsSearched: boolean;
}

export interface ManuscriptConfig {
  manuscriptId: string;
  title: string;
  author: string;
  type: string;
}

// TODO: Delete this config saving only ObjConfig instead
// TODO: Change Any type
export interface ActionConfig {
  [key: string]: any;
}
