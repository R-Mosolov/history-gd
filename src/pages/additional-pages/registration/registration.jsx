import React from "react";
import { Link } from "react-router-dom";

import "./registration.css";
import "./functions/validate-form";
import TopNavigation from "../../../components/top-navigation/top-navigation";

function Registration() {
  return (
    <div className="registration mt-5 mb-5 d-flex justify-content-center container">
      <TopNavigation
        btnOnWorkArea={
          <Link to="/login">
            <button className="on-work-table mr-lg-4 btn btn-warning">
              Рабочий стол
            </button>
          </Link>
        }
      />

      <div className="w-lg-50">
        <h1 className="pt-5">Регистрация на сайте</h1>

        <form>
          <fieldset className="mt-4">
            <legend>Базовая информация</legend>
            <div className="d-flex flex-column mb-3">
              <label>1. Фамилия*</label>
              <input
                id="last-name"
                className="form-control"
                type="text"
                min="2"
                max="75"
                placeholder="Ломоносов"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>2. Имя*</label>
              <input
                id="first-name"
                className="form-control"
                type="text"
                min="2"
                max="75"
                placeholder="Михаил"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>3. Отчество*</label>
              <input
                id="middle-name"
                className="form-control"
                type="text"
                min="2"
                max="75"
                placeholder="Васильевич"
                required
              />
            </div>
          </fieldset>

          <fieldset className="mt-3">
            <legend>Профессиональные сведения</legend>
            <div className="d-flex flex-column mb-3">
              <label>4. Полное название ВУЗ-а, в котором Вы работаете</label>
              <input
                id="university"
                className="form-control"
                type="text"
                min="3"
                max="75"
                placeholder="Московский Государственный Университет"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>5. Учёное звание</label>
              <input
                id="academic-title"
                className="form-control"
                type="text"
                min="3"
                max="75"
                placeholder="Профессор"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>6. Учёная степень</label>
              <input
                id="academic-degree"
                className="form-control"
                type="text"
                min="3"
                max="75"
                placeholder="Академик СПбАН"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>7. Научно-исследовательские интересы</label>
              <textarea
                id="research-interests"
                className="form-control"
                placeholder="Мозаичное дело, изобретение ночезрительных труб"
              />
            </div>
          </fieldset>

          <fieldset className="mt-3">
            <legend>Информация для пользования системой</legend>
            <div className="d-flex flex-column mb-3">
              <label>8. Email (электронная почта)*</label>
              <input
                id="registration-email"
                className="form-control"
                type="email"
                min="3"
                max="75"
                placeholder="MV.Lomonosov@msu.ru"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>9. Моб. телефон*</label>
              <input
                id="phone"
                className="form-control"
                type="number"
                min="11"
                max="11"
                placeholder="+7 (999) 999-99-99"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>10.1. Пароль*</label>
              <input
                id="password"
                className="form-control"
                type="password"
                min="8"
                max="50"
                placeholder="********"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label>10.2. Повторите пароль*</label>
              <input
                id="repeated-password"
                className="form-control"
                type="password"
                min="8"
                max="50"
                placeholder="********"
                required
              />
            </div>
          </fieldset>
        </form>

        <div className="d-flex justify-content-center">
          <button
            id="registration-button"
            className="mt-3 btn btn-success btn-block"
          >
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
