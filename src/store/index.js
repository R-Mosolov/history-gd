import { createStore } from 'redux';

const initialState = [];

const reducer = (store = initialState, action) => {
  switch(action.type) {
    case 'SET_INITIAL_STATE':
      return store = action.payload;
    
    case 'SORT_BY_TITLES':
      return store = store.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (action.payload) {
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
        } 
        else {
          if (titleA < titleB) return 1;
          if (titleA > titleB) return -1;
        }
        return 0;
      });
    
    default:
      return initialState;
  }
};

const store = createStore(reducer);

export default store;