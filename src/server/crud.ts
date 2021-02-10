import { now } from "lodash";
import database from "./db";

function createOne(collection: string, data: object) {
  const docId = now().toString();
  return database
    .collection(collection)
    .doc(docId)
    .set(data)
    .then(() => console.log(`Document ${docId} successfully added.`))
    .catch((err) => console.log(err));
}

function readAll(collection: string) {
  return database
    .collection(collection)
    .get()
    .then((docs: any) => docs.data())
    .catch((err) => console.log(err));
}

function readOne(collection: string, doc: string) {
  return database
    .collection(collection)
    .doc(doc)
    .get()
    .then((doc) => doc.data())
    .catch((err) => console.log(err));
}

function deleteOne(collection: string, doc: string) {
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
