import { dbConfig } from '.';

const db = dbConfig.storage;

const createManuscriptContent: (
  manuscriptId: string,
  content: string
) => Promise<void> = (manuscriptId, content) => {
  const storageRef = db.ref();
  const manuscriptsRef = storageRef.child(
    `manuscripts-content/manuscript-content-${manuscriptId.toString()}.json`
  );

  const manuscriptContent: object = {
    manuscriptId: manuscriptId.toString(),
    content: content.toString(),
  };
  const manuscriptContentInJSON: Blob = new Blob(
    [JSON.stringify(manuscriptContent, null, 2)],
    { type: 'application/json' }
  );

  return Promise.resolve(manuscriptsRef.put(manuscriptContentInJSON))
    .then(() => console.log('Uploaded a manuscript content!'))
    .catch((err) => console.log(err));
};

const auth: object = {
  createManuscriptContent,
};

export default auth;
