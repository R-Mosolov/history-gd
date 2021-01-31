/**
 * Connect Redux to the SPA to manage states
 */
import { createStore } from 'redux';

import { MANUSCRIPTS } from '../constants';
import db from '../server/db';

/**
 * Set high level of the SPA
 */
// Get initial state from a DB
let initialState = [];
db
  .collection(MANUSCRIPTS)
  .get()
  .then((docs) => docs.forEach((doc) => initialState.push(doc.data())))
  .catch((error) => console.log(error));

// Create a reducer
const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'CLEAR_STATE':
      state = [];
      return state;

    default:
      return initialState;
  }
};

// Create a store
export const store = createStore(reducer);

// Set action creators
export const clearState = () => ({ type: 'CLEAR_STATE' });