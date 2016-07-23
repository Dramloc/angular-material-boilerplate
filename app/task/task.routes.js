angular.module('app.task')
    .config(routeConfiguration);

/*@ngInject*/
function routeConfiguration($stateProvider) {
    $stateProvider
        .state('task', {
            url: '/tasks',
            redirectTo: 'task.list'
        })
        .state('task.list', {
            url: '',
            views: {
                'content@': {
                    templateUrl: 'task/task.list.content.html',
                    controller: 'TaskListController as vm'
                },
                'fab@': {
                    templateUrl: 'task/task.list.fab.html'
                },
                'toolbar@': {
                    templateUrl: 'task/task.list.toolbar.html'
                }
            }
        })
        .state('task.edit', {
            url: '/{id:int}',
            views: {
                'content@': {
                    templateUrl: 'task/task.edit.content.html',
                    controller: 'TaskEditController as vm'
                },
                'toolbar@': {
                    templateUrl: 'task/task.edit.toolbar.html',
                    controller: 'TaskEditController as vm'
                }
            }
        })
        .state('task.create', {
            url: '/create',
            views: {
                'content@': {
                    templateUrl: 'task/task.create.content.html'
                },
                'toolbar@': {
                    templateUrl: 'task/task.create.toolbar.html'
                }
            }
        });
}