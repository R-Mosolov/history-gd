import React from "react";

import "./registration.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="registration mt-5 mb-5 d-flex justify-content-center container">
      <div className="w-lg-50">
        <h1 className="pt-5">Регистрация на сайте</h1>

        <form>
          <fieldset className="mt-4">
            <legend>Базовая информация</legend>
            <div className="d-flex flex-column mb-3">
              <label>1. Фамилия</label>
              <input type="text" min="2" max="75" placeholder="Ломоносов" />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>2. Имя</label>
              <input type="text" min="2" max="75" placeholder="Михаил" />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>3. Отчество</label>
              <input type="text" min="2" max="75" placeholder="Васильевич" />
            </div>
          </fieldset>

          <fieldset className="mt-3">
            <legend>Профессиональные сведения</legend>
            <div className="d-flex flex-column mb-3">
              <label>4. Полное название ВУЗ'а, в котором Вы работаете</label>
              <input
                type="text"
                min="3"
                max="75"
                placeholder="Московский Государственный Университет"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>5. Учёное звание</label>
              <input type="text" min="3" max="75" placeholder="Профессор" />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>6. Учёная степень</label>
              <input
                type="text"
                min="3"
                max="75"
                placeholder="Академик СПбАН"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>7. Научно-исследовательские интересы</label>
              <input
                type="text"
                min="3"
                max="250"
                placeholder="Мозаичное дело, изобретение ночезрительных труб"
              />
            </div>
          </fieldset>

          <fieldset className="mt-3">
            <legend>Информация для пользования системой</legend>
            <div className="d-flex flex-column mb-3">
              <label>8. Email (электронная почта)</label>
              <input
                type="email"
                min="3"
                max="75"
                placeholder="MV.Lomonosov@msu.ru"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>9. Моб. телефон</label>
              <input
                type="number"
                min="10"
                max="11"
                placeholder="+7 (999) 999-99-99"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>10.1. Пароль</label>
              <input type="password" min="8" max="50" placeholder="********" />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>10.2. Повторите пароль</label>
              <input type="password" min="8" max="50" placeholder="********" />
            </div>
          </fieldset>
        </form>

        <div className="d-flex justify-content-center">
          <button className="mt-3 btn btn-success btn-block">
            Зарегистрироваться
          </button>
        </div>
        <Link to="/login">
          <div className="d-flex justify-content-center">
            <button className="mt-2 btn btn-secondary btn-block">Войти</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Registration;
