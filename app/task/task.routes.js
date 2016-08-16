angular.module('app.task')
    .config(routeConfiguration);

/*@ngInject*/
function routeConfiguration($stateProvider) {
    $stateProvider
        .state('task', {
            url: '/tasks',
            abstract: true,
            template: '<ui-view layout flex/>'
        })
        .state('task.list', {
            url: '',
            templateUrl: 'task/task.list.html',
            controller: 'TaskListController as vm'
        })
        .state('task.edit', {
            url: '/{id:int}',
            templateUrl: 'task/task.edit.html',
            controller: 'TaskEditController as vm'
        })
        .state('task.create', {
            url: '/create',
            templateUrl: 'task/task.create.html',
            controller: 'TaskCreateController as vm'
        });
}