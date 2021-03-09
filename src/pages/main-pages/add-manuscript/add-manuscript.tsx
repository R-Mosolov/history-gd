// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ActionCreator, bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import LeftNavigation from '../../../components/left-navigation/left-navigation';
import TopNavigation from '../../../components/top-navigation/top-navigation';

// The dialog window
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Data
import { firestore, storage } from '../../../server';
import { v4 as uuidv4 } from 'uuid';
import { readAllManuscripts } from '../../../store/action-creators';
import { MANUSCRIPT_TYPES, OTHER } from '../../../constants';
import { utils } from '../../../utils';

import './add-manuscript.css';

interface Props {
  store: {
    userId: string;
    title: States | null;
    // author: string | null,
    // type: string | null,
    // content: string | null,
  };
}

interface States {
  isDialog: boolean;
}

const mapStateToProps: (state: object) => { store: object } = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps: (
  dispatch: ThunkDispatch<States, void, AnyAction>
) => {
  actions: { readAllManuscripts: any };
} = (dispatch) => {
  return {
    actions: bindActionCreators({ readAllManuscripts }, dispatch),
  };
};

class AddManuscript extends Component<Props, States> {
  state = {
    title: '',
    // author: '',
    // type: '',
    // content: '',
    isDialog: false,
  };

  toggleDialog = () => {
    const { isDialog } = this.state;
    this.setState({ isDialog: isDialog ? false : true });
  };

  createManuscript() {
    const { userId } = this.props.store;
    const manuscriptId = uuidv4();
    // TODO: Embed these values with the page state
    // const title: HTMLElement | value<null> = document.getElementById('manuscript-title').value;
    // const titleValue: HTMLElement | null = title.value;
    // const author = document.getElementById('manuscript-author').value;
    // const typeId = document.getElementById('manuscript-type').value;
    // const content = document.getElementById('manuscript-content').value;

    // Send a manuscript meta to the DB
    // TODO: Set more strong conditions (validation) to send a manuscript to the DB
    firestore.createManuscript('manuscripts', {
      userId: userId,
      manuscriptId: manuscriptId,
      title: title ? title.toString() : null,
      // author: author ? author.toString() : null,
      // creationDate: new Date(),
      // type: typeId ? typeId : OTHER,
    });

    // Send a manuscript meta to the DB
    if (content) {
      storage.createManuscriptContent(manuscriptId, content);
    }

    // Update global the application state (store)
    readAllManuscripts();

    return toggleDialog();
  }

  render() {
    const { isDialog } = this.state;

    return (
      <div className="add-manuscript">
        <TopNavigation />

        <div className="d-flex">
          <LeftNavigation />

          <div className="col-lg-9">
            <div className="container">
              <h1 className="mt-5 mb-5 text-center">Добавить новую рукопись</h1>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Тип работы
                  </label>
                </div>
                <select
                  defaultValue="other"
                  id="manuscript-type"
                  className="custom-select"
                >
                  <option value="" disabled>
                    Выбрать...
                  </option>
                  {MANUSCRIPT_TYPES.map((manuscript) => {
                    return (
                      <option key={uuidv4()} value={manuscript.typeId}>
                        {utils.getLabelById(
                          manuscript.typeId,
                          MANUSCRIPT_TYPES
                        )}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Название работы
                  </span>
                </div>
                <input
                  id="manuscript-title"
                  type="text"
                  className="form-control"
                  placeholder="Происхождение видов путём естественного отбора"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(evt) => this.setState({ title: evt.target.value })}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Автор(-ы) работы
                  </span>
                </div>
                <input
                  id="manuscript-author"
                  type="text"
                  className="form-control"
                  placeholder="Дарвин Ч."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Текст работы</span>
                </div>
                <textarea
                  id="manuscript-content"
                  className="manuscript-content form-control"
                  aria-label="With textarea"
                  placeholder="Когда мы сравниваем особей одной и той же разновидности или под-разновидности наших
                  издревле разводимых растений и животных, нас прежде всего поражает то обстоятельство, что они
                  вообще больше различаются между собой, чем особи любого вида или разновидности в естественном
                  состоянии. И когда мы подумаем, как велико разнообразие растений и животных, искусственно выведенных
                  и изменявшихся в течение веков, при самых различных условиях климата и ухода, то придем к заключению,
                  что эта большая изменчивость зависит от того, что наши домашние формы возникли при жизненных
                  условиях не столь однообразных и несколько отличных от тех, которым подвергались в естественном
                  состоянии породившие их виды. Некоторая доля вероятности имеется и во взгляде, высказанном Эндрю
                  Найтом (Andrew Knight), что эта изменчивость отчасти связана с избытком пищи. Ясно, по-видимому,
                  что органические существа должны подвергаться действию новых условий в течение нескольких поколений,
                  чтобы вызвать у них большое количество вариаций; ясно также, что организация, раз начавшая
                  изменяться, обычно продолжает изменяться в течение многих поколений. <...>."
                />
              </div>

              <div className="d-flex justify-content-center">
                <button
                  className="mt-3 btn btn-success"
                  onClick={createManuscript}
                >
                  Создать рукопись
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Dialog
            open={isDialog}
            onClose={() => toggleDialog()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{'Уведомление'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Ваша рукопись была успешно создана. Теперь Вы можете её увидеть
                в общем списке рукописей.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => toggleDialog()}
              >
                Хорошо
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddManuscript);
