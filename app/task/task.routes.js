angular.module('app.task')
    .config(routeConfiguration);

/*@ngInject*/
function routeConfiguration($stateProvider) {
    $stateProvider
        .state('task', {
            url: '/tasks',
            abstract: true,
            templateUrl: 'task/task.html'
        })
        .state('task.list', {
            url: '',
            views: {
                content: {
                    templateUrl: 'task/task.list.content.html',
                    controller: 'TaskListContentController as vm'
                },
                fab: {
                    templateUrl: 'task/task.list.fab.html'
                }
            }
        })
        .state('task.edit', {
            url: '/{id:int}',
            views: {
                content: {
                    templateUrl: 'task/task.edit.content.html',
                    controller: 'TaskEditContentController as vm'
                },
                toolbar: {
                    templateUrl: 'task/task.edit.toolbar.html',
                    controller: 'TaskEditToolbarController as vm'
                }
            }
        })
        .state('task.create', {
            url: '/create',
            views: {
                content: {
                    templateUrl: 'task/task.create.content.html',
                    controller: 'TaskCreateContentController as vm'
                },
                toolbar: {
                    templateUrl: 'task/task.create.toolbar.html'
                }
            }
        });
}