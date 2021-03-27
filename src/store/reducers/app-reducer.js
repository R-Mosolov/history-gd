import { auth } from '../../server';
import initialState from '../initial-state';
import TYPES from '../types';

// Restructure types
const {
  UPDATE_ALL_MANUSCRIPTS,
  SET_REGISTRATION,
  SET_AUTHENTICATION,
} = TYPES;

// Create the reducer
const appReducer = (store = initialState, action) => {
  const { isAuthenticated } = store;
  const userId = auth.getUserId();

  switch (action.type) {
    case SET_REGISTRATION:
      return {
        ...store,
        isRegistered: true,
      };
    case SET_AUTHENTICATION:
      return {
        ...store,
        userId: isAuthenticated ? undefined : userId,
        isAuthenticated: isAuthenticated ? false : true,
      };
    case UPDATE_ALL_MANUSCRIPTS:
      return {
        ...store,
        userId: userId,
        isAuthenticated: true,
        fetchedManuscripts: userId
          ? action.payload.filter((manuscript) => manuscript.userId === userId)
          : action.payload,
        areManuscriptsLoading: false,
      };

    default:
      return initialState;
  }
};

export default appReducer;