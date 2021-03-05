import { dbConfig } from '.';

const db = dbConfig.auth;

const getUserId: () => string | null | undefined = () => db.currentUser?.uid;
const getUserEmail: () => any = () => db.currentUser?.email;

const createUser = (email: string, password: string) => {
  Promise.resolve(db.createUserWithEmailAndPassword(email, password))
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        console.info(`Added the user with id ${user.uid} successfully.`);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`${errorCode}: ${errorMessage}`);
    });
};

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
  getUserId,
  getUserEmail,
  createUser,
  checkAuth,
  resetPassword,
};

export default auth;
