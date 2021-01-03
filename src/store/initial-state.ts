import database from '../server/db';
import { MANUSCRIPTS } from '../constants';

let initialState: any = [];

database
  .collection(MANUSCRIPTS)
  .get()
  .then((docs) => docs.forEach((doc) => initialState.push(doc.data())))
  .then(() => console.log(initialState))
  .then(() => console.log('Step 1'))
  .catch((err) => console.log(err));


// async function f() {
//   return console.log('Step 1');
// }

// f().then((res) => res);


console.log('Step 2');

export default initialState;