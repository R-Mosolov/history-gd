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
} from "../../../constants/index.js";
import TopNavigation from "../../../components/top-navigation/top-navigation";

import db from "../../../server/db";
import { USERS } from "../../../constants";
import validateRegistrationForm from "./functions/validate-registration-form";

import "./registration.css";

let inputsCounter = 0;

function addInput(id, obj) {
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

function postDataToDB() {
  return db
    .collection(USERS)
    .doc(Date.now().toString())
    .set({
      basicInfo: {
        middleName: document.getElementById(MIDDLE_NAME).value,
        lastName: document.getElementById(LAST_NAME).value,
        firstName: document.getElementById(FIRST_NAME).value,
      },
      profInfo: {
        academicDegree: document.getElementById(ACADEMIC_DEGREE).value,
        profDegree: document.getElementById(PROF_DEGREE).value,
        university: document.getElementById(UNIVERSITY).value,
        researchInterests: document.getElementById(RESEARCH_INTERESTS).value,
      },
      serviceInfo: {
        password: document.getElementById(PASSWORD).value,
        registrationEmail: document.getElementById(REGISTRATION_EMAIL).value,
        phone: document.getElementById(PHONE).value,
        repeatPassword: document.getElementById(REPEAT_PASSWORD).value,
      },
    });
}

function checkFormData() {
  return validateRegistrationForm();
  // return postDataToDB();
}

function Registration() {
  inputsCounter = 0;

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
            onClick={() => checkFormData()}
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
