// Core
import React, { Component } from 'react';

// Icons
import AddBoxIcon from '@material-ui/icons/AddBox';

// Styles
import './editor.scss';

export default class Editor extends Component {
  returnInJson() {
    const result = document
      .getElementsByClassName('editor__tools_active-input')[0]
      .innerHTML;
    
    console.log(result);
  }

  render() {
    return (
      <section className="editor">
        <div className="editor__container">
          <section className="editor__tools">
            <div className="editor__tools_container">
              <AddBoxIcon />
            </div>
            <div
              className="editor__tools_active-input"
              contentEditable
            >
              <b>Bold</b> and <i>italic</i>
            </div>
          </section>
          
          <section className="editor__content"></section>
          
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
