// Core
import firebase from 'firebase';
import 'firebase/firestore';

// Data
import { MANUSCRIPTS } from '../constants';
import TYPES from './types';

const { READ_ALL_MANUSCRIPTS, UPDATE_ALL_MANUSCRIPTS } = TYPES;

// TODO: Change Any type
export const readAllManuscripts: any = () => async (dispatch: any) => {
  dispatch({ type: READ_ALL_MANUSCRIPTS });

  let manuscriptsList: Array<object> = [];
  Promise.resolve(fetch('http://localhost:4000/manuscripts'))
    .then((res) => res.json())
    .then((res) => manuscriptsList = res)
    .then(() =>
      dispatch({ type: UPDATE_ALL_MANUSCRIPTS, payload: manuscriptsList })
    )
    .catch((error) => console.log(error));
};
