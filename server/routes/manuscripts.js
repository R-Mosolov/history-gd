var express = require('express');
var router = express.Router();
var firestore = require('../db/firestore');

var getAll = firestore.getAll;
var postOne = firestore.postOne;

router.get('/', function (req, res) {
  Promise.resolve(getAll())
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

router.post('/', function (req, res) {
  Promise.resolve(postOne(req.query.collection, req.body))
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

module.exports = router;
