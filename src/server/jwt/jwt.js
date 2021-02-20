var jwt = require('jsonwebtoken');

var token = jwt.sign(
  {
    data: 'foobar',
  },
  'secret',
  { expiresIn: 5 }
);
console.log(token);

var decoded;
setTimeout(() => {
  decoded = jwt.verify(token, 'secret');
  console.log(decoded.data);
}, 3000); // foobar
setTimeout(() => {
  decoded = jwt.verify(token, 'secret');
  console.log(decoded.data);
}, 7000); // TokenExpiredError: jwt expired
