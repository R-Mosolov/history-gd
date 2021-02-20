/**
 * THE MODULE DESCRIPTION
 * This module connects to NoSQL DBMS (Google Firebase)
 * using special access (API key, etc.),
 * then exports this access for using other needed services
 * (Firestore, Authentication, Storage, etc.)
 */

// Core
import firebase from 'firebase/app';

// Needed Firebase services
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '../.env';

interface FirebaseTypes {
  [key: string]: string | undefined;
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

// Connect main Google Firebase's services (Firestore, Authentication, Storage, etc.)
const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const dbConfig = {
  firestore,
  auth,
  storage,
};

export default dbConfig;
