import React, { Component } from "react";

import "./manuscripts.css";

import LargeManuscript from "./img/large-manuscript.svg";
import SmallManuscript from "./img/small-manuscript.svg";
import LeftNavigation from "../../../components/left-navigation/left-navigation";
import manuscriptOnlyTitles from "../../../states/manuscripts-data/manuscript-only-titles";
import "./sort-manuscripts";

class Manuscripts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manuscriptTitles: manuscriptOnlyTitles,
    };
  }

  sortByTitle() {
    this.setState({
      date: this.state.manuscriptTitles.reverse(),
    });
  }

  render() {
    return (
      <div className="manuscripts">
        <div className="d-flex">
          <LeftNavigation />

          <div className="work-table col-lg-9">
            <div className="container">
              <h1 className="mt-5 mb-5 text-center">Список рукописей</h1>

              <h2 className="mb-4">Выберите, что оставить:</h2>
              <ul className="d-flex justify-content-between list-unstyled">
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

              <div className="d-flex justify-content-between">
                <h2 className="mt-4">Список с учётом фильтра:</h2>
                <div className="btn-group mt-3" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-secondary"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => this.sortByTitle()}
                  >
                    Сортировать по названию
                  </button>
                </div>
              </div>
              <ul className="mt-3 list-unstyled">
                {this.state.manuscriptTitles.map((manuscript) => {
                  return <li>{manuscript}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Manuscripts;
