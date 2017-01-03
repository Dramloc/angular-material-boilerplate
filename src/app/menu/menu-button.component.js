import template from './menu-button.component.html';
import './menu-button.component.scss';

class MenuButtonController {

  /* @ngInject */
  constructor($state, $mdSidenav, $mdMedia) {
    Object.assign(this, { $state, $mdSidenav, $mdMedia });
  }

  isMenuAvailable() {
    return undefined === this.$state.$current.back;
  }

  onClick() {
    if (this.isMenuAvailable()) {
      this.$mdSidenav('sidebar').open();
      return;
    }
    this.$state.go(this.$state.$current.back);
  }
}

export default {
  selector: 'menuButton',
  template,
  controller: MenuButtonController,
};
