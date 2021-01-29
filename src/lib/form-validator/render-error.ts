function renderError(fieldId: string, errorText: string) {
  const field = document.getElementById(`${fieldId}`);

  let errorField = document.createElement("div");
  const errorFieldById = document.getElementById(`error-${fieldId}`);
  errorField.innerHTML = errorText;
  errorField.className = "m-0 mt-2 alert alert-danger error-message-message";
  errorField.id = `error-${fieldId}`;

  if (errorFieldById) {
    errorFieldById.remove();
  }

  if (field) {
    field.after(errorField);
  }
}

export default renderError;
