import { createStore } from 'redux';
import reducer from './reducer';
import { sortTitleFromAToZ } from './action-creators';

const store = createStore(reducer);
export const { dispatch } = store;