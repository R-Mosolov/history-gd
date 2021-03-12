// Core
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Dialog window
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Custom components
import LeftNavigation from '../../../components/left-navigation/left-navigation';
import TopNavigation from '../../../components/top-navigation/top-navigation';
import Editor from '../../../components/editor';
import PageTabs from '../../../components/page-tabs';
import DragAndDrop from '../../../components/drag-and-drop';

// Data
import { firestore, storage } from '../../../server';
import { v4 as uuidv4 } from 'uuid';
import { readAllManuscripts } from '../../../store/action-creators';
import { MANUSCRIPT_TYPES, OTHER } from '../../../constants';
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
    const title = document.getElementById('manuscript-title').value;
    const author = document.getElementById('manuscript-author').value;
    const typeId = document.getElementById('manuscript-type').value;
    const content = document.getElementById('manuscript-content').value;

    // Send a manuscript meta to the DB
    // TODO: Set more strong conditions (validation) to send a manuscript to the DB
    firestore.createManuscript('manuscripts', {
      userId: userId,
      manuscriptId: manuscriptId,
      title: title ? title.toString() : null,
      author: author ? author.toString() : null,
      creationDate: new Date(),
      type: typeId ? typeId : OTHER,
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

            <PageTabs
              editor={<Editor />}
              dragAndDrop={
                <DragAndDrop
                  computerFormats={`application/pdf, .doc, .docx, application/msword, 
                application/vnd.openxmlformats-officedocument.wordprocessingml.document`}
                  humanFormats={['DOC', 'DOCX', 'PDF']}
                />
              }
            />

            <div className="d-flex justify-content-center">
              <button className="btn btn-success" onClick={createManuscript}>
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
