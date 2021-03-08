// Core
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Icons
import { red, green } from '@material-ui/core/colors';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import TitleIcon from '@material-ui/icons/Title';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TableChartIcon from '@material-ui/icons/TableChart';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import FunctionsIcon from '@material-ui/icons/Functions';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

// Right click menu
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

// Dialog
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Checkbox
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Custom components (and OLOO classes)
import DragAndDrop from '../drag-and-drop';
import { TableAttachment, PictureAttachment } from '../../classes';

// Data
import { storage } from '../../server';

// Styles
import '../../styles/components/editor.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

function Editor({ activePictureLink }) {
  const classes = useStyles();
  const [isRightClickMenu, setRightClickMenu] = useState(false);
  const [isActiveInput, setActiveInput] = useState(true);
  const [isTableDialog, setTableDialog] = useState(false);
  const [isPictureDialog, setPictureDialog] = useState(false);
  const [isFootnoteDialog, setFootnoteDialog] = useState(false);
  const [tableConfig, setTableConfig] = useState({
    number: 1,
    title: 'Название таблицы',
    colsCount: 2,
    rowsCount: 3,
    isNumeration: false,
  });
  const [pictureConfig, setPictureConfig] = useState({
    number: 1,
    title: 'Название рисунка',
    link:
      'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/' +
      'master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg',
  });
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setRightClickMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setRightClickMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setRightClickMenu(false);
    }
  }

  // Return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(isRightClickMenu);
  useEffect(() => {
    if (prevOpen.current === true && isRightClickMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = isRightClickMenu;
  }, [isRightClickMenu]);

  const makeTextBold = () => document.execCommand('bold');
  const makeTextItalic = () => document.execCommand('italic');
  const makeTextUnderline = () => document.execCommand('underline');

  const [inputs, setInputs] = useState([
    <input
      className="editor__content_title"
      placeholder="Заголовок"
      style={{ fontWeight: 'bold', fontSize: '24px' }}
    />,
  ]);

  const addTitle = () => {
    setRightClickMenu(false);
    setInputs([
      [...inputs],
      <input
        className="editor__content_title"
        placeholder="Заголовок"
        style={{ fontWeight: 'bold', fontSize: '24px' }}
      />,
    ]);
  };

  const addParagraph = () => {
    setRightClickMenu(false);
    setInputs([
      [...inputs],
      <div className="editor__content_paragraph" contentEditable>
        Параграф
      </div>,
    ]);
  };

  const toggleTableDialog = () => {
    setRightClickMenu(false);
    setTableDialog(isTableDialog ? false : true);
  };

  const generateTableStructure = (colsCount, rowsCount) => {
    let tableCols = [];
    let tableRows = [];
    const isColumnNames = (rowNumber) => rowNumber === 0;

    for (let i = 0; i < rowsCount; i++) {
      tableRows.push(
        <tr>
          {(() => {
            tableCols = [];
            for (let j = 0; j < colsCount; j++) {
              if (isColumnNames(i)) {
                tableCols.push(
                  // Add <thead> tag in start and end of a table head
                  <th className="attachment__cell">
                    <div className="attachment__cell_editable" contentEditable>
                      Название колонки
                    </div>
                  </th>
                );
              } else {
                tableCols.push(
                  // Add <tbody> tag in start and end of a main table part
                  <td className="attachment__cell">
                    <div className="attachment__cell_editable" contentEditable>
                      Ячейка
                    </div>
                  </td>
                );
              }
            }
            return [...tableCols.map((col) => col)];
          })()}
        </tr>
      );
    }

    return tableRows.map((row) => row);
  };

  const createTable = () => {
    const { number, title, colsCount, rowsCount } = tableConfig;

    setTableConfig({ ...tableConfig, number: number + 1 });

    TableAttachment.setTableType();
    TableAttachment.setTableNumber(number);
    TableAttachment.setTableTitle(title);
    TableAttachment.setTableColsCount(colsCount);
    TableAttachment.setTableRowsCount(rowsCount);
    TableAttachment.setTableHTMLStructure(generateTableStructure);

    return TableAttachment.getTableHTMLStructure();
  };

  function addTable() {
    setTableDialog(false);
    setInputs([...inputs, createTable()]);
  }

  const togglePictureDialog = () => {
    setRightClickMenu(false);
    setPictureDialog(isPictureDialog ? false : true);
  };

  const createPicture = (pictureURL) => {
    const { number, title } = pictureConfig;

    setPictureConfig({ ...pictureConfig, number: number + 1 });

    PictureAttachment.setPictureType();
    PictureAttachment.setPictureNumber(number);
    PictureAttachment.setPictureTitle(title);
    PictureAttachment.setPictureSrc(pictureURL);
    PictureAttachment.setPictureHTMLStructure(generateTableStructure);

    return PictureAttachment.getPictureHTMLStructure();
  };

  const addPicture = () => {
    setPictureDialog(false);
    Promise.resolve(
      storage.getPictureLink(
        'manuscripts-content/manuscript-content-1615119811914.jpg'
      )
    )
      .then((pictureURL) => setInputs([...inputs, createPicture(pictureURL)]))
      .catch((err) => console.error(err));
  };

  const toggleFootnoteDialog = () => {
    setFootnoteDialog(isFootnoteDialog ? false : true);
  };

  const addFootnote = () => {
    isFootnoteDialog(false);
    setInputs([...inputs, createPicture()]);
  };

  return (
    <section className={`editor`}>
      <div className="editor__container">
        <section className="editor__tools">
          <FormatBoldIcon
            fontSize="large"
            className="editor__icon"
            onClick={makeTextBold}
          />
          <FormatItalicIcon
            fontSize="large"
            className="editor__icon"
            onClick={makeTextItalic}
          />
          <FormatUnderlinedIcon
            fontSize="large"
            className="editor__icon"
            onClick={makeTextUnderline}
          />
          <span className="editor__icon editor__custom-icon">* Прим. авт.</span>
          <span
            className="editor__icon editor__custom-icon"
            onClick={toggleFootnoteDialog}
          >
            [Сноска]
          </span>
        </section>

        <section className="editor__content">
          {inputs.map((input, idx) => {
            const isLastIdx = idx === inputs.length - 1;

            if (isLastIdx) {
              return (
                <div className="d-flex editor__content_last-input">
                  {isActiveInput && (
                    <div className="editor__content_container">
                      <Button
                        ref={anchorRef}
                        aria-controls={
                          isRightClickMenu ? 'menu-list-grow' : undefined
                        }
                        aria-haspopup="true"
                        onClick={handleToggle}
                        style={{ position: 'absolute' }}
                      />
                      <AddBoxIcon
                        fontSize="large"
                        onClick={handleToggle}
                        style={{
                          marginTop: 17 + 'px',
                          cursor: 'pointer',
                          color: green[500],
                        }}
                      />
                    </div>
                  )}
                  {input}
                </div>
              );
            } else {
              return <>{input}</>;
            }
          })}
        </section>

        <section className="editor__right-click-menu">
          <Popper
            open={isRightClickMenu}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={isRightClickMenu}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={addTitle}>
                        <TitleIcon style={{ marginRight: '5px' }} />
                        Заголовок
                      </MenuItem>
                      <MenuItem onClick={addParagraph}>
                        <TextFieldsIcon style={{ marginRight: '5px' }} />
                        Параграф
                      </MenuItem>
                      <MenuItem
                        onClick={() => alert('Логика списков пока не готова.')}
                      >
                        <FormatListBulletedIcon
                          style={{ marginRight: '5px' }}
                        />
                        Список
                      </MenuItem>
                      <MenuItem onClick={toggleTableDialog}>
                        <TableChartIcon style={{ marginRight: '5px' }} />
                        Таблица
                      </MenuItem>
                      <MenuItem onClick={togglePictureDialog}>
                        <CropOriginalIcon style={{ marginRight: '5px' }} />
                        Рисунок
                      </MenuItem>
                      <MenuItem onClick={addParagraph}>
                        <FunctionsIcon style={{ marginRight: '5px' }} />
                        Формула
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </section>

        <section className="editor__hidden_instrument">
          <Dialog
            open={isTableDialog}
            aria-labelledby="form-dialog-title"
            onClose={toggleTableDialog}
          >
            <DialogTitle id="form-dialog-title">Новая таблица</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Чтобы создать новую таблицу, пожалуйста, введите её название.
                Для ускорения процесса создания, можете также сразу ввести
                количество необходимых строк и столбцов или добавить их позднее
                вручную. Номер талицы будет установлен автоматически.
              </DialogContentText>
              {/* TODO: Add here validation using Formik library */}
              <TextField
                autoFocus
                margin="dense"
                id="editor-table-name"
                label="Название таблицы (обязательное)"
                type="text"
                onChange={(evt) =>
                  setTableConfig({
                    ...tableConfig,
                    title: evt.target.value
                      ? evt.target.value
                      : 'Название таблицы',
                  })
                }
                fullWidth
              />
              <TextField
                margin="dense"
                id="editor-table-columns-count"
                label="Кол-во колонок (с учётом шапки)"
                type="number"
                onChange={(evt) =>
                  setTableConfig({
                    ...tableConfig,
                    colsCount: evt.target.value ? evt.target.value : 2,
                  })
                }
                fullWidth
              />
              <TextField
                margin="dense"
                id="editor-table-rows-count"
                label="Кол-во строк"
                onChange={(evt) =>
                  setTableConfig({
                    ...tableConfig,
                    rowsCount: evt.target.value ? evt.target.value : 3,
                  })
                }
                type="number"
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Включить нумерацию строк"
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={toggleTableDialog}
                style={{
                  color: 'white',
                  backgroundColor: red[700],
                  border: 'none',
                }}
              >
                Отменить
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => {
                  addTable();
                }}
                style={{
                  color: 'white',
                  backgroundColor: green[600],
                  border: 'none',
                }}
              >
                Создать
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={isPictureDialog}
            aria-labelledby="form-dialog-title"
            onClose={togglePictureDialog}
          >
            <DialogTitle id="picture-dialog__title">
              Новый рисунок/схема
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Чтобы создать новый рисунок/схему, пожалуйста, введите его
                название. Номер рисунка будет установлен автоматически.
              </DialogContentText>
              {/* TODO: Add here validation using Formik library */}
              <TextField
                autoFocus
                margin="dense"
                id="picture-dialog__name"
                label="Название рисунка (обязательное)"
                type="text"
                onChange={(evt) =>
                  setPictureConfig({
                    ...pictureConfig,
                    title: evt.target.value
                      ? evt.target.value
                      : 'Название рисунка',
                  })
                }
                fullWidth
              />
              <Box mt={3}>
                <DragAndDrop
                  computerFormats="image/jpeg, image/png"
                  humanFormats={['JPG', 'JPEG', 'PNG']}
                  maxFileSizeInMB="4"
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={togglePictureDialog}
                style={{
                  color: 'white',
                  backgroundColor: red[700],
                  border: 'none',
                }}
              >
                Отменить
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => {
                  const btnToUploadImage = document.getElementById(
                    'btn-to-upload-image'
                  );
                  return Promise.resolve(btnToUploadImage.click()).then(() =>
                    addPicture()
                  );
                }}
                style={{
                  color: 'white',
                  backgroundColor: green[600],
                  border: 'none',
                }}
              >
                Создать
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={isFootnoteDialog}
            aria-labelledby="form-dialog-title"
            onClose={toggleFootnoteDialog}
          >
            <DialogTitle id="footnote-dialog__title">Новая сноска</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Чтобы создать новую затекстовую сноску.
              </DialogContentText>
              {/* TODO: Add here validation using Formik library */}
              <TextField
                autoFocus
                margin="dense"
                id="footnote-dialog__name"
                label="Название рисунка (обязательное)"
                type="text"
                onChange={(evt) =>
                  setPictureConfig({
                    ...pictureConfig,
                    title: evt.target.value
                      ? evt.target.value
                      : 'Название рисунка',
                  })
                }
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={toggleFootnoteDialog}
                style={{
                  color: 'white',
                  backgroundColor: red[700],
                  border: 'none',
                }}
              >
                Отменить
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => {
                  addPicture();
                }}
                style={{
                  color: 'white',
                  backgroundColor: green[600],
                  border: 'none',
                }}
              >
                Создать
              </Button>
            </DialogActions>
          </Dialog>
        </section>
      </div>
    </section>
  );
}

export default connect(mapStateToProps, {})(Editor);
