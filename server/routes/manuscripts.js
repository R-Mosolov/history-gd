var express = require('express');
var router = express.Router();
var dbConfig = require('../db/db-config.js');

const db = dbConfig.firestore;

/* GET Manuscripts page. */
router.get('/', function (req, res) {
  let data = [];
  db.collection('manuscripts')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    })
    .then(() => res.send(data))
    .catch((err) => res.send(err));
});

module.exports = router;
