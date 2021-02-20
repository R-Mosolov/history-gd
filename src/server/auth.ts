import { dbConfig } from '.';

const db = dbConfig.auth;

const getSessionToken: () => Promise<void> = () => {
  return Promise.resolve(db.currentUser?.getIdToken(/* forceRefresh */ true))
    .then((idToken) => console.log('The user session token is ', idToken))
    .catch((err) => console.error(err));
};
const getUserId: () => string | null | undefined = () => db.currentUser?.uid;
const getUserEmail: () => any = () => db.currentUser?.email;

const checkAuth = (
  email: string,
  password: string,
  cbToAuth: () => {},
  cbToUpdateStore: () => {}
) => {
  Promise.resolve(db.signInWithEmailAndPassword(email, password))
    .then(() => console.log('Authenticated successfully!'))
    .then(() => cbToAuth())
    .then(() => getSessionToken)
    .then(() => cbToUpdateStore())
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

const resetPassword: (email: any) => Promise<void> = (email) => {
  return Promise.resolve(db.sendPasswordResetEmail(email))
    .then(() =>
      console.info(
        `The email to reset an user (${email}) password successfully sent`
      )
    )
    .catch((err) => console.error(err));
};

const auth = {
  getSessionToken,
  getUserId,
  getUserEmail,
  checkAuth,
  resetPassword,
};

export default auth;
