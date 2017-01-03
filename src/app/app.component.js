import template from './app.component.html';
import './material-icons.scss';
import './app.component.scss';

class AppController {

  /* @ngInject */
  constructor($mdSidenav) {
    Object.assign(this, { $mdSidenav });
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
}

export default {
  selector: 'appRoot',
  template,
  controller: AppController,
};
