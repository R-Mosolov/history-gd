// Core
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

// Data
import TYPES from '../../../store/types';
import { CREATE, FORMULA } from '../../../constants';
import { utils } from '../../../utils';

// Styles
import '../../../styles/components/editor/formula.scss';

export default function Formula(props) {
  const {
    toggleFormulaDialog,
    formulaValue,
    setFormulaValue,
    addFormula,
  } = props;
  const { UPDATE_ACTIVE_MANUSCRIPT } = TYPES;
  const [isAlertOnClear, setAlertOnClear] = useState(false);
  const dispatch = useDispatch();

  const element = document.getElementById('katex');
  if (element) {
    katex.render(formulaValue, element, {
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
              value={formulaValue}
              onChange={(event) => setFormulaValue(event.target.value)}
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
              {/* TODO: Add checking of an empty input value */}
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  toggleFormulaDialog(false);
                  addFormula();
                  dispatch({
                    type: UPDATE_ACTIVE_MANUSCRIPT,
                    payload: {
                      id: utils.addID(),
                      type: FORMULA,
                      content: formulaValue,
                      operation: CREATE,
                    },
                  });
                }}
              >
                Добавить в рукопись
              </Button>
            </Box>
          </div>
        </div>
        <div className="formula__dynamic-block_output">
          <h2 className="formula__title">Предпросмотр формулы</h2>
          <div id="katex" />
        </div>
      </div>
      <div className="formula__close">
        <CloseIcon
          className="formula__close_icon"
          style={{ fontSize: '72px' }}
          onClick={toggleFormulaDialog}
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
          <DialogTitle id="formula-alert-title">
            {'Очистить формулу?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="formula-alert-description">
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
                setFormulaValue('');
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
