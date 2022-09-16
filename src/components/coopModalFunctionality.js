import { disableScroll } from '../utils/disableScroll';
import { enableScroll } from '../utils/enableScroll';

export function coopModalFunctionality() {
  const coopModal = document.getElementById('coop-modal');
  const coopModalForm = document.getElementById('coop-modal-form');
  const coopModalSuccess = document.getElementById('coop-modal-success');
  const coopBtn = document.getElementById('coop_btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalActiveClass = 'modal_active';
  const modalBackgr = document.getElementById('modal-background');

  function handleClick(evt) {
    if (evt.target === modalBackgr) {
      enableScroll();
      coopModal.classList.remove(modalActiveClass);
    }
  }

  function openModal() {
    coopModal.classList.add(modalActiveClass);
    coopModalForm.classList.add('coop-modal__form_active');
    coopModalSuccess.classList.remove('coop-modal__success_active');
    disableScroll();
    document.addEventListener('click', handleClick);
  }

  function closeModal() {
    coopModal.classList.remove(modalActiveClass);
    enableScroll();
    document.removeEventListener('click', handleClick);
  }

  coopBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
}
