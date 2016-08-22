angular.module('app.menu')
    .factory('menuService', menuService);

/*@ngInject*/
function menuService($state) {
    var menuItems = [];
    var service = {
        add: add,
        isMenuAvailable: isMenuAvailable,
        menuItems: menuItems
    };

    return service;

    /**
     * Add menu item to application menu.
     * @param {MenuItem} menuItem - Menu item to add.
     */
    function add(menuItem) {
        menuItems.push(menuItem);
    }

    /**
     * Get if menu is available.
     * Used for hamburger menu visibility/back-menu transition.
     */
    function isMenuAvailable() {
        return undefined === $state.$current.back;
    }
}