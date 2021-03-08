// Core
import React from 'react';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';

// Data
import TYPES from '../store/types';
import { storage } from '../server';

// Styles
import '../styles/components/drag-and-drop.scss';

const { SET_ACTIVE_PICTURE_LINK } = TYPES;

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePictureLink: (fileId, fileExtension) => dispatch({ type: SET_ACTIVE_PICTURE_LINK, payload: {
      fileId: fileId,
      fileExtension: fileExtension,
    } }),
  };
};

function DragAndDrop({
  computerFormats,
  humanFormats,
  maxFileSizeInMB = null,
  setActivePictureLink,
}) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: computerFormats, // The value should be a string, ex.: 'image/jpeg, image/png'
  });

  const files = acceptedFiles.map((file) => (
    <p key={file.path}>
      Файл: "{file.path}". Размер: {file.size} байт.
    </p>
  ));

  const createDroppedFile = () => {
    const fileId = Date.now().toString();
    const lastIdx = acceptedFiles[0].name.split('.').length - 1;
    const fileExtension = acceptedFiles[0].name.split('.')[lastIdx];
    const fileType = acceptedFiles.type;
    const fileInBlob = new Blob(acceptedFiles, { type: fileType });

    return Promise.resolve(storage.createManuscriptContentFile(
        fileId,
        fileInBlob,
        fileType,
        fileExtension
      )).then(() => setActivePictureLink(fileId, fileExtension));
  };

  const renderFormatsToAccept = (humanFormats) => {
    // TODO: Move this function to Utils directory
    const isLastIdx = (arr, idx) => arr.length - 1 === idx;
    let result = '';

    humanFormats.forEach((item, idx) => {
      isLastIdx(humanFormats, idx)
        ? (result += item + '.')
        : (result += item + ', ');
    });

    return result;
  };

  return (
    <section className="container field-to-upload">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>
          Чтобы загрузить файл, кликните на это поле или перенесите файл сюда.
        </p>
        <p>
          Принимается <b>только 1 файл</b>
          {maxFileSizeInMB && ` размером не более ${maxFileSizeInMB} Мб`} в
          следующем формате:
          {' ' + renderFormatsToAccept(humanFormats)}
        </p>
      </div>
      <aside>
        <ul>{files}</ul>
        <button
          id="btn-to-upload-image"
          onClick={createDroppedFile}
          style={{ display: 'none' }}
        >
          Загрузить файл на сервер
        </button>
      </aside>
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
