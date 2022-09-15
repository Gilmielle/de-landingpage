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
  const coopModal = document.querySelector('.coop-modal__form');
  const coopModalSuccess = document.querySelector('.coop-modal__success');
  const errorSpan = contactForm.querySelector('.js-form-error');

  async function handleSubmit(evt) {
    evt.preventDefault();
    clearValidationMessages(contactForm);
    const [data, inputs] = getFormData(contactForm);
    const result = isContactFormValid(data);
    displayValidationMessages(result, inputs);
    if (result.errors.length === 0) {
      try {
        await sendFormData(data);

        coopModal.classList.remove('coop-modal__form_active');
        coopModalSuccess.classList.add('coop-modal__success_active');
        clearForm(contactForm);
      } catch (err) {
        errorSpan.textContent = err.errorMessages.message;
      }
    }
  }

  contactForm.addEventListener('submit', handleSubmit);
}
