// Core
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
import {
  MANUSCRIPT_TYPES,
  OTHER,
  MANUSCRIPTS,
  MANUSCRIPTS_ENDPOINT,
  POST,
} from '../../../constants';
import { utils } from '../../../utils';

import './add-manuscript.css';

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ readAllManuscripts }, dispatch),
  };
};

function AddManuscript({ store, actions: { readAllManuscripts = () => {} } }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createManuscript() {
    const { userId } = store;
    const manuscriptId = uuidv4();
    // TODO: Embed these values with the page state
    // TODO: Rewrite document.getElementById(..) using React refs
    const title = document.getElementById('manuscript-title').value;
    const author = document.getElementById('manuscript-author').value;
    const typeId = document.getElementById('manuscript-type').value;
    const content = document.getElementById('manuscript-content').value;

    const url = new URL(MANUSCRIPTS_ENDPOINT);
    const params = { collection: MANUSCRIPTS };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url, {
      method: POST,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        manuscriptId: manuscriptId,
        title: title ? title.toString() : null,
        author: author ? author.toString() : null,
        creationDate: new Date(),
        type: typeId ? typeId : OTHER,
      }),
    });

    // Send a manuscript meta to the DB
    if (content) {
      storage.createManuscriptContent(manuscriptId, content);
    }

    // Update global the application state (store)
    readAllManuscripts();

    return handleClickOpen();
  }

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
                      {utils.getLabelById(manuscript.typeId, MANUSCRIPT_TYPES)}
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
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Уведомление'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ваша рукопись была успешно создана. Теперь Вы можете её увидеть в
              общем списке рукописей.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={handleClose}
            >
              Хорошо
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddManuscript);
