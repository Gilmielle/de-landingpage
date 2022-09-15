export function coopModalFunctionality() {
  const coopModal = document.getElementById('coop-modal');
  const coopModalForm = document.querySelector('.coop-modal__form');
  const coopModalSuccess = document.querySelector('.coop-modal__success');
  const coopBtn = document.getElementById('coop_btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalActiveClass = 'modal_active';
  const modalBackgr = document.querySelector('.modal__cell');

  function handleClick(evt) {
    if (evt.target === modalBackgr) {
      enableScroll();
      coopModal.classList.remove(modalActiveClass);
    }
  }

  function disableScroll() {
    const topScroll = window.pageYOffset || document.documentElement.scrollTop;
    const leftScroll =
      window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(leftScroll, topScroll);
    };
  }

  function enableScroll() {
    window.onscroll = () => {};
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
