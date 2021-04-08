const dbConfig = require('./db-config');
const { now } = require('lodash');

const db = dbConfig.firestore;

const getAll = () => {
  let data = [];
  return Promise.resolve(db.collection('manuscripts').get())
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    })
    .then(() => data)
    .catch((err) => err);
};

const postOne = (collection, data) => {
  const docId = now().toString();
  return Promise.resolve(db.collection(collection).doc(docId).set(data))
    .then(() => `Document ${docId} successfully added.`)
    .catch((err) => console.log(err));
};

const putOne = (collection, manuscriptId, body) => {
  return Promise.resolve(
    db.collection(collection).where('manuscriptId', '==', manuscriptId).get()
  )
    .then((querySnapshot) => {
      let docId = '';
      querySnapshot.forEach((doc) => {
        docId = doc.id;
      });
      return docId;
    })
    .then((docId) => {
      return db.collection(collection).doc(docId).set(
        {
          author: body.author,
          title: body.title,
          // TODO: Fix this bug
          // type: utils.getIdByLabel(this.state.type, MANUSCRIPT_TYPES),
        },
        { merge: true }
      );
    });
};

const deleteOne = (collection, manuscriptId) => {
  return Promise.resolve(db.collection(collection).get())
    .then((res) =>
      res.forEach((doc) => {
        // TODO: Add logic for Else scenarios
        if (doc.data().manuscriptId === manuscriptId) {
          Promise.resolve(db.collection(collection).doc(doc.id).delete());
        }
      })
    )
    .catch((err) => console.log(err));
};

module.exports = {
  getAll,
  postOne,
  putOne,
  deleteOne,
};
