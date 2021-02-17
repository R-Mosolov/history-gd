import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';

import { utils } from '../../../utils';
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
} from '../../../constants';
import TopNavigation from '../../../components/top-navigation/top-navigation';

import './registration.css';

interface RegistrationFormValues {
  lastName: string;
  firstName: string;
  middleName: string;
  university: string;
  profDegree: string;
  academicDegree: string;
  researchInterests: string;
  phone: any;
  registrationEmail: string;
}

let inputsCounter: number = 0;

function addInputLabel(id: string, obj: object) {
  inputsCounter += 1;

  // Add ID attribute for a label
  return (
    <label htmlFor={id}>
      {`${inputsCounter}. ${utils.getLabelById(id, obj, false)}${
        utils.getRequiredById(id, obj) ? ' (обязательное)' : ''
      }`}
    </label>
  );
}

function Registration() {
  inputsCounter = 0;

  return (
    <div className="registration mt-5 mb-5 d-flex justify-content-center container">
      <TopNavigation
        btnOnWorkArea={
          <Link to="/login">
            <button className="on-work-table mr-lg-4 btn btn-warning">
              Войти в систему
            </button>
          </Link>
        }
        isWorkArea={false}
      />

      <div className="w-lg-50">
        <h1 className="pt-5">Регистрация на сайте</h1>

        <Formik
          initialValues={{
            lastName: '',
            firstName: '',
            middleName: '',
            university: '',
            profDegree: '',
            academicDegree: '',
            researchInterests: '',
            phone: '',
            registrationEmail: '',
          }}
          onSubmit={(
            values: RegistrationFormValues,
            { setSubmitting }: FormikHelpers<RegistrationFormValues>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <fieldset className="mt-4">
              <legend>Базовая информация</legend>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(LAST_NAME, BASIC_INFO)}
                <Field
                  id={LAST_NAME}
                  name={LAST_NAME}
                  className="form-control"
                  type="text"
                  minlength="2"
                  maxlength="75"
                  placeholder={utils.getPlaceholderById(LAST_NAME, BASIC_INFO)}
                  required={
                    utils.getRequiredById(LAST_NAME, BASIC_INFO) ? true : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(FIRST_NAME, BASIC_INFO)}
                <Field
                  id={FIRST_NAME}
                  name={FIRST_NAME}
                  className="form-control"
                  type="text"
                  minlength="2"
                  maxlength="75"
                  placeholder={utils.getPlaceholderById(FIRST_NAME, BASIC_INFO)}
                  required={
                    utils.getRequiredById(FIRST_NAME, BASIC_INFO) ? true : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(MIDDLE_NAME, BASIC_INFO)}
                <Field
                  id={MIDDLE_NAME}
                  name={MIDDLE_NAME}
                  className="form-control"
                  type="text"
                  minlength="2"
                  maxlength="75"
                  placeholder={utils.getPlaceholderById(
                    MIDDLE_NAME,
                    BASIC_INFO
                  )}
                  required={
                    utils.getRequiredById(MIDDLE_NAME, BASIC_INFO)
                      ? true
                      : false
                  }
                />
              </div>
            </fieldset>

            <fieldset className="mt-3">
              <legend>Профессиональные сведения</legend>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(UNIVERSITY, PROF_INFO)}
                <Field
                  id={UNIVERSITY}
                  name={UNIVERSITY}
                  className="form-control"
                  type="text"
                  minlength="3"
                  maxlength="75"
                  placeholder={utils.getPlaceholderById(UNIVERSITY, PROF_INFO)}
                  required={
                    utils.getRequiredById(UNIVERSITY, PROF_INFO) ? true : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(PROF_DEGREE, PROF_INFO)}
                <Field
                  id={PROF_DEGREE}
                  name={PROF_DEGREE}
                  className="form-control"
                  type="text"
                  minlength="3"
                  maxlength="75"
                  placeholder={utils.getPlaceholderById(PROF_DEGREE, PROF_INFO)}
                  required={
                    utils.getRequiredById(PROF_DEGREE, PROF_INFO) ? true : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(ACADEMIC_DEGREE, PROF_INFO)}
                <Field
                  id={ACADEMIC_DEGREE}
                  name={ACADEMIC_DEGREE}
                  className="form-control"
                  type="text"
                  minlength="3"
                  maxlength="75"
                  placeholder={utils.getPlaceholderById(
                    ACADEMIC_DEGREE,
                    PROF_INFO
                  )}
                  required={
                    utils.getRequiredById(ACADEMIC_DEGREE, PROF_INFO)
                      ? true
                      : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(RESEARCH_INTERESTS, PROF_INFO)}
                {/* TODO: Change TextArea tag on relevant Formik tag */}
                <Field
                  id={RESEARCH_INTERESTS}
                  name={RESEARCH_INTERESTS}
                  className="form-control"
                  as="textarea"
                  placeholder={utils.getPlaceholderById(
                    RESEARCH_INTERESTS,
                    PROF_INFO
                  )}
                  required={
                    utils.getRequiredById(RESEARCH_INTERESTS, PROF_INFO)
                      ? true
                      : false
                  }
                />
              </div>
            </fieldset>

            <fieldset className="mt-3">
              <legend>Информация для пользования системой</legend>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(REGISTRATION_EMAIL, SERVICE_INFO)}
                <Field
                  id={REGISTRATION_EMAIL}
                  name={REGISTRATION_EMAIL}
                  className="form-control"
                  type="email"
                  minlength="3"
                  maxlength="75"
                  placeholder={utils.getPlaceholderById(
                    REGISTRATION_EMAIL,
                    SERVICE_INFO
                  )}
                  required={
                    utils.getRequiredById(REGISTRATION_EMAIL, SERVICE_INFO)
                      ? true
                      : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(PHONE, SERVICE_INFO)}
                <Field
                  id={PHONE}
                  name={PHONE}
                  className="form-control"
                  type="tel"
                  minlength="11"
                  maxlength="11"
                  placeholder={utils.getPlaceholderById(PHONE, SERVICE_INFO)}
                  required={
                    utils.getRequiredById(PHONE, SERVICE_INFO) ? true : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(PASSWORD, SERVICE_INFO)}
                <Field
                  id={PASSWORD}
                  name={PASSWORD}
                  className="form-control"
                  type="password"
                  minlength="6"
                  maxlength="50"
                  placeholder={utils.getPlaceholderById(PASSWORD, SERVICE_INFO)}
                  required={
                    utils.getRequiredById(PASSWORD, SERVICE_INFO) ? true : false
                  }
                />
              </div>
              <div className="d-flex flex-column mb-3">
                {addInputLabel(REPEAT_PASSWORD, SERVICE_INFO)}
                <Field
                  id={REPEAT_PASSWORD}
                  name={REPEAT_PASSWORD}
                  className="form-control"
                  type="password"
                  minlength="6"
                  maxlength="50"
                  placeholder={utils.getPlaceholderById(
                    REPEAT_PASSWORD,
                    SERVICE_INFO
                  )}
                  required={
                    utils.getRequiredById(REPEAT_PASSWORD, SERVICE_INFO)
                      ? true
                      : false
                  }
                />
              </div>
            </fieldset>

            <button
              id="registration-button"
              className="mt-3 btn btn-success btn-block"
              type="submit"
            >
              Зарегистрироваться
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Registration;
