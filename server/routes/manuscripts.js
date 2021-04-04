var express = require('express');
var router = express.Router();
var firestore = require('../db/firestore');

var getAll = firestore.getAll;
var postOne = firestore.postOne;
var deleteOne = firestore.deleteOne;

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

router.delete('/', function (req, res) {
  Promise.resolve(deleteOne(req.query.collection, req.query.id))
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

module.exports = router;
