// Core
import React, { Component } from 'react';

// Icons
import AddBoxIcon from '@material-ui/icons/AddBox';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';

// Styles
import './editor.scss';

export default class Editor extends Component {
  makeTextBold = () => document.execCommand('bold');
  makeTextItalic = () => document.execCommand('italic');
  makeTextUnderline = () => document.execCommand('underline');

  returnInJson() {
    const result = document
      .getElementsByClassName('editor__content_active-input')[0]
      .innerHTML;
    
    console.log('returnInJson');
    console.log(result);
  }

  render() {
    return (
      <section className="editor">
        <div className="editor__container">
          <section className="editor__tools">
            <FormatBoldIcon
              fontSize="large"
              className="editor__icon"
              onClick={this.makeTextBold}
            />
            <FormatItalicIcon
              fontSize="large"
              className="editor__icon"
              onClick={this.makeTextItalic}
            />
            <FormatUnderlinedIcon
              fontSize="large"
              className="editor__icon"
              onClick={this.makeTextUnderline}
            />
          </section>
          
          <section className="editor__content">
            <div className="editor__content_container">
              <AddBoxIcon fontSize="large" />
            </div>
            <div
              className="editor__content_active-input"
              contentEditable
            >
              <b>Bold</b> and <i>italic</i>
            </div>
          </section>
          
          <section className="editor__actions">
            <button
              className="editor__actions_button"
              onClick={this.returnInJson}
            >
              Вернуть в JSON
            </button>
          </section>
        </div>
      </section>
    )
  }
}
