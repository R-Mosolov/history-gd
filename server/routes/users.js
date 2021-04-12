var express = require('express');
var router = express.Router();
var { auth, firestore } = require('../db/db-config');

router.post('/reset-password', function (req, res) {
  const { email } = req.body;
  Promise.resolve(auth.sendPasswordResetEmail(email))
    .then(function () {
      res.send({ success: `Email sent to ${email} successfully!` });
    })
    .catch(function (errorText) {
      res.send({ error: errorText });
    });
});

router.post('/check-auth', function (req, res) {
  const { email, password } = req.body;
  Promise.resolve(auth.signInWithEmailAndPassword(email, password))
    .then(function (userCredential) {
      var user = userCredential.user;
      res.send({
        success: user.uid,
      });
    })
    .catch(function (errorText) {
      res.send({ error: errorText });
    });
});

router.post('/main-info', function (req, res) {
  const { email, password } = req.body;
  Promise.resolve(auth.createUserWithEmailAndPassword(email, password))
    .then(function (userCredential) {
      const user = userCredential.user;
      if (user) {
        res.send({
          success: `Added the user with id ${user.uid} successfully.`,
        });
      }
    })
    .catch(function (error) {
      const { code, message } = error;
      res.send({ error: `${code}: ${message}` });
    });
});

router.post('/additional-info', function (req, res) {
  Promise.resolve(firestore.collection('users').add(req.body))
    .then((docRef) => {
      res.send({
        success: `Document written with ID: ${docRef.id}`,
      });
    })
    .catch((error) => {
      res.send({ error: `Error adding document: ${error}` });
    });
});

module.exports = router;
