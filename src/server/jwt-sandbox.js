const jwt = require('jsonwebtoken');

const payload = {
  user: 'Михаил Васильевич Ломоносов',
  email: 'MV.Lomonosov@msu.ru'
};
const privateKey = "firstUser";

const token = jwt.sign(
  payload,
  privateKey,
  {
    expiresIn: '5s',
  }
);

setTimeout(() => {
  const data = jwt.verify(token, privateKey);
  console.log(data);
}, 4000);