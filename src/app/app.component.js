import template from './app.component.html';
import './material-icons.scss';
import './app.component.scss';

class AppController {

  /* @ngInject */
  constructor($mdSidenav, $state) {
    Object.assign(this, { $mdSidenav, $state });
    this.menuItems = [];
    this.menuItems.push({
      name: 'menu.users',
      state: 'userList',
      icon: 'person',
    });
  }

  closeSidenav() {
    this.$mdSidenav('sidebar').close();
  }

  isMenuAvailable() {
    return undefined === this.$state.$current.back;
  }

  handleBackMenuClick() {
    if (this.isMenuAvailable()) {
      this.$mdSidenav('sidebar').open();
      return;
    }
    this.$state.go(this.$state.$current.back);
  }
}

export default {
  selector: 'appRoot',
  template,
  controller: AppController,
};
