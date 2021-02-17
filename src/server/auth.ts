import { dbConfig } from '.';

const db = dbConfig.auth;

const getUserId = () => db.currentUser?.uid;

const checkAuth = (
  email: string,
  password: string,
  cbToAuth: () => {},
  cbToUpdateStore: () => {}
) => {
  Promise.resolve(db.signInWithEmailAndPassword(email, password))
    .then(() => console.log('Authenticated successfully!'))
    .then(() => cbToAuth())
    .then(() => cbToUpdateStore())
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

const auth = {
  getUserId,
  checkAuth,
};

export default auth;
