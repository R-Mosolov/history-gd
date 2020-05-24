import FormValidator from "../../../../lib/form-validator/form-validator";

const formValidator = new FormValidator();

function validateForm() {
  // Validating an email
  formValidator.checkStringLength("login-email", 4, 75);
  formValidator.checkSpecialSymbols(
    "login-email",
    "@",
    "email (электронную почту)"
  );

  // Validating a password
  formValidator.checkOnePassword("login-password", "8", "50");
}

export default validateForm;
