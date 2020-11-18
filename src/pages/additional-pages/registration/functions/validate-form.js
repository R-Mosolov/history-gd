const FormValidator = require('../../../../lib/form-validator/form-validator');

window.addEventListener('DOMContentLoaded', () => {
  const formValidator = new FormValidator();
  const registrationButton = document.getElementById('registration-button');

  if (registrationButton) {
    registrationButton.addEventListener('click', () => {
      // Validating a last name
      formValidator.checkStringLength('last-name', 2, 75);
      formValidator.checkDigitsExistence('last-name');
      formValidator.checkWordsCount('last-name', 1, 1);

      // Validating a first name
      formValidator.checkStringLength('first-name', 2, 75);
      formValidator.checkDigitsExistence('first-name');
      formValidator.checkWordsCount('first-name', 1, 1);

      // Validating a middle name
      formValidator.checkStringLength('middle-name', 2, 75);
      formValidator.checkDigitsExistence('middle-name');
      formValidator.checkWordsCount('middle-name', 1, 1);

      // Validating a university
      formValidator.checkStringLength('university', 3, 75);
      formValidator.checkWordsCount('university', 3, 10);

      // Validating an academic title
      formValidator.checkStringLength('academic-title', 3, 75);
      formValidator.checkDigitsExistence('academic-title');
      formValidator.checkWordsCount('academic-title', 1, 15);

      // Validating an academic degree
      formValidator.checkStringLength('academic-degree', 3, 75);
      formValidator.checkDigitsExistence('academic-degree');
      formValidator.checkWordsCount('academic-degree', 1, 15);

      // Validating research interests
      formValidator.checkStringLength('research-interests', 3, 300);

      // Validating an email
      formValidator.checkStringLength('registration-email', 4, 75);
      formValidator.checkSpecialSymbols(
        'registration-email',
        '@',
        'email (электронную почту)',
      );

      // Validating a phone
      formValidator.checkPhoneNumber('phone');

      // Validating passwords
      formValidator.checkTwoPasswords('password', 'repeated-password', 8);
    });
  }
});
