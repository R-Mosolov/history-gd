import React from "react";

import manuscriptsBase from "../../../data/manuscripts/manuscripts-base";
import manuscriptsDetails from "../../../data/manuscripts/manuscripts-details";

import LeftNavigation from "../../../components/left-navigation/left-navigation";

function FullManuscript({ addNewText, deleteAllText }) {
  return (
    <div className="full-manuscript">
      <div className="d-flex">
        <LeftNavigation />

        <div className="work-table col-lg-9">
          <div className="container">
            <h1 className="mt-5 text-center">{manuscriptsBase[2].title}</h1>

            <h3 className="mt-4 text-center">
              {manuscriptsBase[2].author}, {manuscriptsBase[2].creationDate}
            </h3>

            {manuscriptsDetails.map((manuscript) => {
              return <p className="mt-4 text-justify">{manuscript.content}</p>;
            })}

            <div className="d-flex">
              <button
                className="mt-3 ml-5 btn btn-success"
                id="add-new-text"
                onClick={addNewText}
              >
                Добавить текст
              </button>
              <button
                className="mt-3 ml-3 btn btn-danger"
                id="delete-all-text"
                onClick={deleteAllText}
              >
                Удалить текст
              </button>
              <button
                className="mt-3 ml-3 btn btn-warning"
                id="delete-all-text"
                onClick={deleteAllText}
              >
                Перевести текст в PDF
              </button>
            </div>

            <form
              className="container border rounded"
              method="POST"
              action="pdfMake\pdf"
            >
              <div className="mt-3 mb-4 d-flex justify-content-center">
                <button className="btn btn-success" type="submit">
                  Создать файл PDF
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullManuscript;
