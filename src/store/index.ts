import { createStore } from 'redux';
import reducer from './reducer';

const store: void = createStore(reducer);

export default store;
