import {
  clearValidationMessages,
  getFormData,
  isContactFormValid,
  displayValidationMessages,
  clearForm,
} from './validations';
import { sendFormData } from './api';

export function contactFormValidation() {
  const contactForm = document.getElementById('contact-form');
  const coopModalForm = document.getElementById('coop-modal-form');
  const coopModalSuccess = document.getElementById('coop-modal-success');
  const errorSpan = document.getElementById('js-form-error');

  async function handleSubmit(evt) {
    evt.preventDefault();
    clearValidationMessages(contactForm);
    const [data, inputs] = getFormData(contactForm);
    const result = isContactFormValid(inputs);
    displayValidationMessages(result, inputs);
    if (result.errors.length === 0) {
      try {
        await sendFormData(data);

        if (coopModalForm) {
          coopModalForm.classList.remove('coop-modal__form_active');
        }
        if (coopModalSuccess) {
          coopModalSuccess.classList.add('coop-modal__success_active');
        }
        clearForm(contactForm);
      } catch (err) {
        if (errorSpan) {
          errorSpan.textContent = err.errorMessages.message;
        }
      }
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }
}
