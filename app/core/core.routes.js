angular.module('app.core')
    .config(routeConfiguration);

/*@ngInject*/
function routeConfiguration($urlRouterProvider) {
    $urlRouterProvider.otherwise('/tasks');
}
