/*@ngInject*/
function LayoutController($mdSidenav, $state, $log) {
  var vm = this;
  vm.menuItems = [];

  vm.$onInit = $onInit;
  vm.closeSidenav = closeSidenav;
  vm.handleBackMenuClick = handleBackMenuClick;
  vm.isMenuAvailable = isMenuAvailable;

  function $onInit() {
    vm.menuItems.push({
      name: 'menu.tasks',
      state: 'taskList',
      icon: 'list'
    });
    $log.info('LayoutController activated.');
  }

  function closeSidenav() {
    $mdSidenav('sidebar').close();
  }

  function handleBackMenuClick() {
    if (isMenuAvailable()) {
      return $mdSidenav('sidebar').open();
    }
    $state.go($state.$current.back);
  }

  function isMenuAvailable() {
    return undefined === $state.$current.back;
  }
}

module.exports = LayoutController;