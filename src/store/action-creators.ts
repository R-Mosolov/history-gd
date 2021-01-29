const filterByLargeManuscripts: object = () => ({ type: 'FILTER_BY_LARGE_MANUSCRIPTS' });
const filterBySmallManuscripts: object = () => ({ type: 'FILTER_BY_SMALL_MANUSCRIPTS' });
const sortTitleFromAToZ: object = () => ({ type: 'SORT_TITLE_FROM_A_TO_Z' });
const sortTitleFromZToA: object = () => ({ type: 'SORT_TITLE_FROM_Z_TO_A' });

export {
  filterByLargeManuscripts,
  filterBySmallManuscripts,
  sortTitleFromAToZ,
  sortTitleFromZToA,
};
