window.addEventListener("DOMContentLoaded", () => {
  // DEFINING REGISTRATION FIELDS

  // Basic information
  const lastName = document.getElementById("last-name");
  const firstName = document.getElementById("first-name");
  const middleName = document.getElementById("middle-name");

  // Professional information
  const university = document.getElementById("university");
  const academicTitle = document.getElementById("academic-title");
  const academicDegree = document.getElementById("academic-degree");
  const researchInterests = document.getElementById("research-interests");

  // Information needed to use the app
  const email = document.getElementById("email");
  const mobileNumber = document.getElementById("mobile-number");
  const password = document.getElementById("password");
  const repeatedPassword = document.getElementById("repeated-password");

  // Controllers to manage errors
  const registrationButton = document.getElementById("registration-button");
  let errorText = [];

  // VALIDATING DATA

  // Validating last name
  registrationButton.addEventListener("click", () => {
    if (!lastName.value) {
      errorText.push("Поле фамилии не должно быть пустым.");
    } else if (lastName.value) {
      let isNumber = false;
      let isSpace = false;

      for (let letter of lastName.value) {
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

        if (letter === " ") {
          isSpace = true;
        }
      }

      if (isNumber) {
        errorText.push("Фамилия не должна содержать чисел.");
      }
      if (isSpace) {
        errorText.push("Фамилия не должна содержать пробелов.");
      }
    }

    return alert(errorText);
  });
});
