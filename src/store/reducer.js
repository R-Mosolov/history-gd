const initialState = require('./initial-state');

const reducer = (state = initialState, action) => {
  const { manuscriptsList } = state;
  const { type } = action;

  switch (type) {
    case 'SORT_TITLE_FROM_A_TO_Z':
      return manuscriptsList.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });

    case 'SORT_TITLE_FROM_Z_TO_A':
      return manuscriptsList.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });

    default:
      return initialState;
  }
};

module.exports = reducer;