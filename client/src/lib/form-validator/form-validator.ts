import renderError from "./render-error";

class FormValidator {
  checkStringLength(
    fieldId: string,
    minLength: number,
    maxLength: number
  ): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";

    if (fieldToCheck.length < minLength || fieldToCheck.length > maxLength) {
      errorText = `Поле должно содержать от ${minLength} до ${maxLength} символов.`;
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }

  checkDigitsExistence(fieldId: string): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";
    let isDigit: boolean = false;

    for (let item of fieldToCheck) {
      if (
        parseInt(item, 10) === 0 ||
        parseInt(item, 10) === 1 ||
        parseInt(item, 10) === 2 ||
        parseInt(item, 10) === 3 ||
        parseInt(item, 10) === 4 ||
        parseInt(item, 10) === 5 ||
        parseInt(item, 10) === 6 ||
        parseInt(item, 10) === 7 ||
        parseInt(item, 10) === 8 ||
        parseInt(item, 10) === 9
      ) {
        isDigit = true;
      }
    }

    if (isDigit) {
      errorText = "Поле не должно содержать чисел.";
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }

  checkWordsCount(
    fieldId: string,
    wordsMin: number,
    wordsMax: number
  ): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";
    let wordsCount: number = 0;

    for (let item of fieldToCheck) {
      wordsCount++;
    }

    if (wordsCount < wordsMin || wordsCount > wordsMax) {
      errorText = `Поле должно содержать от ${wordsMin} до ${wordsMax} слов.`;
    }

    if (errorText === "Поле должно содержать от 1 до 1 слов.") {
      errorText = "Поле должно содержать 1 слово.";
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }

  checkSpecialSymbols(
    fieldId: string,
    searchedSymbol: string,
    requirement: string
  ): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";
    let isSymbolSpecial = false;

    for (let item of fieldToCheck) {
      if (item === searchedSymbol) {
        isSymbolSpecial = true;
      }
    }

    if (!isSymbolSpecial) {
      errorText = `Поле должно содержать ${requirement}.`;
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }

  checkPhoneNumber(fieldId: string): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";
    const firstPhoneDigit: string = fieldToCheck.split("")[0];

    if (fieldToCheck.length !== 11) {
      errorText = `Поле должно содержать телефон из 11 символов.`;
    } else if (firstPhoneDigit !== "8" && firstPhoneDigit !== "7") {
      errorText = `Первая цифра должна быть 8 или 7.`;
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }

  checkPasswords(
    firstPasswordId: string,
    secondPasswordId: string,
    minLenght: number
  ): void | string {
    // Initializing variables
    const firstFieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${firstPasswordId}`)
    )).value;
    const secondFieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${secondPasswordId}`)
    )).value;
    let errorText: string = "";
    let isDigit: boolean = false;

    // Validating that passwords are not empty
    if (!firstFieldToCheck || !secondFieldToCheck) {
      errorText = "Оба поля с паролем должны быть заполнены.";
    } else {
      // Validating that passwords are have required symbols length
      if (
        firstFieldToCheck.length !== minLenght ||
        secondFieldToCheck.length !== minLenght
      ) {
        errorText = `Пароль должен иметь ${minLenght} или более символов.`;
      } else {
        // Validating concurrence of passwords
        if (firstFieldToCheck !== secondFieldToCheck) {
          errorText = "Пароли должны совпадать друг с другом.";
        }

        // Validating that passwords are contain digits
        for (let item of firstFieldToCheck.split("")) {
          if (
            parseInt(item, 10) === 0 ||
            parseInt(item, 10) === 1 ||
            parseInt(item, 10) === 2 ||
            parseInt(item, 10) === 3 ||
            parseInt(item, 10) === 4 ||
            parseInt(item, 10) === 5 ||
            parseInt(item, 10) === 6 ||
            parseInt(item, 10) === 7 ||
            parseInt(item, 10) === 8 ||
            parseInt(item, 10) === 9
          ) {
            isDigit = true;
          }
        }

        if (!isDigit) {
          errorText = "Пароль должен содержать минимум одну цифру.";
        }
      }
    }

    // Returning errors
    if (errorText) {
      return renderError(firstPasswordId, errorText);
    }

    return errorText;
  }
}

export default FormValidator;
