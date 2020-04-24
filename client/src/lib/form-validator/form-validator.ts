import renderError from "./render-error";

class FormValidator {
  checkEmptiness(fieldId: string): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";

    if (!fieldToCheck) {
      errorText = "Поле не должно быть пустым.";
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }

  checkLength(
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
    let isNumber = false;

    for (let letter of fieldToCheck) {
      if (
        parseInt(letter, 10) === 0 ||
        parseInt(letter, 10) === 1 ||
        parseInt(letter, 10) === 2 ||
        parseInt(letter, 10) === 3 ||
        parseInt(letter, 10) === 4 ||
        parseInt(letter, 10) === 5 ||
        parseInt(letter, 10) === 6 ||
        parseInt(letter, 10) === 7 ||
        parseInt(letter, 10) === 8 ||
        parseInt(letter, 10) === 9
      ) {
        isNumber = true;
      }
    }

    if (isNumber) {
      errorText = "Поле не должно содержать чисел.";
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }

  checkWordsQuantity(fieldId: string): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";
    let isBackspace = false;

    for (let letter of fieldToCheck) {
      if (letter === " ") {
        isBackspace = true;
      }
    }

    if (isBackspace) {
      errorText = "Поле не должно содержать несколько слов.";
    }

    if (errorText) {
      return renderError(fieldId, errorText);
    }

    return errorText;
  }
}

export default FormValidator;
