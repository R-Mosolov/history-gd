const FormValidator = require("../../../../lib/form-validator/form-validator");

const formValidator = new FormValidator();

// Validating registration data
function validateForm() {
  formValidator.checkLoginFields("login-page__email", "login-page__password");

  window.location.pathname = "/manuscripts";
  localStorage.setItem("hasAuthorized", "true");
  console.log(`validate-form.jsx: ${localStorage.getItem("hasAuthorized")}`);
}

export default validateForm;
