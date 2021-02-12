// TODO: Rewrite this module in TypeScript

// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { readAllManuscripts } from "../../../store/action-creators";
import { v4 as uuidv4 } from "uuid";

// Icons
import Box from "@material-ui/core/Box";
import SortIcon from "@material-ui/icons/Sort";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// Dialog windows
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from '@material-ui/lab/Autocomplete';

// Components
import LeftNavigation from "../../../components/left-navigation/left-navigation";
import TopNavigation from "../../../components/top-navigation/top-navigation";
import LargeManuscript from "./images/large-manuscript.svg";
import SmallManuscript from "./images/small-manuscript.svg";
import InfinitySpinner from "../../../assets/infinity-spinner.svg";

// Data
import db from "../../../server/db";
import { utils } from "../../../utils";
import TYPES from "../../../store/types";
import {
  MANUSCRIPTS,
  MANUSCRIPT_TYPES,
  FETCHED_MANUSCRIPTS,
  INTERSECTED_MANUSCRIPTS,
  FILTERED_MANUSCRIPTS,
  SEARCHED_MANUSCRIPTS,
  SORTED_MANUSCRIPTS
} from "../../../constants";

// Styles
import "./manuscripts.css";

const {
  CHECK_INTERSECTIONS,
  SORT_MANUSCRIPTS,
  FILTER_MANUSCRIPTS,
  SEARCH_MANUSCRIPTS,
  RESET_STATE,
} = TYPES;

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // TODO: Add only finished actions instead of a dispatcher here
    actions: bindActionCreators({ readAllManuscripts }, dispatch),
    sortManuscripts: (payload) => {
      dispatch({ type: SORT_MANUSCRIPTS, payload: payload });
      dispatch({ type: CHECK_INTERSECTIONS });
    },
    filterManuscripts: (payload) => {
      dispatch({ type: FILTER_MANUSCRIPTS, payload: payload });
      dispatch({ type: CHECK_INTERSECTIONS });
    },
    searchManuscripts: (payload) => {
      dispatch({ type: SEARCH_MANUSCRIPTS, payload: payload });
      dispatch({ type: CHECK_INTERSECTIONS, payload: payload });
    },
    resetState: () => dispatch({ type: RESET_STATE }),
  };
};

