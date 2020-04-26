import React from "react";

import "./add-manuscript.css";

import LeftNavigation from "../../../components/left-navigation/left-navigation";
import expandManuscripts from "./services/expand-manuscripts";

function AddManuscript() {
  return (
    <div className="add-manuscript">
      <div className="d-flex">
        <LeftNavigation />

        <div className="col-lg-9">
          <div className="container">
            <h1 className="mt-5 mb-5 text-center">Добавить новую рукопись</h1>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Тип работы
                </label>
              </div>
              <select id="manuscript-type" className="custom-select">
                <option selected>Выбрать...</option>
                <option value="Научная публикация">Научная публикация</option>
                <option value="Монография">Монография</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Название работы
                </span>
              </div>
              <input
                id="manuscript-title"
                type="text"
                className="form-control"
                placeholder="Происхождение видов путём естественного отбора"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Автор(-ы) работы
                </span>
              </div>
              <input
                id="manuscript-author"
                type="text"
                className="form-control"
                placeholder="Дарвин Ч."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Текст работы</span>
              </div>
              <textarea
                id="manuscript-content"
                className="manuscript-content form-control"
                aria-label="With textarea"
                placeholder="Когда мы сравниваем особей одной и той же разновидности или под-разновидности наших
                издревле разводимых растений и животных, нас прежде всего поражает то обстоятельство, что они
                вообще больше различаются между собой, чем особи любого вида или разновидности в естественном
                состоянии. И когда мы подумаем, как велико разнообразие растений и животных, искусственно выведенных
                и изменявшихся в течение веков, при самых различных условиях климата и ухода, то придем к заключению,
                что эта большая изменчивость зависит от того, что наши домашние формы возникли при жизненных
                условиях не столь однообразных и несколько отличных от тех, которым подвергались в естественном
                состоянии породившие их виды. Некоторая доля вероятности имеется и во взгляде, высказанном Эндрю
                Найтом (Andrew Knight), что эта изменчивость отчасти связана с избытком пищи. Ясно, по-видимому,
                что органические существа должны подвергаться действию новых условий в течение нескольких поколений,
                чтобы вызвать у них большое количество вариаций; ясно также, что организация, раз начавшая
                изменяться, обычно продолжает изменяться в течение многих поколений. <...>."
              />
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="mt-3 btn btn-success"
                onClick={() => expandManuscripts()}
              >
                Создать рукопись
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddManuscript;
