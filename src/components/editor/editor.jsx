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

// Right click menu
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

// Styles
import './editor.scss';

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

  const returnInJson = () => {
    const result = document
      .getElementsByClassName('editor__content_active-input')[0]
      .innerHTML;
    
    console.log('returnInJson');
    console.log(result);
  }
  
  const [inputs, setInputs] = React.useState([
    <div className="d-flex editor__content_last-input">
      { isActiveInput && (
        <div className="editor__content_container">
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          />
          <AddBoxIcon fontSize="large" onClick={handleToggle} />
        </div>
      )}
      <div
        className="editor__content_active-input"
        contentEditable
      >
        <b>Bold</b> and <i>italic</i>
      </div>
    </div>
  ]);

  const addNewInput = () => {
    setInputs([
      ...(() => {
        setActiveInput(false);
        return inputs.map((input) => {
          return input;
        });
      })(),
      (() => {
        setActiveInput(true);
        return (
          <div className="d-flex editor__content_last-input">
            {
              isActiveInput && (
                <div className="editor__content_container">
                  <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  />
                  <AddBoxIcon fontSize="large" onClick={handleToggle} />
                </div>
              )
            }
            <div
              className="editor__content_active-input"
              contentEditable
            >
              <b>Bold</b> and <i>italic</i>
            </div>
          </div>
        );
      })(),
    ]);
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
        </section>
        
        <section className="editor__content">
          {inputs.map((input) => input)}
        </section>
        
        <section className="editor__actions">
          <button
            className="editor__actions_button"
            onClick={returnInJson}
          >
            Вернуть в JSON
          </button>
        </section>

        <section className="editor__right-click-menu">
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={addNewInput}><TitleIcon />Заголовок</MenuItem>
                      <MenuItem onClick={addNewInput}><TextFieldsIcon />Параграф</MenuItem>
                      <MenuItem onClick={addNewInput}><TableChartIcon />Таблица</MenuItem>
                      <MenuItem onClick={addNewInput}><CropOriginalIcon />Рисунок</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </section>
      </div>
    </section>
  );
}
