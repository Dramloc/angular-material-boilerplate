angular.module('app.layout')
    .controller('LayoutController', LayoutController);

/*@ngInject*/
function LayoutController($mdSidenav) {
    var vm = this;
    vm.toggleSidenav = toggleSidenav;
    vm.entries = [{
        name: 'menu.tasks',
        state: 'tasks'
    }]

    function toggleSidenav(menuId) {
        $mdSidenav(menuId).toggle();
    }
}