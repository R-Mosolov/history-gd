import React, { Component } from "react";

import "./manuscripts.css";

import LargeManuscript from "./images/large-manuscript.svg";
import SmallManuscript from "./images/small-manuscript.svg";
import LeftNavigation from "../../../components/left-navigation/left-navigation";
import manuscriptsBase from "../../../states/manuscripts-data/manuscripts-base";
import Searcher from "../../../lib/searcher/searcher";

class Manuscripts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manuscriptsList: manuscriptsBase,

      isTitleSorted: false,
      isAuthorSorted: false,
      isCreationDateSorted: false,
    };
  }

  renderWorkInformation() {
    let manuscriptsList = [];
    let counter = 1;

    for (let manuscript in manuscriptsBase) {
      manuscriptsList.push(
        <tr>
          <th scope="row">
            <p className="m-0 text-center">{counter++}</p>
          </th>
          <td>{this.state.manuscriptsList[manuscript].title}</td>
          <td>{this.state.manuscriptsList[manuscript].author}</td>
          <td>{this.state.manuscriptsList[manuscript].type}</td>
          <td>{this.state.manuscriptsList[manuscript].creationDate}</td>
        </tr>
      );
    }

    return manuscriptsList;
  }

  sortByTitle() {
    this.setState({
      manuscriptsList: this.state.manuscriptsList.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (!this.state.isTitleSorted) {
          this.setState({
            isTitleSorted: true,
          });
          if (titleA < titleB) return -1;
          else if (titleA > titleB) return 1;
        }

        if (this.state.isTitleSorted) {
          this.setState({
            isTitleSorted: false,
          });
          if (titleA < titleB) return 1;
          else if (titleA > titleB) return -1;
        }

        return 0;
      }),
    });
  }

  sortByAuthor() {
    this.setState({
      manuscriptsList: this.state.manuscriptsList.sort((a, b) => {
        const authorA = a.author.toUpperCase();
        const authorB = b.author.toUpperCase();

        if (!this.state.isAuthorSorted) {
          this.setState({
            isAuthorSorted: true,
          });
          if (authorA < authorB) return -1;
          else if (authorA > authorB) return 1;
        }

        if (this.state.isAuthorSorted) {
          this.setState({
            isAuthorSorted: false,
          });
          if (authorA < authorB) return 1;
          else if (authorA > authorB) return -1;
        }

        return 0;
      }),
    });
  }

  sortByType() {
    this.setState({
      manuscriptsList: this.state.manuscriptsList.sort((a, b) => {
        const typeA = a.type.toUpperCase();
        const typeB = b.type.toUpperCase();

        if (!this.state.isTitleSorted) {
          this.setState({
            isTitleSorted: true,
          });
          if (typeA < typeB) return -1;
          else if (typeA > typeB) return 1;
        }

        if (this.state.isTitleSorted) {
          this.setState({
            isTitleSorted: false,
          });
          if (typeA < typeB) return 1;
          else if (typeA > typeB) return -1;
        }

        return 0;
      }),
    });
  }

  sortByCreationDate() {
    this.setState({
      manuscriptsList: this.state.manuscriptsList.sort((a, b) => {
        if (!this.state.isCreationDateSorted) {
          this.setState({
            isCreationDateSorted: true,
          });
          return a.creationDate - b.creationDate;
        } else if (this.state.isCreationDateSorted) {
          this.setState({
            isCreationDateSorted: false,
          });
          return b.creationDate - a.creationDate;
        }
      }),
    });
  }

  filterByLargeManuscripts() {
    this.setState({
      manuscriptsList: this.state.manuscriptsList.filter(
        (manuscripts) => manuscripts.creationDate > 2001
      ),
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

              <h2 className="mb-4">Какой тип работ оставить?</h2>
              <ul className="d-flex justify-content-between list-unstyled">
                <li
                  className="large-manuscripts d-flex align-items-center large-manuscripts"
                  onClick={() => {
                    this.filterByLargeManuscripts();
                  }}
                >
                  <img
                    className="m-2 large-manuscripts__banner"
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
                        onClick={() => {
                          this.sortByTitle();
                        }}
                      >
                        Название работы
                      </th>
                      <th
                        className="interactive-th"
                        scope="col"
                        onClick={() => {
                          this.sortByAuthor();
                        }}
                      >
                        Автор
                      </th>
                      <th
                        className="interactive-th"
                        scope="col"
                        onClick={() => {
                          this.sortByType();
                        }}
                      >
                        Тип рукописи
                      </th>
                      <th
                        className="interactive-th"
                        scope="col"
                        onClick={() => {
                          this.sortByCreationDate();
                        }}
                      >
                        Дата добавления
                      </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderWorkInformation()}</tbody>
                </table>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Manuscripts;
