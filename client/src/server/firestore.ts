import { now } from 'lodash';
import { dbConfig } from '.';

const db = dbConfig.firestore;

const createManuscript = (collection: string, data: object) => {
  const docId = now().toString();
  return db
    .collection(collection)
    .doc(docId)
    .set(data)
    .then(() => console.log(`Document ${docId} successfully added.`))
    .catch((err) => console.log(err));
};

// TODO: Finish this function
const readAll = () => {
  return;
};

const updateManuscript: (
  collection: string,
  manuscriptId: string,
  author: string,
  title: string,
  cbToUpdateStore: () => {}
) => Promise<any> = (
  collection,
  manuscriptId,
  author,
  title,
  cbToUpdateStore
) => {
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
      Promise.resolve(
        db.collection(collection).doc(docId).set(
          {
            author: author,
            title: title,
            // TODO: Fix this bug
            // type: utils.getIdByLabel(this.state.type, MANUSCRIPT_TYPES),
          },
          { merge: true }
        )
      ).then(() => {
        cbToUpdateStore();
        console.log(`Document ${docId} successfully updated.`);
      });
    })
    .catch((err) => console.log(err));
};

const deleteManuscript: (
  collection: string,
  manuscriptId: string,
  cbToUpdateStore: () => {}
) => Promise<any> = (collection, manuscriptId, cbToUpdateStore) => {
  return Promise.resolve(db.collection(collection).get())
    .then((res) =>
      res.forEach((doc) => {
        if (doc.data().manuscriptId === manuscriptId) {
          Promise.resolve(db.collection(collection).doc(doc.id).delete()).then(
            () => {
              cbToUpdateStore();
              console.log(`Document ${manuscriptId} successfully deleted`);
              return 'SUCCESS';
            }
          );
        }
      })
    )
    .catch((err) => console.log(err));
};

const firestore = {
  createManuscript,
  readAll,
  updateManuscript,
  deleteManuscript,
};

export default firestore;
