// Core
import React, { useState } from 'react';

// Material UI
import CloseIcon from '@material-ui/icons/Close';

// TeX language by D. Knuth (for mathematical formulas)
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Custom components
import Symbols from './symbols';

// Styles
import '../../../styles/components/editor/formula.scss';

export default function Formula(props) {
  const { setFormulaDialog } = props;
  const [inputValue, setInputValue] = useState('\E=mc^{2}');

  const element = document.getElementById('katex');
  if (element) {
    katex.render("\\begin{rcases} a &\\text{if } b \\\\ c &\\text{if } d \\end{rcases}⇒…", element, {
      throwOnError: false
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
          <textarea
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <div className="formula__dynamic-block_output">
          <h2 className="formula__title">Предпросмотр формулы</h2>
          <div contentEditable id="katex" />
          {/* <InlineMath math={inputValue} /> */}
        </div>
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
