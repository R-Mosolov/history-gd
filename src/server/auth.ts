import firebase from "firebase/app";
import "firebase/auth";

const createUser = (email: string, password: string) => {
  Promise.resolve(firebase.auth().createUserWithEmailAndPassword(
    email.toString(),
    // Important: Firebase requires only 6 or more symbols in a password
    password.toString()
  ))
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user != null) {
        const email = user.email;
        const uid = user.uid;
        console.log(`User with email ${email} and uid ${uid} successfully added!`);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const checkAuth = (email: string, password: string, cbToAuth: any) => {
  Promise.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
    .then(() => {
      cbToAuth();
      console.log('Authenticated successfully!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

export {
  createUser,
  checkAuth,
};