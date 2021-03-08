import { dbConfig } from '.';

const db = dbConfig.storage;
const storageRef = db.ref();

const getPictureLink = (path: string) => {
  return storageRef
    .child(path)
    .getDownloadURL()
    .then((url: string) => {
      console.log('url: ', url);
      return url;
    })
    .catch((err: string | object) => console.error(err));
};

const createManuscriptContent: (
  manuscriptId: string,
  content: string
) => Promise<void> = (manuscriptId, content) => {
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

const createManuscriptContentFile = (
  manuscriptId: string,
  manuscriptFile: any,
  fileType: string,
  fileExtension: string
) => {
  const metadata: object = {
    contentType: fileType,
  };

  // TODO: Check that names are not conflict when we upload few files at one
  const manuscriptsRef = storageRef.child(
    `manuscripts-content/manuscript-content-${manuscriptId.toString()}.${fileExtension.toLowerCase()}`
  );

  return Promise.resolve(manuscriptsRef.put(manuscriptFile, metadata))
    .then(() => console.log('Uploaded a manuscript content file!'))
    .catch((err) => console.log(err));
};

const auth: object = {
  getPictureLink,
  createManuscriptContent,
  createManuscriptContentFile,
};

export default auth;
