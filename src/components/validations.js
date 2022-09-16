export function getFormData(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const inputs = {};

  Array.from(form.elements).forEach((element) => {
    const input = element;
    if (input.dataset.validationInput) {
      inputs[input.dataset.validationInput] = input;
      input.classList.remove('validation-error');
      input.classList.remove('validation-success');
    }
  });

  return [data, inputs];
}

export function isContactFormValid(inputs) {
  const result = {
    errors: [],
    success: [],
  };
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const { contactName, contactEmail } = inputs;

  if (!contactName.value) {
    result.errors.push({
      name: contactName.dataset.validationInput,
      message: 'Name is required',
    });
  } else if (contactName.value.length < 2) {
    result.errors.push({
      name: contactName.dataset.validationInput,
      message: 'Should be at least 2 symbols',
    });
  } else {
    result.success.push(contactName.dataset.validationInput);
  }

  if (!contactEmail.value) {
    result.errors.push({
      name: contactEmail.dataset.validationInput,
      message: 'E-mail is required',
    });
  } else if (!emailRegex.test(contactEmail.value)) {
    result.errors.push({
      name: contactEmail.dataset.validationInput,
      message: 'Invalid e-mail',
    });
  } else {
    result.success.push(contactEmail.dataset.validationInput);
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
