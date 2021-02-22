// Core
import React, { Component } from 'react';

// Editor library
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import SimpleImage from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Marker from '@editorjs/marker';
import Warning from '@editorjs/warning';
import Delimiter from '@editorjs/delimiter';

// Styles
import './editor.scss';

export default class Editor extends Component {
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    };
  }

  render() {
    const editor = new EditorJS({
      holder: 'editorjs', // Id of HTML Element that contains the Editor
      autofocus: true,

      /**
       * Tools list
       */
      tools: {
        heading: {
          class: Header,
          config: {
            placeholder: 'Заголовок рукописи',
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        image: SimpleImage,
        list: List,
        checklist: Checklist,
        warning: Warning,
        marker: Marker,
        delimiter: Delimiter,
        linkTool: LinkTool,
        embed: Embed,
        table: Table
      },

      /**
       * Internationalzation config
       */
      i18n: {
        /**
         * @type {I18nDictionary}
         */
        messages: {
          /**
           * Other below: translation of different UI components of the editor.js core
           */
          ui: {
            "blockTunes": {
              "toggler": {
                "Click to tune": "Нажмите, чтобы настроить",
                "or drag to move": "или перетащите"
              },
            },
            "inlineToolbar": {
              "converter": {
                "Convert to": "Конвертировать в"
              }
            },
            "toolbar": {
              "toolbox": {
                "Add": "Добавить"
              }
            }
          },
      
          /**
           * Section for translation Tool Names: both block and inline tools
           */
          toolNames: {
            "Text": "Параграф",
            "Heading": "Заголовок",
            "List": "Список",
            "Warning": "Примечание",
            "Checklist": "Чеклист",
            "Quote": "Цитата",
            "Code": "Код",
            "Delimiter": "Разделитель",
            "Raw HTML": "HTML-фрагмент",
            "Table": "Таблица",
            "Link": "Ссылка",
            "Marker": "Маркер",
            "Bold": "Полужирный",
            "Italic": "Курсив",
            "InlineCode": "Моноширинный",
          },
      
          /**
           * Section for passing translations to the external tools classes
           */
          tools: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
             * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
             */
            "warning": { // <-- 'Warning' tool will accept this dictionary section
              "Title": "Название",
              "Message": "Сообщение",
            },
      
            /**
             * Link is the internal Inline Tool
             */
            "link": {
              "Add a link": "Вставьте ссылку"
            },
            /**
             * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
             */
            "stub": {
              'The block can not be displayed correctly.': 'Блок не может быть отображен'
            }
          },
      
          /**
           * Section allows to translate Block Tunes
           */
          blockTunes: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
             * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
             *
             * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
             */
            "delete": {
              "Delete": "Удалить"
            },
            "moveUp": {
              "Move up": "Переместить вверх"
            },
            "moveDown": {
              "Move down": "Переместить вниз"
            }
          },
        }
      },
    });

    const saveButton = document.getElementById('save-button');
    const output = document.getElementById('output');

    if (saveButton) {
      saveButton.addEventListener('click', () => {
        editor.save().then((outputData) => {
          console.log('Article data: ', outputData)
        }).catch((error) => {
          console.log('Saving failed: ', error)
        })
      });
    }

    return (
      <section className="editor">
        <div id="editorjs" />
        <button id="save-button">Показать результат</button>
        <pre id="output"></pre>
      </section>
    );
  }
  
  save(blockContent){
    return {
      url: blockContent.value
    }
  }
}
