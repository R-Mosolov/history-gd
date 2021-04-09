// Core
import 'firebase/firestore';

// Data
import axios from 'axios';
import { MANUSCRIPTS_ENDPOINT } from '../constants';
import TYPES from './types';

const { READ_ALL_MANUSCRIPTS, UPDATE_ALL_MANUSCRIPTS } = TYPES;

// TODO: Change Any type
export const readAllManuscripts: any = () => async (dispatch: any) => {
  dispatch({ type: READ_ALL_MANUSCRIPTS });

  return axios
    .get(MANUSCRIPTS_ENDPOINT)
    .then(({ data }) =>
      dispatch({
        type: UPDATE_ALL_MANUSCRIPTS,
        payload: data,
      })
    )
    .catch((error) => console.log(error));
};
