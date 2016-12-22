import template from './menu-icon.component.html';
import './menu-icon.component.scss';

class MenuIconController {

  /* @ngInject */
  constructor() {
    Object.assign(this, {});
  }
}

export default {
  selector: 'menuIcon',
  template,
  controller: MenuIconController,
  bindings: {
    active: '<',
  },
};
