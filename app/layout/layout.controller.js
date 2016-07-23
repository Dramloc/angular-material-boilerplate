angular.module('app.layout')
    .controller('LayoutController', LayoutController);

/*@ngInject*/
function LayoutController($mdSidenav, $state) {
    var vm = this;
    vm.handleBackMenuClick = handleBackMenuClick;
    vm.closeSidenav = closeSidenav;
    vm.isMenuAvailable = isMenuAvailable;
    vm.menuItems = [{
        name: 'menu.tasks',
        state: 'task.list',
        icon: 'list'
    }];

    activate();

    function activate() {
        console.info('LayoutController activated.');
    }

    function closeSidenav() {
        $mdSidenav('sidebar').close();
    }

    function handleBackMenuClick() {
        if (isMenuAvailable()) {
            $mdSidenav('sidebar').open();
            return;
        }
        $state.go('^');
    }

    function isMenuAvailable() {
        for (var index = 0, length = vm.menuItems.length; index < length; ++index) {
            var menuItem = vm.menuItems[index];
            if ($state.current.name === menuItem.state) {
                return true;
            }
        }
        return false;
    } 
}