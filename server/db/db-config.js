/**
 * THE MODULE DESCRIPTION
 * This module connects to NoSQL DBMS (Google Firebase)
 * using special access (API key, etc.),
 * then exports this access for using other needed services
 * (Firestore, Authentication, Storage, etc.)
 */

// Core
const firebase = require('firebase/app');

// Needed Firebase services
require('firebase/firestore');

const {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = require('../.env.js');

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
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

exports.firestore = firestore;
