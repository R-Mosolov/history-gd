var express = require('express');
var router = express.Router();
var { auth } = require('../db/db-config');

// TODO: Reset / on /reset-password on client side
router.post('/', function (req, res) {
  auth
    .sendPasswordResetEmail(req.body.email)
    .then(function () {
      res.send({ success: `Email sent to ${req.body.email} successfully!` });
    })
    .catch(function (errorText) {
      res.send({ error: errorText });
    });
});

router.post('/check-auth', function (req, res) {
  auth
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(function () {
      res.send({
        success: `The user with email ${req.body.email} authenticated successfully!`,
      });
    })
    .catch(function (errorText) {
      res.send({ error: errorText });
    });
});

module.exports = router;
