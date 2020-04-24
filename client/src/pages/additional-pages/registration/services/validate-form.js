import FormValidator from "../../../../lib/form-validator/form-validator";

window.addEventListener("DOMContentLoaded", () => {
  const formValidator = new FormValidator();
  const registrationButton = document.getElementById("registration-button");

  if (registrationButton) {
    registrationButton.addEventListener("click", () => {
      // Validating a last name
      formValidator.checkEmptiness("last-name");
      formValidator.checkLength("last-name", 2, 75);
      formValidator.checkDigitsExistence("last-name");
      formValidator.checkWordsQuantity("last-name");

      // Validating a first name
      formValidator.checkEmptiness("first-name");
      formValidator.checkLength("first-name", 2, 75);
      formValidator.checkDigitsExistence("first-name");
      formValidator.checkWordsQuantity("first-name");

      // Validating a middle name
      formValidator.checkEmptiness("middle-name");
      formValidator.checkLength("middle-name", 2, 75);
      formValidator.checkDigitsExistence("middle-name");
      formValidator.checkWordsQuantity("middle-name");
    });
  }
});
