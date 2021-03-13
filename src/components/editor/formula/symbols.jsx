// Core
import React from 'react';

// TeX language by D. Knuth (for mathematical formulas)
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Data
import symbols from '../../../data/components/editor/symbols.json';

// Styles
import '../../../styles/components/editor/symbols.scss';

export default function Symbols() {
  const renderAllSymbols = () => {
    return symbols.map((item) => {
      const { title, content } = item;

      return (
        <div>
          <h3 className="symbols__title">
            {title.ru} (пер. с англ. <i>{title.en}</i>)
          </h3>
          <table>
            <thead>
              <tr>
                <th>Символ</th>
                <th>Код символа</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item) => {
                return (
                  <tr>
                    <td>
                      <InlineMath math={item} />
                    </td>
                    <td>{item}</td>
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
