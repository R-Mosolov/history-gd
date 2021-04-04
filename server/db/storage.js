const dbConfig = require('./db-config');

const db = dbConfig.storage;

const postManuscriptContent = (manuscriptId, content) => {
  const storageRef = db.ref();
  const manuscriptsRef = storageRef.child(
    `manuscripts-content/manuscript-content-${manuscriptId.toString()}.json`
  );

  const manuscriptContent = {
    manuscriptId: manuscriptId.toString(),
    content: content.toString(),
  };
  const manuscriptContentInJSON = new Blob(
    [JSON.stringify(manuscriptContent, null, 2)],
    { type: 'application/json' }
  );

  return Promise.resolve(manuscriptsRef.put(manuscriptContentInJSON))
    .then(() => console.log('Uploaded a manuscript content!'))
    .catch((err) => console.log(err));
};

module.exports = {
  postManuscriptContent,
};
