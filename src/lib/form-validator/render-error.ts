function renderError(fieldId: string, errorText: string) {
  const field = document.getElementById(`${fieldId}`);

  let errorField = document.createElement("div");
  errorField.innerHTML = errorText;
  errorField.className = "m-0 mt-2 alert alert-danger error-message";

  if (field) {
    field.after(errorField);
  }
}

export default renderError;
