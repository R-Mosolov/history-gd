// Core
import React, { useState } from 'react';

// Material UI
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// TeX language by D. Knuth (for mathematical formulas)
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Custom components
import Symbols from './symbols';

// Styles
import '../../../styles/components/editor/formula.scss';

export default function Formula(props) {
  const { setFormulaDialog } = props;
  const [inputValue, setInputValue] = useState('E=mc^{2}');
  const [isAlertOnClear, setAlertOnClear] = useState(false);

  const element = document.getElementById('katex');
  if (element) {
    katex.render(inputValue, element, {
      throwOnError: false,
    });
  }

  return (
    <section className="formula">
      <div className="formula__symbols">
        <h2 className="formula__title">Список допустимых символов</h2>
        <Symbols />
      </div>
      <div className="formula__dynamic-block">
        <div className="formula__dynamic-block_input">
          <h2 className="formula__title">Ввод формулы</h2>
          <div className="input__container">
            <textarea
              className="input__field"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => setAlertOnClear(true)}
              >
                Очистить формулу
              </Button>
              <Button variant="contained" color="primary" size="small">
                Добавить в рукопись
              </Button>
            </Box>
          </div>
        </div>
        <div className="formula__dynamic-block_output">
          <h2 className="formula__title">Предпросмотр формулы</h2>
          <div contentEditable id="katex" />
        </div>
      </div>
      <div className="formula__close">
        <CloseIcon
          className="formula__close_icon"
          style={{ fontSize: '72px' }}
          onClick={setFormulaDialog}
        />
      </div>
      <div>
        <Dialog
          open={isAlertOnClear}
          onClose={() => setAlertOnClear(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          style={{ zIndex: '10000' }}
        >
          <DialogTitle id="alert-dialog-title">
            {'Очистить формулу?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Вы уверены, что хотите полностью очистить формулу? Всё её
              содержимое будет удалено.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setAlertOnClear(false)}
              color="primary"
              size="small"
              variant="contained"
              autoFocus
            >
              Отменить
            </Button>
            <Button
              onClick={() => {
                setInputValue('');
                setAlertOnClear(false);
              }}
              color="secondary"
              size="small"
              variant="contained"
            >
              Очистить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
}
