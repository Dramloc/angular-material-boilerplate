angular.module('app.layout')
    .controller('LayoutController', LayoutController);

/*@ngInject*/
function LayoutController($mdSidenav, $state, menuService) {
    var vm = this;
    vm.isMenuAvailable = menuService.isMenuAvailable;
    vm.closeSidenav = closeSidenav;
    vm.handleBackMenuClick = handleBackMenuClick;
    vm.menuItems = menuService.menuItems;

    activate();

    function activate() {
        menuService.add({
            name: 'menu.tasks',
            state: 'task.list',
            icon: 'list'
        });
        console.info('LayoutController activated.');
    }

    function closeSidenav() {
        $mdSidenav('sidebar').close();
    }

    function handleBackMenuClick(state) {
        if (menuService.isMenuAvailable()) {
            return $mdSidenav('sidebar').open();
        }
        $state.go($state.$current.back);
    }
}