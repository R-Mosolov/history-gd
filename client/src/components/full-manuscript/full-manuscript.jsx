import React from "react";

import manuscriptsBase from "../../states/manuscripts-data/manuscripts-base";
import manuscriptsDetails from "../../states/manuscripts-data/manuscripts-details";

import LeftNavigation from "../left-navigation/left-navigation";

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullManuscript;
