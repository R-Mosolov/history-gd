// Importing dependencies
import renderError from "./render-error";
// import * as users from "../../data/users.json";

const errorForRequiredFields = 'Поле является обязательным для заполнения.';
const errorField: any = (fieldId: any) => document.getElementById(`error-${fieldId}`);
const deleteErrorById = (fieldId: any) => { if (errorField(fieldId)) return errorField(fieldId).remove() };

// Creating the new class
class FormValidator {
  // checkRequiredFields(fieldId: string): void | string {
  //   const fieldToCheck: any = document.getElementById(`${fieldId}`);
  //   const hasFieldFilled: boolean = fieldToCheck.value.length === 0;
  //   let errorText: string = "";

  //   if (hasFieldFilled) {
  //     errorText = errorForRequiredFields;
  //   }

  //   if (errorText !== "") {
  //     renderError(fieldId, errorText);
  //   } else {
  //     deleteErrorById(fieldId);
  //   }

  //   return errorText;
  // }

  // checkStringLength(
  //   fieldId: string,
  //   minLength: number,
  //   maxLength: number
  // ): void | string {
  //   const fieldToCheck: any = document.getElementById(`${fieldId}`);
  //   let errorText: string = "";

  //   if (
  //     fieldToCheck.value && fieldToCheck.value.length < minLength
  //     || fieldToCheck.value && fieldToCheck.value.length > maxLength
  //   ) {
  //     errorText = `Поле должно содержать от ${minLength} до ${maxLength} символов.`;
  //   }

  //   if (errorText !== "") {
  //     return renderError(fieldId, errorText);
  //   }

  //   return errorText;
  // }

  // checkDigitsExistence(fieldId: string): void | string {
  //   const fieldToCheck: string = (<HTMLInputElement>(
  //     document.getElementById(`${fieldId}`)
  //   )).value;
  //   let errorText: string = "";
  //   let isDigit: boolean = false;

  //   for (let item of fieldToCheck) {
  //     if (
  //       parseInt(item, 10) === 0 ||
  //       parseInt(item, 10) === 1 ||
  //       parseInt(item, 10) === 2 ||
  //       parseInt(item, 10) === 3 ||
  //       parseInt(item, 10) === 4 ||
  //       parseInt(item, 10) === 5 ||
  //       parseInt(item, 10) === 6 ||
  //       parseInt(item, 10) === 7 ||
  //       parseInt(item, 10) === 8 ||
  //       parseInt(item, 10) === 9
  //     ) {
  //       isDigit = true;
  //     }
  //   }

  //   if (isDigit) {
  //     errorText = "Поле не должно содержать чисел.";
  //   }

  //   if (errorText !== "") {
  //     return renderError(fieldId, errorText);
  //   }

  //   return errorText;
  // }

  checkWordsQuantity(
    fieldId: string,
    wordsMin: number,
    wordsMax: number
  ): void | string {
    const fieldToCheck: string = (<HTMLInputElement>(
      document.getElementById(`${fieldId}`)
    )).value;
    let errorText: string = "";
    let wordsCount: number = 0;

    const errorField: any = document.getElementById(`error-${fieldId}`);
    if (errorField) {
      return errorField.remove();
    }

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
      renderError(fieldId, errorText);
    }

