var express = require('express');
var router = express.Router();
var firestore = require('../db/firestore');

var getAll = firestore.getAll;
var postOne = firestore.postOne;
var putOne = firestore.putOne;
var deleteOne = firestore.deleteOne;

router.get('/', function (req, res) {
  Promise.resolve(getAll(req.query.collection))
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

router.post('/', function (req, res) {
  Promise.resolve(postOne(req.query.collection, req.body));
});

router.put('/', function (req, res) {
  const { collection, id } = req.query;
  Promise.resolve(putOne(collection, id, req.body));
});

router.delete('/', function (req, res) {
  const { collection, id } = req.query;
  Promise.resolve(deleteOne(collection, id));
});

module.exports = router;
