// Core
import 'firebase/firestore';

// Data
import { GET, MANUSCRIPTS, MANUSCRIPTS_ENDPOINT } from '../constants';
import TYPES from './types';

const { READ_ALL_MANUSCRIPTS, UPDATE_ALL_MANUSCRIPTS } = TYPES;

// TODO: Change Any type
export const readAllManuscripts: any = () => async (dispatch: any) => {
  dispatch({ type: READ_ALL_MANUSCRIPTS });

  let manuscriptsList: Array<object> = [];
  const url = new URL(MANUSCRIPTS_ENDPOINT);
  const params: any = { collection: MANUSCRIPTS };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  Promise.resolve(
    fetch(MANUSCRIPTS_ENDPOINT, {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  )
    .then((res) => res.json())
    .then((res) => (manuscriptsList = res))
    .then(() =>
      dispatch({ type: UPDATE_ALL_MANUSCRIPTS, payload: manuscriptsList })
    )
    .catch((error) => console.log(error));
};