class Manuscripts extends Component {
  static defaultProps = {
    actions: {
      readAllManuscripts: () => {},
    },
    options: [{title: "Test"}],
    getOptionLabel: (option) => option.title,
  };

  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      author: '',
      type: '',
      isUpdatingDialogOpen: false,
      isDeletingDialogOpen: false,
      activeManuscript: 1,
    };
    
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleTitleChange = (event) => this.setState({ title: event.target.value });
  handleAuthorChange = (event) => this.setState({ author: event.target.value });
  handleTypeChange = (event) => this.setState({ type: event.target.value });

  /**
   * Handle editing and deleting a manuscript
   */
  handleUpdatingManuscript(isUpdatingDialogOpen, manuscript) {
    this.setState({
      activeManuscript: manuscript,
      title: manuscript.title,
      author: manuscript.author,
      type: manuscript.type,
    });
  
    if (isUpdatingDialogOpen) {
      this.setState({ isUpdatingDialogOpen: false });
    } else {
      this.setState({ isUpdatingDialogOpen: true });
    }
  }

  handleDeletingManuscript(isDeletingDialogOpen, manuscript) {
    this.setState({ activeManuscript: manuscript });
  
    if (isDeletingDialogOpen) {
      this.setState({ isDeletingDialogOpen: false });
    } else {
      this.setState({ isDeletingDialogOpen: true });
    }
  }
  
  deleteManuscript(manuscriptId) {
    const { readAllManuscripts } = this.props.actions;
    const { isDeletingDialogOpen } = this.state;

    // Delete a manuscript from DB
    db.collection(MANUSCRIPTS).get().then((res) => res.forEach(((doc) => {
      if (doc.data().id === manuscriptId) {
        db
          .collection(MANUSCRIPTS)
          .doc(doc.id)
          .delete()
          .then(() => console.log(`Document ${manuscriptId} successfully deleted`))
          .catch((err) => console.log(err))
          .then(() => {
            // Hide alert dialog
            this.setState({ isDeletingDialogOpen: false });
  
            // Update information about manuscripts on frontend
            readAllManuscripts();
          })
      }
    })));

    this.handleDeletingManuscript(isDeletingDialogOpen);
  }

  render() {
    const {
      store,
      areManuscriptsLoading,
      sortManuscripts,
      filterManuscripts,
      searchManuscripts,
      resetState,
    } = this.props;
    const {
      areManuscriptsIntersected,
      areManuscriptsSorted,
      areManuscriptsFiltered,
      areManuscriptsSearched,
    } = this.props.store;
    const {
      areTitlesSortedByIncrease,
      areAuthorsSortedByIncrease,
      areTypesSortedByIncrease,
      areCreationDatesSortedByIncrease,
      isUpdatingDialogOpen,
      isDeletingDialogOpen,
      activeManuscript,
    } = this.state;

    return (
      <div className="manuscripts">
        <TopNavigation />

        <div className="d-flex">
          <LeftNavigation />

          <div className="work-table col-lg-9">
            <div className="container">
              <h1 className="mt-5 mb-5 text-center">Список рукописей</h1>

              <div className="d-flex justify-content-between align-items-end mb-4">
                <h2>Какой тип работ оставить?</h2>
                <span
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={resetState}
                >
                  Сбросить все фильтры
                </span>
              </div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li
                  className="large-manuscripts d-flex align-items-center large-manuscripts"
                  onClick={() => filterManuscripts("largeManuscripts")}
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
                  onClick={() => filterManuscripts("smallManuscripts")}
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
                {/* TODO: Add dependency from store here. Clear search query by a condition */}
                <input
                  id="search-query"
                  className="input"
                  placeholder="Поисковый запрос..."
                  onChange={(event) => searchManuscripts(event.target.value)}
                />
              </div>
              <ul className="mt-4 list-unstyled">
                {areManuscriptsLoading ? (
                  <div
                    className="d-flex justify-content-center"
                    style={{ width: 900 + "px" }}
                  >
                    <img src={InfinitySpinner} />
                  </div>
                ) : (
                  <table className="mt-2 table table-bordered">
                    <thead>
                      <tr>
                        <th className="interactive-th" scope="col">
                          <p className="m-0 text-center">№</p>
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => sortManuscripts("title")}
                        >
                          Название работы
                          {areTitlesSortedByIncrease ? (
                            <SortIcon className="ml-1" />
                          ) : (
                            <SortIcon
                              className="ml-1"
                              style={{ transform: "scale(1, -1)" }}
                            />
                          )}
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => sortManuscripts("author")}
                        >
                          Автор
                          {areAuthorsSortedByIncrease ? (
                            <SortIcon className="ml-1" />
                          ) : (
                            <SortIcon
                              className="ml-1"
                              style={{ transform: "scale(1, -1)" }}
                            />
                          )}
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => sortManuscripts("type")}
                        >
                          Тип рукописи
                          {areTypesSortedByIncrease ? (
                            <SortIcon className="ml-1" />
                          ) : (
                            <SortIcon
                              className="ml-1"
                              style={{ transform: "scale(1, -1)" }}
                            />
                          )}
                        </th>
                        <th
                          className="interactive-th"
                          scope="col"
                          onClick={() => {
                            this.sortByCreationDate();
                          }}
                        >
                          Дата добавления
                          {areCreationDatesSortedByIncrease ? (
                            <SortIcon className="ml-1" />
                          ) : (
                            <SortIcon
                              className="ml-1"
                              style={{ transform: "scale(1, -1)" }}
                            />
                          )}
                        </th>
                        <th scope="col">
                          <Box display="flex" justifyContent="center">
                            Действия
                          </Box>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(() => {
                        let selectedStoreChunk = FETCHED_MANUSCRIPTS;

                        if (areManuscriptsIntersected) {
                          selectedStoreChunk = INTERSECTED_MANUSCRIPTS;
                        } else {
                          if (
                            areManuscriptsSorted.isActive &&
                            !areManuscriptsFiltered.isActive &&
                            !areManuscriptsSearched
                          ) {
                            selectedStoreChunk = SORTED_MANUSCRIPTS;
                          } else if (
                            !areManuscriptsSorted.isActive &&
                            areManuscriptsFiltered.isActive &&
                            !areManuscriptsSearched
                          ) {
                            selectedStoreChunk = FILTERED_MANUSCRIPTS;
                          } else if (
                            !areManuscriptsSorted.isActive &&
                            !areManuscriptsFiltered.isActive &&
                            areManuscriptsSearched
                          ) {
                            selectedStoreChunk = SEARCHED_MANUSCRIPTS;
                          }
                        }

                        return [
                          // TODO: Add handler for full not matching (empty) values
                          ...store[selectedStoreChunk].map(
                            (manuscript, index) => {
                              return (
                                <tr key={uuidv4()}>
                                  <th key={uuidv4()} scope="row">
                                    <p
                                      key={uuidv4()}
                                      className="m-0 text-center"
                                    >
                                      {(index += 1)}
                                    </p>
                                  </th>
                                  <td key={uuidv4()}>
                                    {manuscript.title
                                      ? manuscript.title.toString()
                                      : "–"}
                                  </td>
                                  <td key={uuidv4()}>
                                    {manuscript.author
                                      ? manuscript.author.toString()
                                      : "–"}
                                  </td>
                                  <td key={uuidv4()}>
                                    {manuscript.type
                                      ? utils.getLabelById(manuscript.type, MANUSCRIPT_TYPES)
                                      : "–"}
                                  </td>
                                  <td key={uuidv4()}>
                                    {manuscript.creationDate
                                      ? utils.convertDateToCustom(
                                          manuscript.creationDate
                                        )
                                      : "–"}
                                  </td>
                                  <td key={uuidv4()}>
                                    <Box
                                      key={uuidv4()}
                                      display="flex"
                                      justifyContent="space-around"
                                    >
                                      <span
                                        key={uuidv4()}
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          this.handleUpdatingManuscript(
                                            isUpdatingDialogOpen,
                                            manuscript
                                          )
                                        }
                                      >
                                        {<EditIcon />}
                                      </span>
                                      <span
                                        key={uuidv4()}
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          this.handleDeletingManuscript(
                                            isDeletingDialogOpen,
                                            manuscript
                                          )
                                        }
                                      >
                                        {<DeleteIcon />}
                                      </span>
                                    </Box>
                                  </td>
                                </tr>
                              );
                            }
                          ),
                        ];
                      })()}
                    </tbody>
                  </table>
                )}
              </ul>
            </div>
            <Dialog
              open={isUpdatingDialogOpen}
              onClose={() => this.handleUpdatingManuscript(isUpdatingDialogOpen)}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Информация о рукописи</DialogTitle>
              <DialogContent>
                <TextField
                  margin="dense"
                  id="name"
                  label="Название работы"
                  value={this.state.title}
                  onChange={(event) => this.handleTitleChange(event)}
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="name"
                  label="Автор"
                  value={this.state.author}
                  onChange={(event) => this.handleAuthorChange(event)}
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="name"
                  label="Тип рукописи"
                  value={this.state.type}
                  onChange={(event) => this.handleTypeChange(event)}
                  fullWidth
                />
                {/* <Autocomplete
                  // {...defaultProps}
                  {...this.defaultProps}
                  id="auto-select"
                  autoSelect
                  renderInput={(params) => <TextField {...params} label="autoSelect" margin="normal" />}
                /> */}
              </DialogContent>
              <DialogActions>
                <Button
                  onClose={() => this.handleUpdatingManuscript(isUpdatingDialogOpen)}
                  color="primary"
                >
                  Отмена
                </Button>
                <Button
                  onClose={() => this.handleUpdatingManuscript(isUpdatingDialogOpen)}
                  color="primary"
                >
                  Обновить
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={isDeletingDialogOpen}
              onClose={() => this.handleDeletingManuscript(isDeletingDialogOpen)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Уведомление"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Вы уверены, что хотите <b>навсегда</b> удалить рукопись? В
                  случае удаления данную рукопись нельзя будет восстановить.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => this.handleDeletingManuscript(isDeletingDialogOpen)}
                >
                  Отменить действие
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => this.deleteManuscript(activeManuscript.id)}
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
