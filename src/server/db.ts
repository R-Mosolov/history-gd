import firebase from "firebase/app";
import "firebase/firestore";

import {
  API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID,
  STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID,
} from '../env';

interface FirebaseTypes {
  [key: string]: string | undefined,
}

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig: FirebaseTypes = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
