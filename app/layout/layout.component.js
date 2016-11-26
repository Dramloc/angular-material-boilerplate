import template from './layout.tpl.html';

class LayoutController {

  /* @ngInject */
  constructor($mdSidenav, $state) {
    Object.assign(this, { $mdSidenav, $state });
    this.menuItems = [];
    this.menuItems.push({
      name: 'menu.tasks',
      state: 'taskList',
      icon: 'list',
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
  template,
  controller: LayoutController,
  selector: 'ambLayout',
};
