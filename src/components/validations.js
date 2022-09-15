export function getFormData(form) {
  const data = {};
  const inputs = {};

  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    if (!input.name) continue;
    data[input.name] = input.value.trim();
    inputs[input.name] = input;
    input.classList.remove('validation-error');
    input.classList.remove('validation-success');
  }

  return [data, inputs];
}

export function isContactFormValid(data) {
  const result = {
    errors: [],
    success: [],
  };
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const { contactName, contactEmail } = data;

  if (!contactName) {
    result.errors.push({
      name: 'contactName',
      message: 'Name is required',
    });
  } else if (contactName.length < 2) {
    result.errors.push({
      name: 'contactName',
      message: 'Should be at least 2 symbols',
    });
  } else {
    result.success.push('contactName');
  }

  if (!contactEmail) {
    result.errors.push({
      name: 'contactEmail',
      message: 'E-mail is required',
    });
  } else if (!emailRegex.test(contactEmail)) {
    result.errors.push({
      name: 'contactEmail',
      message: 'Invalid e-mail',
    });
  } else {
    result.success.push('contactEmail');
  }

  return result;
}

export function displayValidationMessages(validationResult, inputs) {
  if (validationResult.success.length) {
    validationResult.success.forEach((success) => {
      inputs[success].classList.add('validation-success');
    });
  }

  if (validationResult.errors.length) {
    validationResult.errors.forEach((error) => {
      createErrorMessage(inputs[error.name], error.message);
    });
  }
}

function createErrorMessage(input, message) {
  input.classList.add('validation-error');

  const inputParent = input.parentNode;
  const errorSpan = document.createElement('span');
  errorSpan.classList.add('validation-error-label');
  errorSpan.textContent = message;
  inputParent.append(errorSpan);
}

export function clearValidationMessages(form) {
  const errorLabels = form.querySelectorAll('.validation-error-label');
  errorLabels.forEach((span) => span.remove());

  const errorSpan = form.querySelector('.js-form-error');
  errorSpan.textContent = '';
}

export function clearForm(form) {
  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    input.value = '';
    input.classList.remove('validation-error');
    input.classList.remove('validation-success');
  }
}
