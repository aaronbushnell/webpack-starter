import './index.css'
import delegate from 'delegate-events';

export default class Accordion {
  constructor ($el) {
    this.$el = $el;
    this.open = false;
    this.events();
  }

  events () {
    this.$el.addEventListener('click', this.checkAccordionStatus.bind(this));
  }

  checkAccordionStatus (ev) {
    if (this.open) {
      this.closeAccordion(ev);
    } else {
      this.openAccordion(ev);
    }
  }

  closeAccordion (ev) {
    this.open = false;
    ev.target.nextElementSibling.classList.remove('Accordions__content--open');
  }

  openAccordion (ev) {
    this.open = true;
    ev.target.nextElementSibling.classList.add('Accordions__content--open');
  }
}
