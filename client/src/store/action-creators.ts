// Core
import 'firebase/firestore';

// Data
import { MANUSCRIPTS_ENDPOINT } from '../constants';
import TYPES from './types';

const { READ_ALL_MANUSCRIPTS, UPDATE_ALL_MANUSCRIPTS } = TYPES;

// TODO: Change Any type
export const readAllManuscripts: any = () => async (dispatch: any) => {
  dispatch({ type: READ_ALL_MANUSCRIPTS });

  let manuscriptsList: Array<object> = [];
  Promise.resolve(fetch(MANUSCRIPTS_ENDPOINT))
    .then((res) => res.json())
    .then((res) => (manuscriptsList = res))
    .then(() =>
      dispatch({ type: UPDATE_ALL_MANUSCRIPTS, payload: manuscriptsList })
    )
    .catch((error) => console.log(error));
};
