import React, { Component } from "react";

import Box from '@material-ui/core/Box';
import SortIcon from "@material-ui/icons/Sort";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// Dialog dependencies
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import LeftNavigation from "../../../components/left-navigation/left-navigation";
import TopNavigation from "../../../components/top-navigation/top-navigation";
import LargeManuscript from "./images/large-manuscript.svg";
import SmallManuscript from "./images/small-manuscript.svg";
import InfinitySpinner from "../../../assets/infinity-spinner.svg"

import { connect } from 'react-redux';
import db from '../../../server/db';
import { utils } from '../../../utils';
import { 
  MANUSCRIPTS, MANUSCRIPT_TYPES, MONOGRAPH, TEACHING_AID,
  SCIENCE_PUBLICATION, CONFERENCE_THESES 
} from '../../../constants';

import "./manuscripts.css";

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialState: (payload) => dispatch({ type: 'SET_INITIAL_STATE', payload }),
    sortByTitles: (payload) => dispatch({ type: 'SORT_BY_TITLES', payload }),
    sortByAuthors: (payload) => dispatch({ type: 'SORT_BY_AUTHORS', payload }),
    filterByLargeManuscripts: () => dispatch({ type: 'FILTER_BY_LARGE_MANUSCRIPTS' }),
    filterBySmallManuscripts: () => dispatch({ type: 'FILTER_BY_SMALL_MANUSCRIPTS' }),
    resetState: () => dispatch({ type: 'RESET_STATE' }),
  }
};

class Manuscripts extends Component {
  state = {
    isDeletingAlertOpen: false,
    activeManuscript: 1,
  };

  render() {
    const { store, loading } = this.props;

    return (
      <div className="manuscripts">
        <TopNavigation />

        <div className="d-flex">
          <LeftNavigation />

          <div className="work-table col-lg-9">
            <div className="container">
              <h1 className="mt-5 mb-5 text-center">Список рукописей</h1>

              <div class="d-flex justify-content-between align-items-end mb-4">
                <h2>Какой тип работ оставить?</h2>
                <span
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer"
                  }}
                  onClick={() => this.resetState()}
                >
                  Сбросить фильтр
                </span>
              </div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li
                  className="large-manuscripts d-flex align-items-center large-manuscripts"
                  onClick={() => {
                    this.filterByLargeManuscripts();
                  }}
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
                <li
                  className="small-manuscripts d-flex align-items-center small-manuscripts"
                  onClick={() => {
                    this.filterBySmallManuscripts();
                  }}
                >
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
                <input
                  id="search-query"
                  className="input"
                  placeholder="Поисковый запрос..."
                  onChange={(event) => this.searchByManuscripts(event)}
                />
              </div>
              <ul className="mt-4 list-unstyled">
                {
                  (loading)
                    ? <div className="d-flex justify-content-center" style={{ width: 900 + "px" }}>
                      <img src={InfinitySpinner} />
                    </div>
                    : <table className="mt-2 table table-bordered">
                    <thead>
                      <tr>
                        <th className="interactive-th" scope="col">
                          <p className="m-0 text-center">№</p>
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => {
                            this.sortByTitles();
                          }}
                        >
                          Название работы
                          {
                            (this.state.areTitlesSortedByIncrease)
                              ? <SortIcon className="ml-1" />
                              : <SortIcon
                                className="ml-1"
                                style={{ transform: "scale(1, -1)" }}
                              />
                          }
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => {
                            this.sortByAuthors();
                          }}
                        >
                          Автор
                          {
                            (this.state.areAuthorsSortedByIncrease)
                              ? <SortIcon className="ml-1" />
                              : <SortIcon
                                className="ml-1"
                                style={{ transform: "scale(1, -1)" }}
                              />
                          }
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => {
                            this.sortByType();
                          }}
                        >
                          Тип рукописи
                          {
                            (this.state.areTypesSortedByIncrease)
                              ? <SortIcon className="ml-1" />
                              : <SortIcon
                                className="ml-1"
                                style={{ transform: "scale(1, -1)" }}
                              />
                          }
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => {
                            this.sortByCreationDate();
                          }}
                        >
                          Дата добавления
                          {
                            (this.state.areCreationDatesSortedByIncrease)
                              ? <SortIcon className="ml-1" />
                              : <SortIcon
                                className="ml-1"
                                style={{ transform: "scale(1, -1)" }}
                              />
                          }
                        </th>
                        <th scope="col">
                          <Box display="flex" justifyContent="center">
                            Действия
                          </Box>
                        </th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      {
                        [...store.map((manuscript, index) => {
                          return (
                            <tr>
                              <th scope="row">
                                <p className="m-0 text-center">{index += 1}</p>
                              </th>
                              <td>{(manuscript.title) ? manuscript.title.toString() : "–"}</td>
                              <td>{(manuscript.author) ? manuscript.author.toString() : "–"}</td>
                              <td>{(manuscript.type) ? manuscript.type.toString() : "–"}</td>
                              <td>{(manuscript.creationDate) ? utils.convertDateToCustom(manuscript.creationDate) : "–"}</td>
                              <td>
                                <Box display="flex" justifyContent="space-around">
                                  <span style={{ cursor: "pointer" }}>
                                    {<EditIcon/>}
                                  </span>
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => this.handleDeletingManuscript(this.state.isDeletingAlertOpen, manuscript)}
                                  >
                                    {<DeleteIcon />}
                                  </span>
                                </Box>
                              </td>
                            </tr>
                          )
                        })]
                      }
                    </tbody> */}
                  </table>
                }
              </ul>
            </div>
            <Dialog
              open={this.state.isDeletingAlertOpen}
              onClose={() => this.handleDeletingManuscript(this.state.isDeletingAlertOpen)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Уведомление"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Вы уверены, что хотите <b>навсегда</b> удалить рукопись?
                  В случае удаления данную рукопись нельзя будет восстановить.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => this.handleDeletingManuscript(this.state.isDeletingAlertOpen)}
                >
                  Отменить действие
                </Button>
                <Button
                  onClick={() => this.handleDeletingManuscript(this.state.isDeletingAlertOpen)}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => this.deleteManuscriptFromDB(this.state.activeManuscript.id)}
                >
                  Удалить рукопись
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manuscripts);