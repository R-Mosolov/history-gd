exports.__esModule = true;
// Importing variables
const render_error_1 = require('./render-error');
const users = require('../../data/users.json');
// Creating the new class
const FormValidator = /** @class */ (function () {
  function FormValidator() {
  }
  FormValidator.prototype.checkStringLength = function (fieldDom, minLength, maxLength) {
    const fieldToCheck = fieldDom;
    let errorText = '';
    if (fieldToCheck.length < minLength || fieldToCheck.length > maxLength) {
      errorText = `\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442 ${minLength} \u0434\u043E ${maxLength} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.`;
    }
    if (errorText) {
      return render_error_1.default(fieldDom, errorText);
    }
    return errorText;
  };
  FormValidator.prototype.checkDigitsExistence = function (fieldId) {
    const fieldToCheck = (document.getElementById(`${fieldId}`)).value;
    let errorText = '';
    let isDigit = false;
    for (let _i = 0, fieldToCheck_1 = fieldToCheck; _i < fieldToCheck_1.length; _i++) {
      const item = fieldToCheck_1[_i];
      if (parseInt(item, 10) === 0
                || parseInt(item, 10) === 1
                || parseInt(item, 10) === 2
                || parseInt(item, 10) === 3
                || parseInt(item, 10) === 4
                || parseInt(item, 10) === 5
                || parseInt(item, 10) === 6
                || parseInt(item, 10) === 7
                || parseInt(item, 10) === 8
                || parseInt(item, 10) === 9) {
        isDigit = true;
      }
    }
    if (isDigit) {
      errorText = 'Поле не должно содержать чисел.';
    }
    if (errorText) {
      return render_error_1.default(fieldId, errorText);
    }
    return errorText;
  };
  FormValidator.prototype.checkWordsCount = function (fieldId, wordsMin, wordsMax) {
    const fieldToCheck = (document.getElementById(`${fieldId}`)).value;
    let errorText = '';
    let wordsCount = 0;
    for (let _i = 0, fieldToCheck_2 = fieldToCheck; _i < fieldToCheck_2.length; _i++) {
      const item = fieldToCheck_2[_i];
      wordsCount++;
    }
    if (wordsCount < wordsMin || wordsCount > wordsMax) {
      errorText = `\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442 ${wordsMin} \u0434\u043E ${wordsMax} \u0441\u043B\u043E\u0432.`;
    }
    if (errorText === 'Поле должно содержать от 1 до 1 слов.') {
      errorText = 'Поле должно содержать 1 слово.';
    }
    if (errorText) {
      return render_error_1.default(fieldId, errorText);
    }
    return errorText;
  };
  FormValidator.prototype.checkSpecialSymbols = function (fieldId, searchedSymbol, requirement) {
    const fieldToCheck = (document.getElementById(`${fieldId}`)).value;
    let errorText = '';
    let isSymbolSpecial = false;
    for (let _i = 0, fieldToCheck_3 = fieldToCheck; _i < fieldToCheck_3.length; _i++) {
      const item = fieldToCheck_3[_i];
      if (item === searchedSymbol) {
        isSymbolSpecial = true;
      }
    }
    if (!isSymbolSpecial) {
      errorText = `\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C ${requirement}.`;
    }
    if (errorText) {
      return render_error_1.default(fieldId, errorText);
    }
    return errorText;
  };
  FormValidator.prototype.checkPhoneNumber = function (fieldId) {
    const fieldToCheck = (document.getElementById(`${fieldId}`)).value;
    let errorText = '';
    const firstPhoneDigit = fieldToCheck.split('')[0];
    if (fieldToCheck.length !== 11) {
      errorText = '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u0437 11 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.';
    } else if (firstPhoneDigit !== '8' && firstPhoneDigit !== '7') {
      errorText = '\u041F\u0435\u0440\u0432\u0430\u044F \u0446\u0438\u0444\u0440\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C 8 \u0438\u043B\u0438 7.';
    }
    if (errorText) {
      return render_error_1.default(fieldId, errorText);
    }
    return errorText;
  };
  FormValidator.prototype.checkTwoPasswords = function (firstPasswordId, secondPasswordId, minLenght) {
    // Initializing variables
    const firstFieldToCheck = (document.getElementById(`${firstPasswordId}`)).value;
    const secondFieldToCheck = (document.getElementById(`${secondPasswordId}`)).value;
    let errorText = '';
    let isDigit = false;
    // Validating that passwords are not empty
    if (!firstFieldToCheck || !secondFieldToCheck) {
      errorText = 'Оба поля с паролем должны быть заполнены.';
    } else {
      // Validating that passwords are have required symbols length
      if (firstFieldToCheck.length !== minLenght
                || secondFieldToCheck.length !== minLenght) {
        errorText = `\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u043C\u0435\u0442\u044C ${minLenght} \u0438\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.`;
      } else {
        // Validating concurrence of passwords
        if (firstFieldToCheck !== secondFieldToCheck) {
          errorText = 'Пароли должны совпадать друг с другом.';
        }
        // Validating that passwords are contain digits
        for (let _i = 0, _a = firstFieldToCheck.split(''); _i < _a.length; _i++) {
          const item = _a[_i];
          if (parseInt(item, 10) === 0
                        || parseInt(item, 10) === 1
                        || parseInt(item, 10) === 2
                        || parseInt(item, 10) === 3
                        || parseInt(item, 10) === 4
                        || parseInt(item, 10) === 5
                        || parseInt(item, 10) === 6
                        || parseInt(item, 10) === 7
                        || parseInt(item, 10) === 8
                        || parseInt(item, 10) === 9) {
            isDigit = true;
          }
        }
        if (!isDigit) {
          errorText = 'Пароль должен содержать минимум одну цифру.';
        }
      }
    }
    // Returning errors
    if (errorText) {
      return render_error_1.default(firstPasswordId, errorText);
    }
    return errorText;
  };
  FormValidator.prototype.checkLoginFields = function (emailId, passwordId) {
    // Initializing variables
    const email = (document.getElementById(`${emailId}`)).value;
    const password = (document.getElementById(`${passwordId}`)).value;
    let errorText = '';
    // Checking email's conformity
    users.forEach((user) => {
      const isRegisteredUser = user.email.toString() === email
                && user.password.toString() === password;
      const isRegisteredEmail = user.email.toString() === email;
      if (isRegisteredUser) {
        errorText = 'Отлично! Данный пользователь зарегистрирован в системе.';
        localStorage.setItem('hasAuthorized', 'true');
        console.log(`form-validator.ts: ${localStorage.getItem('hasAuthorized')}`);
      } else if (!isRegisteredUser && isRegisteredEmail) {
        errorText = 'Проверьте, пожалуйста, введённый пароль.';
      } else {
        errorText = 'Данный пользователь не зарегистрирован в системе.';
      }
    });
    // Rendering errors
    if (errorText) {
      return render_error_1.default(passwordId, errorText);
    }
  };
  return FormValidator;
}());
// Exporting the module
module.exports = FormValidator;