    return errorText;
  }

  // checkSpecialSymbols(
  //   fieldId: string,
  //   searchedSymbol: string,
  //   requirement: string
  // ): void | string {
  //   const fieldToCheck: string = (<HTMLInputElement>(
  //     document.getElementById(`${fieldId}`)
  //   )).value;
  //   let errorText: string = "";
  //   let isSymbolSpecial = false;

  //   for (let item of fieldToCheck) {
  //     if (item === searchedSymbol) {
  //       isSymbolSpecial = true;
  //     }
  //   }

  //   if (!isSymbolSpecial) {
  //     errorText = `Поле должно содержать ${requirement}.`;
  //   }

  //   if (errorText) {
  //     return renderError(fieldId, errorText);
  //   }

  //   return errorText;
  // }

  // checkPhoneNumber(fieldId: string): void | string {
  //   const fieldToCheck: string = (<HTMLInputElement>(
  //     document.getElementById(`${fieldId}`)
  //   )).value;
  //   let errorText: string = "";
  //   const firstPhoneDigit: string = fieldToCheck.split("")[0];

  //   if (fieldToCheck.length !== 11) {
  //     errorText = `Поле должно содержать телефон из 11 символов.`;
  //   } else if (firstPhoneDigit !== "8" && firstPhoneDigit !== "7") {
  //     errorText = `Первая цифра должна быть 8 или 7.`;
  //   }

  //   if (errorText) {
  //     return renderError(fieldId, errorText);
  //   }

  //   return errorText;
  // }

  // checkTwoPasswords(
  //   firstPasswordId: string,
  //   secondPasswordId: string,
  //   minLenght: number
  // ): void | string {
  //   // Initializing variables
  //   const firstFieldToCheck: string = (<HTMLInputElement>(
  //     document.getElementById(`${firstPasswordId}`)
  //   )).value;
  //   const secondFieldToCheck: string = (<HTMLInputElement>(
  //     document.getElementById(`${secondPasswordId}`)
  //   )).value;
  //   let errorText: string = "";
  //   let isDigit: boolean = false;

  //   // Validating that passwords are not empty
  //   if (!firstFieldToCheck || !secondFieldToCheck) {
  //     errorText = "Оба поля с паролем должны быть заполнены.";
  //   } else {
  //     // Validating that passwords are have required symbols length
  //     if (
  //       firstFieldToCheck.length !== minLenght ||
  //       secondFieldToCheck.length !== minLenght
  //     ) {
  //       errorText = `Пароль должен иметь ${minLenght} или более символов.`;
  //     } else {
  //       // Validating concurrence of passwords
  //       if (firstFieldToCheck !== secondFieldToCheck) {
  //         errorText = "Пароли должны совпадать друг с другом.";
  //       }

  //       // Validating that passwords are contain digits
  //       for (let item of firstFieldToCheck.split("")) {
  //         if (
  //           parseInt(item, 10) === 0 ||
  //           parseInt(item, 10) === 1 ||
  //           parseInt(item, 10) === 2 ||
  //           parseInt(item, 10) === 3 ||
  //           parseInt(item, 10) === 4 ||
  //           parseInt(item, 10) === 5 ||
  //           parseInt(item, 10) === 6 ||
  //           parseInt(item, 10) === 7 ||
  //           parseInt(item, 10) === 8 ||
  //           parseInt(item, 10) === 9
  //         ) {
  //           isDigit = true;
  //         }
  //       }

  //       if (!isDigit) {
  //         errorText = "Пароль должен содержать минимум одну цифру.";
  //       }
  //     }
  //   }

  //   // Returning errors
  //   if (errorText) {
  //     return renderError(firstPasswordId, errorText);
  //   }

  //   return errorText;
  // }

  // checkLoginFields(emailId: string, passwordId: string): void | string {
  //   // Initializing variables
  //   const email: string = (<HTMLInputElement>(
  //     document.getElementById(`${emailId}`)
  //   )).value;
  //   const password: string = (<HTMLInputElement>(
  //     document.getElementById(`${passwordId}`)
  //   )).value;
  //   let errorText: string = "";

  //   // Checking email's conformity
  //   users.forEach((user) => {
  //     const isRegisteredUser =
  //       user.email.toString() === email &&
  //       user.password.toString() === password;
  //     const isRegisteredEmail = user.email.toString() === email;

  //     if (isRegisteredUser) {
  //       errorText = "Отлично! Данный пользователь зарегистрирован в системе.";
  //       localStorage.setItem("hasAuthorized", "true");
  //       console.log(
  //         `form-validator.ts: ${localStorage.getItem("hasAuthorized")}`
  //       );
  //     } else if (!isRegisteredUser && isRegisteredEmail) {
  //       errorText = "Проверьте, пожалуйста, введённый пароль.";
  //     } else {
  //       errorText = "Данный пользователь не зарегистрирован в системе.";
  //     }
  //   });

  //   // Rendering errors
  //   if (errorText) {
  //     return renderError(passwordId, errorText);
  //   }
  // }
}

// Exporting the module
module.exports = FormValidator;
