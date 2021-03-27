// Core
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducer';
import appReducer from './reducers/app-reducer';
import manuscriptsReducer from './reducers/manuscripts-reducer';

// Set up logger
// TODO: Add writing logs for only dev mode
const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => 'lightblue',
    prevState: () => 'blue',
    action: () => 'green',
    nextState: () => 'orange',
    error: () => 'red',
  },
});

const middleware = [thunk, logger];
const rootReducer = combineReducers({ appReducer, manuscriptsReducer });

// TODO: Create dependency with localStorage
const store: any = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
