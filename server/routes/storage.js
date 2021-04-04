var express = require('express');
var router = express.Router();
var storage = require('../db/storage');

var postManuscriptContent = storage.postManuscriptContent;

router.post('/', function (req, res) {
  Promise.resolve(postManuscriptContent(req.query.manuscriptId, req.body));
});

module.exports = router;
