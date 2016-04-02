angular.module('app.core')
    .config(routeConfiguration);

/*@ngInject*/
function routeConfiguration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/');
    $stateProvider
        .state('tasks', {
            url: '/tasks',
            templateUrl: 'tasks/tasks.html'
        });
}