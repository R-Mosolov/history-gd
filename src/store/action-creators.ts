import { MANUSCRIPTS } from "../constants";
import TYPES from "./types";
import db from "../server/db";

const { FETCH_STATE, SET_STATE } = TYPES;

// TODO: Change Any types
export const fetchStore: any = () => async (dispatch: any) => {
  dispatch({ type: FETCH_STATE });

  let manuscriptsList: Array<object> = [];
  db.collection(MANUSCRIPTS)
    .get()
    .then((docs) => docs.forEach((doc) => manuscriptsList.push(doc.data())))
    .then(() => dispatch({ type: SET_STATE, payload: manuscriptsList }))
    .catch((error) => console.log(error));
};
