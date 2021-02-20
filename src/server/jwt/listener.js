const express = require('express');
// TODO: Delete this dependency to up security level
const cors = require('cors');

const app = express();
const port = 9999;

app.use(cors());

app.get('/', (req, res) => {
  res.send({ text: 'Test' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
