import template from './menu-icon.component.html';
import './menu-icon.component.scss';

export default {
  selector: 'menuIcon',
  template,
  bindings: {
    active: '<',
  },
};
