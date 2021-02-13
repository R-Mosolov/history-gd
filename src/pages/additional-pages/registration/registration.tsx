import React from "react";
import { Link } from "react-router-dom";

import { utils } from "../../../utils";
import {
  BASIC_INFO,
  PROF_INFO,
  SERVICE_INFO,
  FIRST_NAME,
  MIDDLE_NAME,
  LAST_NAME,
  UNIVERSITY,
  PROF_DEGREE,
  ACADEMIC_DEGREE,
  RESEARCH_INTERESTS,
  REGISTRATION_EMAIL,
  PHONE,
  PASSWORD,
  REPEAT_PASSWORD,
} from "../../../constants";
import TopNavigation from "../../../components/top-navigation/top-navigation";

import "./registration.css";

let inputsCounter: number = 0;

function addInput(id: string, obj: object) {
  inputsCounter += 1;

  // Add ID attribute for a label
  return (
    <label htmlFor={id}>
      {`${inputsCounter}. ${utils.getLabelById(id, obj)}${
        utils.getRequiredById(id, obj) ? "*" : ""
      }`}
    </label>
  );
}

function Registration() {
  inputsCounter = 0;

  return (
    <div className="registration mt-5 mb-5 d-flex justify-content-center container">
      <TopNavigation isWorkArea={false} />

      <div className="w-lg-50">
        <h1 className="pt-5">Регистрация на сайте</h1>

        <form>
          <fieldset className="mt-4">
            <legend>Базовая информация</legend>
            <div className="d-flex flex-column mb-3">
              {addInput(LAST_NAME, BASIC_INFO)}
              <input
                id={LAST_NAME}
                className="form-control"
                type="text"
                min="2"
                max="75"
                placeholder="Ломоносов"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(FIRST_NAME, BASIC_INFO)}
              <input
                id={FIRST_NAME}
                className="form-control"
                type="text"
                min="2"
                max="75"
                placeholder="Михаил"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(MIDDLE_NAME, BASIC_INFO)}
              <input
                id={MIDDLE_NAME}
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
              {addInput(UNIVERSITY, PROF_INFO)}
              <input
                id={UNIVERSITY}
                className="form-control"
                type="text"
                min="3"
                max="75"
                placeholder="Московский Государственный Университет"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(PROF_DEGREE, PROF_INFO)}
              <input
                id={PROF_DEGREE}
                className="form-control"
                type="text"
                min="3"
                max="75"
                placeholder="Профессор"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(ACADEMIC_DEGREE, PROF_INFO)}
              <input
                id={ACADEMIC_DEGREE}
                className="form-control"
                type="text"
                min="3"
                max="75"
                placeholder="Академик СПбАН"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(RESEARCH_INTERESTS, PROF_INFO)}
              <textarea
                id={RESEARCH_INTERESTS}
                className="form-control"
                placeholder="Мозаичное дело, изобретение ночезрительных труб"
              />
            </div>
          </fieldset>

          <fieldset className="mt-3">
            <legend>Информация для пользования системой</legend>
            <div className="d-flex flex-column mb-3">
              {addInput(REGISTRATION_EMAIL, SERVICE_INFO)}
              <input
                id={REGISTRATION_EMAIL}
                className="form-control"
                type="email"
                min="3"
                max="75"
                placeholder="MV.Lomonosov@msu.ru"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(PHONE, SERVICE_INFO)}
              <input
                id={PHONE}
                className="form-control"
                type="number"
                min="11"
                max="11"
                placeholder="+7 (999) 999-99-99"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(PASSWORD, SERVICE_INFO)}
              <input
                id={PASSWORD}
                className="form-control"
                type="password"
                min="8"
                max="50"
                placeholder="********"
                required
              />
            </div>
            <div className="d-flex flex-column mb-3">
              {addInput(REPEAT_PASSWORD, SERVICE_INFO)}
              <input
                id={REPEAT_PASSWORD}
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
      </div>
    </div>
  );
}

export default Registration;
