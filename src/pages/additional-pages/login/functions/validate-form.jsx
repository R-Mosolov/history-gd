import FormValidator from "../../../../lib/form-validator/form-validator";
import React from "react";
import { Link } from "react-router-dom";


const formValidator = new FormValidator();

// Validating registration data
function validateForm() {
  formValidator.checkLoginFields("login-page__email", "login-page__password");

  return <Link to="/" className="notDisabled">Link</Link>;
}

export default validateForm;
