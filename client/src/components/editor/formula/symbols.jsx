// Core
import React, { useState } from 'react';

// Icons
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditIcon from '@material-ui/icons/Edit';

// TeX language by D. Knuth (for mathematical formulas)
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Data
import { utils } from '../../../utils';
import symbols from '../../../data/components/editor/symbols.json';

// Styles
import '../../../styles/components/editor/symbols.scss';

export default function Symbols() {
  const [activeSymbol, setActiveSymbol] = useState('\\Alpha');

  const renderAllSymbols = () => {
    return symbols.map((symbol) => {
      const { title, content } = symbol;

      return (
        <div>
          <h3 className="symbols__section-title">
            {title.ru} (пер. с англ. <i>{title.en}</i>)
          </h3>
          <table>
            <thead>
              <tr>
                <th className="symbols__column-title symbols__cell">Символ</th>
                <th className="symbols__column-title symbols__cell">
                  Код символа
                </th>
                <th className="symbols__column-title symbols__cell">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody>
              {content.map((_symbol) => {
                const symbolID = utils.addID();

                if (document.getElementById(symbolID)) {
                  document.getElementById(symbolID).innerHTML = 'Test 2';
                }

                return (
                  <tr>
                    <td className="symbols__cell">
                      <span id={symbolID}>Test</span>
                    </td>
                    <td className="symbols__cell">{_symbol}</td>
                    <td className="symbols__cell">
                      <div className="symbols__cell_actions">
                        <div className="icons-container">
                          <FileCopyIcon className="icons-container_icon" />
                          Скопировать
                        </div>
                        <div className="icons-container">
                          <EditIcon className="icons-container_icon" />
                          Вставить
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return <section className="symbols">{renderAllSymbols()}</section>;
}
