import React from "react";

import "./manuscripts.css";

import LargeManuscript from "./img/large-manuscript.svg";
import SmallManuscript from "./img/small-manuscript.svg";
import LeftNavigation from "../../../components/left-navigation/left-navigation";
import worksBase from "../../../data/manuscripts/works-base";

function Manuscripts() {
  function renderManuscriptList() {
    let manuscriptsListToRender = [];

    for (let i in worksBase) {
      manuscriptsListToRender.push(
        <li>
          <a href={worksBase[i].linkToDetails}>
            {worksBase[i].author} {worksBase[i].title}. {worksBase[i].created}
          </a>
        </li>
      );
    }

    return manuscriptsListToRender;
  }

  return (
    <div className="manuscripts">
      <div className="d-flex">
        <LeftNavigation />

        <div className="work-table col-lg-9">
          <h1 className="mt-5 mb-5 text-center">Список рукописей</h1>

          <h2 className="mb-4">Выберите, что оставить:</h2>
          <ul className="d-flex justify-content-around list-unstyled">
            <li className="large-manuscripts d-flex align-items-center">
              <img
                className="m-2"
                src={LargeManuscript}
                style={{ height: 150 + "px", width: 150 + "px" }}
              />
              <span className="custom-font large-manuscripts__title">
                Крупные работы (монографии, учебники и др.)
              </span>
            </li>
            <li className="small-manuscripts d-flex align-items-center">
              <img
                className="m-2"
                src={SmallManuscript}
                style={{ height: 200 + "px", width: 200 + "px" }}
              />
              <span className="custom-font small-manuscripts__title">
                Малые работы (статьи, тезисы докладов и др.)
              </span>
            </li>
          </ul>

          <h2 className="mt-4 mb-4">Список с учётом фильтра:</h2>
          <ul className="list-unstyled">
            <li>{renderManuscriptList()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Manuscripts;
