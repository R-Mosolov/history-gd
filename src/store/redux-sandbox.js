const { createStore } = require('redux');

let initialState = {
  manuscriptsList: [
    {
      "type": "Монография",
      "title": "Название 3",
      "author": "Автор 3",
      "creationDate": 2001,
    },
    {
      "type": "Монография",
      "title": "Название 1",
      "author": "Автор 2",
      "creationDate": 2002,
    },
    {
      "type": "Научная публикация",
      "title": "Название 2",
      "author": "Автор 1",
      "creationDate": 2003,
    }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_BY_TITLE':
      return state.manuscriptsList.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    default:
      return initialState;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(JSON.stringify(store.getState(), null, 2)));

store.dispatch({ type: 'SORT_BY_TITLE' });