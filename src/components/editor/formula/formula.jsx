// Core
import React, { Component } from 'react';

// Material UI
import CloseIcon from '@material-ui/icons/Close';

// TeX language by D. Knuth (for mathematical formulas)
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Custom components
import Symbols from './symbols';
import Input from './input';

// Styles
import '../../../styles/components/editor/formula.scss';

export default class Formula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue,
    };
  }

  handleInputChange(inputValue) {
    this.setState({
      inputValue: inputValue,
    });
  }

  render() {
    const { setFormulaDialog } = this.props;
    const { inputValue } = this.state;

    return (
      <section className="formula">
        <div className="formula__symbols">
          <h2 className="formula__title">Список допустимых символов</h2>
          <Symbols />
        </div>
        <div className="formula__dynamic-block">
          <div className="formula__dynamic-block_input">
            <h2 className="formula__title">Ввод формулы</h2>
            <Input onChange={() => this.handleInputChange(inputValue)} />
          </div>
          <div className="formula__dynamic-block_output">
            <h2 className="formula__title">Предпросмотр формулы</h2>
            <p>{inputValue || 'The formula preview'}</p>
            {/* <InlineMath math={String(inputValue)} /> */}
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
}
