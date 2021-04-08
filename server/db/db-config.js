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
require('firebase/storage');
require('firebase/auth');

const { env } = require('../.env.js');

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
  measurementId: env.measurementId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Connect main Google Firebase's services (Firestore, Authentication, Storage, etc.)
const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

module.exports = {
  firestore,
  storage,
  auth,
};
