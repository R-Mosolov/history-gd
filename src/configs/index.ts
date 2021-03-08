export interface TypesConfig {
  [key: string]: string;
}

export interface InitialStateConfig {
  /**
   * App
   */
  userId: string | null | undefined;
  isAuthenticated: boolean;

  /**
   * Manuscripts page
   */
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

  /**
   * Add Manuscript page
   */
  activePictureLink: string | null;
}

// TODO: Change Any type
export interface ActionConfig {
  [key: string]: any;
}
