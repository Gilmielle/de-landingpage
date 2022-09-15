import './styles/common.scss';
import './styles/header.scss';
import './styles/hero.scss';
import './styles/what-we-do.scss';
import './styles/clients.scss';
import './styles/footer.scss';
import { createAnimatedLinks } from './components/createAnimatedLinks';
import { coopModalFunctionality } from './components/coopModalFunctionality';
import { contactFormValidation } from './components/contactFormValidation';

document.addEventListener('DOMContentLoaded', () => {
  createAnimatedLinks();
  coopModalFunctionality();
  contactFormValidation();
});
