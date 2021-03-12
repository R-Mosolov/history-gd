// Core
import React from 'react';

// Material UI
import CloseIcon from '@material-ui/icons/Close';

// Styles
import '../styles/components/formula.scss';

interface Props {
  setFormulaDialog: () => boolean;
}

export default function Formula(props: Props) {
  const { setFormulaDialog } = props;

  return (
    <section className="formula">
      <div className="formula__symbols"></div>
      <div className="formula__dynamic-block">
        <div className="formula__dynamic-block_input"></div>
        <div className="formula__dynamic-block_output"></div>
      </div>
      <div className="formula__close">
        <CloseIcon
          className="formula__close_icon"
          style={{ fontSize: '72px' }}
          onClick={setFormulaDialog}
        />
      </div>
    </section>
  );
}