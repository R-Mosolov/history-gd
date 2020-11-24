import db from './connection';

let docs = [];

function getAll(collectionName) {
  // DRAFT 2
  return db
    .collection(collectionName)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
          docs.push(doc.data());
      });
    })
    .finally((result) => {
      console.log(result);
      return result;
    });

  // DRAFT 1
  // const collection = db.collection(collectionName);
  // return await collection
  //   .get()
  //   .then((snapshot) => {
  //     return snapshot.forEach(doc => docs.push(doc.data()));
  //   });

  // console.log(docs);
  // return docs;
}

// getAll();

export { getAll, docs };