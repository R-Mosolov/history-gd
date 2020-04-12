import React from "react";

import manuscriptsBase from "../../states/manuscripts-data/manuscripts-base";
import LeftNavigation from "../left-navigation/left-navigation";

function FullManuscript({monographText, addNewText, deleteAllText}) {
    return (
        <div className="full-manuscript">
            <div className="d-flex">
                <LeftNavigation />

                <div className="work-table col-lg-9">
                    <h1 className="mt-5 text-center">
                        {manuscriptsBase[2].title}
                    </h1>

                    <h3 className="mt-4 text-center">
                        {manuscriptsBase[2].author}, {manuscriptsBase[2].created}
                    </h3>

                    <p className="mt-4 pl-5 pr-5 text-justify">
                        {monographText}
                    </p>

                    <div className="d-flex">
                        <button
                            className="mt-3 ml-5 btn btn-success"
                            id="add-new-text"
                            onClick={addNewText}>
                            Добавить текст
                        </button>
                        <button
                            className="mt-3 ml-3 btn btn-danger"
                            id="delete-all-text"
                            onClick={deleteAllText}>
                            Удалить текст
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullManuscript;
