// Core
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';

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

// TeX language by D. Knuth (for mathematical formulas)
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Custom components (and OLOO classes)
import { TableAttachment, PictureAttachment } from '../../classes';
import { Formula } from './formula';

// Data
import { CREATE, UPDATE, SUBTITLE, PARAGRAPH, PICTURE } from '../../constants';
import { storage } from '../../server';
import TYPES from '../../store/types';

// Styles
import '../../styles/components/editor/editor.scss';
import { utils } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const { UPDATE_ACTIVE_MANUSCRIPT } = TYPES;
let caretPosition;

export default function Editor() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isRightClickMenu, setRightClickMenu] = useState(false);
  const [isActiveInput, setActiveInput] = useState(true);
  const [isTableDialog, setTableDialog] = useState(false);
  const [isPictureDialog, setPictureDialog] = useState(false);
  const [isReferenceDialog, setReferenceDialog] = useState(false);
  const [formulaValue, setFormulaValue] = useState('e^{i\\pi} + 1 = 0');
  const [isFormulaDialog, setFormulaDialog] = useState(false);
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
    link: '',
  });
  const [referenceConfig, setReferenceConfig] = useState({
    number: 1,
    title: 'Информация об источнике',
  });
  const anchorRef = useRef(null);

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

  /**
   * Functions to create a manuscript blocks
   */
  const makeTextBold = () => document.execCommand('bold');
  const makeTextItalic = () => document.execCommand('italic');
  const makeTextUnderline = () => document.execCommand('underline');

  const getCaretPosition = (editableDiv) => {
    var caretPos = 0,
      sel,
      range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        if (range.commonAncestorContainer.parentNode == editableDiv) {
          caretPos = range.endOffset;
        }
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      if (range.parentElement() == editableDiv) {
        var tempEl = document.createElement('span');
        editableDiv.insertBefore(tempEl, editableDiv.firstChild);
        var tempRange = range.duplicate();
        tempRange.moveToElementText(tempEl);
        tempRange.setEndPoint('EndToEnd', range);
        caretPos = tempRange.text.length;
      }
    }
    return (caretPosition = caretPos);
  };

  const [inputs, setInputs] = useState([
    <div
      id="start-input"
      className="editor__content_paragraph"
      contentEditable
      onClick={() => {
        const startInput = document.getElementById('start-input');
        return getCaretPosition(startInput);
      }}
    >
      <b>Параграф</b>
    </div>,
  ]);

  const addSubtitle = () => {
    const initialValue = 'Подзаголовок';

    setRightClickMenu(false);
    setInputs([
      ...inputs,
      <input
        className="editor__content_title"
        value={initialValue}
        style={{ fontWeight: 'bold', fontSize: '24px' }}
      />,
    ]);
    dispatch({
      type: UPDATE_ACTIVE_MANUSCRIPT,
      payload: {
        id: utils.addID(),
        type: SUBTITLE,
        content: initialValue,
        operation: CREATE,
      },
    });
  };

  const addParagraph = () => {
    const id = utils.addID();
    const content = 'Параграф';

    setRightClickMenu(false);
    setInputs([
      ...inputs,
      <div
        id={id}
        className="editor__content_paragraph"
        contentEditable
        onInput={() => {
          const element = document.getElementById(id);
          dispatch({
            type: UPDATE_ACTIVE_MANUSCRIPT,
            payload: {
              id: id,
              type: PARAGRAPH,
              content: element.innerHTML,
              operation: UPDATE,
            },
          });
        }}
      >
        Параграф
      </div>,
    ]);

    dispatch({
      type: UPDATE_ACTIVE_MANUSCRIPT,
      payload: {
        id: id,
        type: PARAGRAPH,
        content: content,
        operation: CREATE,
      },
    });
  };

  const toggleTableDialog = () => {
    setRightClickMenu(false);
    return setTableDialog(isTableDialog ? false : true);
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
    return setInputs([...inputs, createTable()]);
  }

  const togglePictureDialog = () => {
    setRightClickMenu(false);
    return setPictureDialog(isPictureDialog ? false : true);
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

  const addPicture = (fileId, fileExtension) => {
    const activePictureLink = `manuscripts-content/manuscript-content-${fileId}.`
    + `${fileExtension.toLowerCase()}`;

    setPictureDialog(false);

    return Promise.resolve(storage.getPictureLink(activePictureLink))
      .then((pictureURL) => {
        setInputs([...inputs, createPicture(pictureURL)]);
        dispatch({
          type: UPDATE_ACTIVE_MANUSCRIPT,
          payload: {
            id: utils.addID(),
            type: PICTURE,
            content: pictureURL,
            operation: CREATE,
          },
        });
      })
      .catch((err) => console.error(err));
  };

  const toggleReferenceDialog = () => {
    return setReferenceDialog(isReferenceDialog ? false : true);
  };

  const addReferenceToText = () => {
    const { number } = referenceConfig;
    const startInput = document.getElementById('start-input');
    let value = startInput.innerText;
    let result;

    result = `${value.slice(0, caretPosition)} [${number}]
    ${value.slice(caretPosition, value.length - 1)}`;

    return (startInput.innerHTML = result);
  };

  const addReferenceToEnd = () => {
    const { number, title } = referenceConfig;
    const isFirstRef = number === 1;

    setReferenceDialog(false);

    setInputs([
      ...inputs,
      isFirstRef ? (
        <input
          className="editor__content_title"
          value="Список использованных источников"
          style={{ fontWeight: 'bold', fontSize: '24px' }}
        />
      ) : (
        <></>
      ),
      <div className="editor__content_paragraph" contentEditable>
        {`${number}. ${title}`}
      </div>,
    ]);

    return setReferenceConfig({
      number: number + 1,
      title: 'Информация об источнике',
    });
  };

  /**
   * Functions to create drag-n-drop field
   */
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png', // The value should be a string, ex.: 'image/jpeg, image/png'
  });

  const files = acceptedFiles.map((file) => (
    <p key={file.path}>
      Файл: "{file.path}". Размер: {file.size} байт.
    </p>
  ));

  const createDroppedFile = () => {
    const fileId = Date.now().toString();
    const lastIdx = acceptedFiles[0].name.split('.').length - 1;
    const fileExtension = acceptedFiles[0].name.split('.')[lastIdx];
    const fileType = acceptedFiles.type;
    const fileInBlob = new Blob(acceptedFiles, { type: fileType });

    return Promise.resolve(
      storage.createManuscriptContentFile(
        fileId,
        fileInBlob,
        fileType,
        fileExtension
      )
    ).then(() => ({
      fileId: fileId,
      fileExtension: fileExtension,
    }));
  };

  const renderFormatsToAccept = (humanFormats) => {
    // TODO: Move this function to Utils directory
    const isLastIdx = (arr, idx) => arr.length - 1 === idx;
    let result = '';

    humanFormats.forEach((item, idx) => {
      isLastIdx(humanFormats, idx)
        ? (result += item + '.')
        : (result += item + ', ');
    });

    return result;
  };

  const toggleFormulaDialog = () => {
    setRightClickMenu(false);
    setFormulaDialog(isFormulaDialog ? false : true);
  };

  const element = document.getElementById('editor-katex');
  if (element) {
    katex.render(formulaValue, element, {
      throwOnError: false,
    });
  }

  const addFormula = () => {
    setInputs([
      ...inputs,
      <div
        id="editor-katex"
        className="editor__content_paragraph"
        contentEditable
      />,
    ]);
  };

  return (
    <section className="editor">
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
            onClick={toggleReferenceDialog}
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
                      <MenuItem onClick={addSubtitle}>
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
                      <MenuItem onClick={toggleFormulaDialog}>
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

        <section className="editor__dialogs">
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
                <section className="container field-to-upload">
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>
                      Чтобы загрузить файл, кликните на это поле или перенесите
                      файл сюда.
                    </p>
                    <p>
                      Принимается <b>только 1 файл</b>
                      {` размером не более 4 Мб`} в следующем формате:
                      {' ' + renderFormatsToAccept(['JPG', 'JPEG', 'PNG'])}
                    </p>
                  </div>
                  <aside>
                    <ul>{files}</ul>
                    <button
                      id="btn-to-upload-image"
                      onClick={createDroppedFile}
                      style={{ display: 'none' }}
                    >
                      Загрузить файл на сервер
                    </button>
                  </aside>
                </section>
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
                  return Promise.resolve(
                    createDroppedFile()
                  ).then(({ fileId, fileExtension }) =>
                    addPicture(fileId, fileExtension)
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
            open={isReferenceDialog}
            aria-labelledby="form-dialog-title"
            onClose={toggleReferenceDialog}
          >
            <DialogTitle id="footnote-dialog__title">Новая сноска</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Чтобы создать новую затекстовую сноску, введите, пожалуйста, её
                название в поле ниже.
              </DialogContentText>
              {/* TODO: Add here validation using Formik library */}
              <TextField
                autoFocus
                margin="dense"
                id="footnote-dialog__name"
                label="Информация об источнике (обязательное)"
                type="text"
                onChange={(evt) =>
                  setReferenceConfig({
                    ...referenceConfig,
                    title: evt.target.value
                      ? evt.target.value
                      : 'Информация об источнике',
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
                onClick={toggleReferenceDialog}
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
                  addReferenceToText();
                  addReferenceToEnd();
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

        <section className="editor__plugins">
          {isFormulaDialog && (
            <Formula
              toggleFormulaDialog={toggleFormulaDialog}
              isFormulaDialog={isFormulaDialog}
              formulaValue={formulaValue}
              setFormulaValue={setFormulaValue}
              addFormula={addFormula}
            />
          )}
        </section>
      </div>
    </section>
  );
}
