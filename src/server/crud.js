import database from './db';

const { v4: uuidv4 } = require('uuid');

function createOne(collection, data) {
  const docId = uuidv4();
  return database
    .collection(collection)
    .doc(docId)
    .set(data)
    .then(() => console.log(`Document ${docId} successfully added.`))
    .catch((err) => console.log(err));
}

function readAll(collection) {
  return database
    .collection(collection)
    .get()
    .then((docs) => docs.data())
    .catch((err) => console.log(err));
}

function readOne(collection, doc) {
  return database
    .collection(collection)
    .doc(doc)
    .get()
    .then((doc) => doc.data())
    .catch((err) => console.log(err));
}

function deleteOne(collection, doc) {
  return database
    .collection(collection)
    .doc(doc)
    .delete()
    .then(() => console.log(`Document ${doc} successfully deleted`))
    .catch((err) => console.log(err));
}

const db = {
  createOne,
  readAll,
  readOne,
  deleteOne,
};

export default db;
