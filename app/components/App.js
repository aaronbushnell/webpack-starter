import Accordion from './Accordion';
import Header from './Header';
import Footer from './Footer';

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

if (document.querySelector('[data-accordion]')) {
  for (let i = 0; i < document.querySelectorAll('[data-accordion]').length; i++) {
    new Accordion(document.querySelectorAll('[data-accordion]')[i]);
  }
}

new Header();
new Footer();
