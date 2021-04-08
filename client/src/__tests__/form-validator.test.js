const FormValidator = require('../lib/form-validator/form-validator');

const formValidator = new FormValidator();

// Initialization variables
const defaultErrorMessage = '';
const errorMessage = (fieldDom, minLength, maxLength) =>
  `Поле должно содержать от ${minLength} до ${maxLength} символов.`;

// Checking string length
test('String length is EQUAL to requirement', () => {
  expect(formValidator.checkStringLength('abcd', 2, 50)).toBe(
    defaultErrorMessage
  );
});

test('String length is LESS than requirement', () => {
  expect(formValidator.checkStringLength('a', 2, 50)).toBe(
    errorMessage('a', 2, 50)
  );
});

test('String length is MORE than requirement', () => {
  expect(
    formValidator.checkStringLength(
      'abcdefdabcdefdabcdefdabcdefdabcdefdabcdefdabcdefdabcdefd',
      2,
      50
    )
  ).toBe(
    errorMessage(
      'abcdefdabcdefdabcdefdabcdefdabcdefdabcdefdabcdefdabcdefd',
      2,
      50
    )
  );
});
