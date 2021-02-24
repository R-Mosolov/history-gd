// Core
import React from 'react';
import { useDropzone } from 'react-dropzone';

// Data
import { storage } from '../server';

// Styles
import '../styles/components/drag-and-drop.scss';

export default function DragAndDrop(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <p key={file.path}>
      Файл: "{file.path}". Размер: {file.size} байт.
    </p>
  ));

  const createDroppedFile = () => {
    const lastIdx = acceptedFiles[0].name.split('.').length - 1;
    const fileExtension = acceptedFiles[0].name.split('.')[lastIdx];
    const fileType = acceptedFiles.type;
    const fileInBlob = new Blob(acceptedFiles, { type: fileType });

    storage.createManuscriptContentFile(
      `${Date.now()}`,
      fileInBlob,
      fileType,
      fileExtension
    );
  };

  return (
    <section className="container field-to-upload">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>
          Чтобы загрузить файл, кликните на это поле или перенесите сюда файл.
        </p>
        <p>
          Принимается <b>только 1 файл</b> в следующем формате: <b>DOCX</b>,{' '}
          <b>PDF</b> или <b>PPTX</b>.
        </p>
      </div>
      <aside>
        <ul>{files}</ul>
        <button onClick={createDroppedFile}>Загрузить файл на сервер</button>
      </aside>
    </section>
  );
}
