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
import Box from '@material-ui/core/Box';
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
    const result = document.getElementsByClassName(
      'editor__content_active-input'
    )[0].innerHTML;
  };

  const [inputs, setInputs] = React.useState([
    <div className="editor__content_active-input" contentEditable />,
  ]);

  const addNewInput = () => {
    setOpen(false);
    setInputs([
      [...inputs],
      <div className="editor__content_active-input" contentEditable />,
    ]);
  };

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
                        <MenuItem onClick={addNewInput}>
                          <TitleIcon style={{ marginRight: '5px' }} />
                          Заголовок
                        </MenuItem>
                        <MenuItem onClick={addNewInput}>
                          <TextFieldsIcon style={{ marginRight: '5px' }} />
                          Параграф
                        </MenuItem>
                        <MenuItem onClick={addNewInput}>
                          <TableChartIcon style={{ marginRight: '5px' }} />
                          Таблица
                        </MenuItem>
                        <MenuItem onClick={addNewInput}>
                          <CropOriginalIcon style={{ marginRight: '5px' }} />
                          Рисунок
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </section>
        </div>
      </Box>
    </section>
  );
}
