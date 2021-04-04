var express = require('express');
var router = express.Router();
var auth = require('../db/auth');

var resetPassword = auth.resetPassword;

router.post('/', function (req, res) {
  Promise.resolve(resetPassword(req.query.email));
});

module.exports = router;
