exports.__esModule = true;
function renderError(fieldId, errorText) {
  const field = document.getElementById(`${fieldId}`);
  const errorField = document.createElement('div');
  const errorFieldById = document.getElementById(`error-${fieldId}`);
  errorField.innerHTML = errorText;
  errorField.className = 'm-0 mt-2 alert alert-danger error-message-message';
  errorField.id = `error-${fieldId}`;
  if (errorFieldById) {
    errorFieldById.remove();
  }
  if (field) {
    field.after(errorField);
  }
}
exports.default = renderError;
