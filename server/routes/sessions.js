var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var SECRET_KEY = 'secret-key';

/* GET home page. */
router.post('/create-token', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var token = jwt.sign(
    {
      email: email,
      password: password,
    },
    SECRET_KEY,
    // TODO: Change this value on '8h' before production
    { expiresIn: 20 }
  );
  res.send({ success: token });
});

router.get('/check-token', function (req, res) {
  var token = req.query.token;
  jwt.verify(token, SECRET_KEY, function (err, decoded) {
    if (err) {
      res.send({ error: 'Token expired' });
    } else {
      res.send({ success: 'Authenticated successfully' });
    }
  });
});

module.exports = router;
