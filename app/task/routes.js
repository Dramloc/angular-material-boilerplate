/*@ngInject*/
function routes($stateProvider) {
  $stateProvider
    .state('taskList', {
      url: '/tasks',
      views: {
        content: {
          template: '<tasks flex layout/>'
        },
        toolbar: {
          template: '<task-search/>'
        },
        fab: {
          template: '<add-task-fab/>'
        }
      }
    })
    .state('taskEdit', {
      url: '/tasks/{id:int}',
      back: 'taskList',
      resolve: {
        taskService: 'taskService',
        task: function ($stateParams, taskService) {
          return taskService.getTask($stateParams.id)
            .then(function (task) {
              $stateParams.task = task;
            });
        }
      },
      views: {
        content: {
          template: '<task flex/>'
        },
        toolbar: {
          template: '<task-actions/>'
        }
      }
    })
    .state('taskCreate', {
      url: '/tasks/create',
      back: 'taskList',
      resolve: {
        taskService: 'taskService',
        task: function ($stateParams, taskService) {
          return $stateParams.task = taskService.create();
        }
      },
      views: {
        content: {
          template: '<task flex/>'
        },
        toolbar: {
          template: '<task-actions/>'
        }
      }
    });
}

module.exports = routes;