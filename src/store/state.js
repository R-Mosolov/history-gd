const { createStore } = require('redux');
const reducer = require('./reducer');
const { sortTitleFromAToZ, sortTitleFromZToA } = require('./action-creators');

const store = createStore(reducer);
const { dispatch } = store;

store.subscribe(() => {
  return console.log(
    JSON.stringify(store.getState(), null, 2)
  );
});

dispatch(sortTitleFromAToZ());