const express = require('express');
var jwt = require('jsonwebtoken');

const app = express();
const port = 9999;

app.get('/', (req, res) => {
  var token = jwt.sign(
    {
      data: 'foobar',
    },
    'secret',
    { expiresIn: 5 }
  );
  res.send(token);
  
  var decoded;
  setTimeout(() => {
    decoded = jwt.verify(token, 'secret');
    res.send(decoded.data);
  }, 3000); // foobar
  setTimeout(() => {
    decoded = jwt.verify(token, 'secret');
    res.send(decoded.data);
  }, 7000); // TokenExpiredError: jwt expired
  

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
