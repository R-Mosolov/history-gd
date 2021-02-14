// Core
import firebase from "firebase/app";
import "firebase/auth";
import db from "../server/db";

// Data
import { MANUSCRIPTS } from "../constants";
import TYPES from "./types";

const { READ_ALL_MANUSCRIPTS, UPDATE_ALL_MANUSCRIPTS } = TYPES;

// TODO: Change Any type
export const readAllManuscripts: any = () => async (dispatch: any) => {
  dispatch({ type: READ_ALL_MANUSCRIPTS });

  // console.log('uid:');
  // console.log(firebase.auth().currentUser?.uid);

  let manuscriptsList: Array<object> = [];
  Promise.resolve(db.collection(MANUSCRIPTS).get())
    .then((docs) => docs.forEach((doc) => manuscriptsList.push(doc.data())))
    .then(() => dispatch({ type: UPDATE_ALL_MANUSCRIPTS, payload: manuscriptsList }))
    .catch((error) => console.log(error));
};