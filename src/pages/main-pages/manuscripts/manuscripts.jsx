import React from "react";
import { connect } from "react-redux";

import "./manuscripts.css";

import LargeManuscript from "./images/large-manuscript.svg";
import SmallManuscript from "./images/small-manuscript.svg";
import LeftNavigation from "../../../components/left-navigation/left-navigation";
import Searcher from "../../../lib/searcher/searcher";
import TopNavigation from "../../../components/top-navigation/top-navigation";

function Manuscripts({ initialState, filterByLargeManuscripts }) {
  return (
    <div className="manuscripts">
      <TopNavigation />

      <div className="d-flex">
        <LeftNavigation />

        <div className="work-table col-lg-9">
          <div className="container">
            <h1 className="mt-5 mb-5 text-center">Список рукописей</h1>

            <h2 className="mb-4">Какой тип работ оставить?</h2>
            <ul className="d-flex justify-content-between list-unstyled">
              <li
                className="large-manuscripts d-flex align-items-center large-manuscripts"
                onClick={filterByLargeManuscripts}
              >
                <img
                  className="m-2 large-manuscripts__banner"
                  alt="Manuscript"
                  src={LargeManuscript}
                  style={{ height: 150 + "px", width: 150 + "px" }}
                />
                <span className="custom-font large-manuscripts__title">
                  Крупные работы (монографии, учебники и др.)
                </span>
              </li>
              <li className="small-manuscripts d-flex align-items-center small-manuscripts">
                <img
                  className="m-2 small-manuscripts__banner"
                  alt="Papyrus"
                  src={SmallManuscript}
                  style={{ height: 180 + "px", width: 180 + "px" }}
                />
                <span className="custom-font small-manuscripts__title">
                  Малые работы (статьи, тезисы докладов и др.)
                </span>
              </li>
            </ul>

            <div className="mt-5 d-flex justify-content-between">
              <h2>Список с учётом фильтра:</h2>
              <Searcher />
            </div>
            <ul className="mt-4 list-unstyled">
              <table className="mt-2 table table-bordered">
                <thead>
                  <tr>
                    <th className="interactive-th" scope="col">
                      <p className="m-0 text-center">№</p>
                    </th>
                    <th
                      className="interactive-th"
                      scope="col"
                    >
                      Название работы
                    </th>
                    <th
                      className="interactive-th"
                      scope="col"
                    >
                      Автор
                    </th>
                    <th
                      className="interactive-th"
                      scope="col"
                    >
                      Тип рукописи
                    </th>
                    <th
                      className="interactive-th"
                      scope="col"
                    >
                      Дата добавления
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...initialState.map((manuscript, index) => {
                      return (
                        <tr>
                          <th scope="row">
                            <p className="m-0 text-center">{index += 1}</p>
                          </th>
                          <td>{manuscript.title}</td>
                          <td>{manuscript.author}</td>
                          <td>{manuscript.type}</td>
                          <td>{manuscript.creationDate}</td>
                        </tr>
                      )
                    })
                  ]}
                </tbody>
              </table>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialState: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterByLargeManuscripts: () => dispatch({ type: 'FILTER_BY_LARGE_MANUSCRIPTS' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Manuscripts);
