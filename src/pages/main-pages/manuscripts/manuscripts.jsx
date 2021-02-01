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

let manuscriptsList = [];

class Manuscripts extends Component {
  state = {
    manuscriptsList: this.props.manuscriptsList,
    activeManuscript: {},

    haveTitlesSorted: false,
    haveAuthorsSorted: false,
    isCreationDateSorted: false,
    
    areTitlesSortedByIncrease: true,
    areAuthorsSortedByIncrease: true,
    areTypesSortedByIncrease: true,
    areCreationDatesSortedByIncrease: true,

    isDeletingAlertOpen: false,
  };

  updateManuscriptsList() {
    manuscriptsList = [];

    db
      .collection(MANUSCRIPTS)
      .get()
      .then((docs) => docs.forEach((doc) => manuscriptsList.push(doc.data())))
      .then(() => this.setState({
        manuscriptsList: manuscriptsList,
        loading: false
      }))
      .catch((error) => console.log(error));
  }

  /**
   * Set icon positions to sort table columns
   */
  setSortIconForTitles() {
    if (this.state.areTitlesSortedByIncrease) {
      return this.setState({
        areTitlesSortedByIncrease: false,
      });
    } else {
      return this.setState({
        areTitlesSortedByIncrease: true,
      });
    }
  }

  setSortIconForAuthors() {
    if (this.state.areAuthorsSortedByIncrease) {
      return this.setState({
        areAuthorsSortedByIncrease: false,
      });
    } else {
      return this.setState({
        areAuthorsSortedByIncrease: true,
      });
    }
  }

  setSortIconForCreationDates() {
    if (this.state.areCreationDatesSortedByIncrease) {
      return this.setState({
        areCreationDatesSortedByIncrease: false,
      });
    } else {
      return this.setState({
        areCreationDatesSortedByIncrease: true,
      });
    }
  }

  setSortIconForTypes() {
    if (this.state.areTypesSortedByIncrease) {
      return this.setState({
        areTypesSortedByIncrease: false,
      });
    } else {
      return this.setState({
        areTypesSortedByIncrease: true,
      });
    }
  }

  resetState() {
    return this.setState({
      manuscriptsList: manuscriptsList,
    });
  }

  /**
   * Add methods to filter table columns
   */
  filterByLargeManuscripts() {
    // this.props.setInitialState(this.props.store);
    // this.props.resetState();
    this.props.filterByLargeManuscripts();
  }

  filterBySmallManuscripts() {
    // this.props.setInitialState(this.props.store);
    // this.props.resetState();
    this.props.filterBySmallManuscripts();
  }

  /**
   * Add methods to sort table columns
   */
  sortByTitles() {
    this.setSortIconForTitles();
    this.props.sortByTitles(this.state.haveTitlesSorted);
    this.setState({ haveTitlesSorted: (this.state.haveTitlesSorted) ? false : true });
  }

  sortByAuthors() {
    this.setSortIconForAuthors();
    this.props.sortByAuthors(this.state.haveAuthorsSorted);
    this.setState({ haveAuthorsSorted: (this.state.haveAuthorsSorted) ? false : true });
  }

  sortByType() {
    this.setSortIconForTypes();

    this.setState({
      manuscriptsList: this.state.manuscriptsList.sort((a, b) => {
        const typeA = a.type.toUpperCase();
        const typeB = b.type.toUpperCase();

        if (!this.state.isTextSorted) {
          this.setState({
            isTextSorted: true,
          });
          if (typeA < typeB) return -1;
          else if (typeA > typeB) return 1;
        }

        if (this.state.isTextSorted) {
          this.setState({
            isTextSorted: false,
          });
          if (typeA < typeB) return 1;
          else if (typeA > typeB) return -1;
        }

        return 0;
      }),
    });
  }

  sortByCreationDate() {
    this.setSortIconForCreationDates();

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

  /**
   * Add the method to search by table columns
   */
  searchByManuscripts() {
    const searchQuery = document.getElementById('search-query').value.toString().toLowerCase();
    const searchQueryLength = searchQuery.length;

    return this.setState({
      manuscriptsList: manuscriptsList.filter((manuscript) => {
        if (
          manuscript.title.toLowerCase().substring(0, searchQueryLength)
          === searchQuery.substring(0, searchQueryLength)
        ) {
          return true;
        }

        else if (
          manuscript.author.toLowerCase().substring(0, searchQueryLength)
          === searchQuery.substring(0, searchQueryLength)
        ) {
          return true;
        }

        else if (
          manuscript.type.toLowerCase().substring(0, searchQueryLength)
          === searchQuery.substring(0, searchQueryLength)
        ) {
          return true;
        }

        else if (
          manuscript.creationDate.toString().substring(0, searchQueryLength)
          === searchQuery.substring(0, searchQueryLength)
        ) {
          return true;
        }
      }),
    });
  }

  /**
   * Handle editing and deleting a manuscript
   */
  handleDeletingManuscript(isDeletingAlertOpen, manuscript) {
    this.setState({ activeManuscript: manuscript })

    if (isDeletingAlertOpen) {
      this.setState({ isDeletingAlertOpen: false });
    } else {
      this.setState({ isDeletingAlertOpen: true });
    }
  }

  deleteManuscriptFromDB(manuscriptId) {
    // Delete a manuscript from DB
    db.collection(MANUSCRIPTS).get().then((res) => res.forEach(((doc) => {
      console.log(doc.id);

      if (doc.data().id === manuscriptId) {
        db
          .collection(MANUSCRIPTS)
          .doc(doc.id)
          .delete()
          .then(() => console.log(`Document ${manuscriptId} successfully deleted`))
          .catch((err) => console.log(err))
          .then(() => {
            // Hide alert dialog
            this.setState({ isDeletingAlertOpen: false });

            // Update information about manuscripts on frontend
            this.updateManuscriptsList();
          })
      }
    })));
  }

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
                    <tbody>
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
                    </tbody>
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

export default connect(mapStateToProps, mapDispatchToProps)(Manuscripts);