const dbConfig = require('./db-config');

const db = dbConfig.auth;

const resetPassword = (email) => {
  return Promise.resolve(db.sendPasswordResetEmail(email))
    .then(() =>
      console.info(
        `The email to reset an user (${email}) password successfully sent`
      )
    )
    .catch((err) => console.error(err));
};

module.exports = {
  resetPassword,
};
