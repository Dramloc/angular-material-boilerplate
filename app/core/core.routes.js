angular.module('app.core')
    .config(routeConfiguration)
    .run(stateChangeConfiguration);

/*@ngInject*/
function routeConfiguration($urlRouterProvider) {
    $urlRouterProvider.otherwise('/tasks');
}

/*@ngInject*/
function stateChangeConfiguration($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, to, params) {
        if (to.redirectTo) {
            event.preventDefault();
            $state.go(to.redirectTo, params, { location: 'replace' })
        }
    });
}