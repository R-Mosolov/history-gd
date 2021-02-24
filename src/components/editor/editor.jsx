// Core
import React, { Component, useEffect } from 'react';

// Icons
import AddBoxIcon from '@material-ui/icons/AddBox';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import TitleIcon from '@material-ui/icons/Title';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TableChartIcon from '@material-ui/icons/TableChart';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import FunctionsIcon from '@material-ui/icons/Functions';

// Right click menu
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

// Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Checkbox
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

export default function Editor() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isActiveInput, setActiveInput] = React.useState(true);
  const [isTableDialog, setTableDialog] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const makeTextBold = () => document.execCommand('bold');
  const makeTextItalic = () => document.execCommand('italic');
  const makeTextUnderline = () => document.execCommand('underline');

  const [inputs, setInputs] = React.useState([
    <div className="editor__content_paragraph" contentEditable />,
    // ...addTable(),
  ]);

  const addTitle = () => {
    setOpen(false);
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
    setOpen(false);
    setInputs([
      [...inputs],
      <div className="editor__content_paragraph" contentEditable>
        Параграф
      </div>,
    ]);
  };

  const toggleTableDialog = () => {
    setTableDialog(isTableDialog ? false : true);
  };

  function addTable() {
    return (
      <div className="editor__content_table">
        <p className="table__number">Таблица N</p>
        <h2 className="table__title">Название таблицы</h2>
        <table className="table__container">
          <tr>
            <th className="table__cell">Название колонки 1</th>
            <th className="table__cell">Название колонки 2</th>
          </tr>
          <tr>
            <td className="table__cell">Ячейка 1</td>
            <td className="table__cell">Ячейка 2</td>
          </tr>
          <tr>
            <td className="table__cell">Ячейка 3</td>
            <td className="table__cell">Ячейка 4</td>
          </tr>
        </table>
      </div>
    );
  }

  return (
    <section className={`editor`}>
      <Box pt={3} pb={3}>
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
                          aria-controls={open ? 'menu-list-grow' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}
                          style={{ position: 'absolute' }}
                        />
                        <AddBoxIcon
                          fontSize="large"
                          onClick={handleToggle}
                          style={{ marginTop: 17 + 'px', cursor: 'pointer' }}
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
            {addTable()}
          </section>

          <section className="editor__right-click-menu">
            <Popper
              open={open}
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
                        autoFocusItem={open}
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
                        <MenuItem onClick={toggleTableDialog}>
                          <TableChartIcon style={{ marginRight: '5px' }} />
                          Таблица
                        </MenuItem>
                        <MenuItem onClick={addParagraph}>
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
                  количество необходимых строк и столбцов или добавить их
                  позднее вручную. Номер талицы будет установлен автоматически.
                </DialogContentText>
                {/* TODO: Add here validation using Formik library */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="editor-table-name"
                  label="Название таблицы (обязательное)"
                  type="email"
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="editor-table-columns-count"
                  label="Кол-во колонок (с учётом шапки)"
                  type="number"
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="editor-table-rows-count"
                  label="Кол-во строк"
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
                >
                  Отменить
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={toggleTableDialog}
                >
                  Создать
                </Button>
              </DialogActions>
            </Dialog>
          </section>
        </div>
      </Box>
    </section>
  );
}
