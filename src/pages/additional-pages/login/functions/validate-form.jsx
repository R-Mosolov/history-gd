import FormValidator from "../../../../lib/form-validator/form-validator";
import React from "react";

const formValidator = new FormValidator();

// Validating registration data
function validateForm() {
  formValidator.checkLoginFields("login-page__email", "login-page__password");
}

export default validateForm;
