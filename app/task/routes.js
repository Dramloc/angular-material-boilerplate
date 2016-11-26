/* @ngInject */
function routes($stateProvider) {
  $stateProvider
    .state('taskList', {
      url: '/tasks',
      views: {
        content: {
          template: '<task-list flex layout/>',
        },
        toolbar: {
          template: '<task-search/>',
        },
        fab: {
          template: '<add-task/>',
        },
      },
    })
    .state('taskEdit', {
      url: '/tasks/{id:int}',
      back: 'taskList',
      resolve: {
        $ambTaskService: '$ambTaskService',
        task: ($stateParams, $ambTaskService) =>
          $ambTaskService.get($stateParams.id)
            .then((task) => {
              $stateParams.task = task;
            }),
      },
      views: {
        content: {
          template: '<task-form flex/>',
        },
        toolbar: {
          template: '<task-actions/>',
        },
      },
    })
    .state('taskCreate', {
      url: '/tasks/create',
      back: 'taskList',
      resolve: {
        $ambTaskService: '$ambTaskService',
        task: ($stateParams, $ambTaskService) => {
          $stateParams.task = $ambTaskService.create();
        },
      },
      views: {
        content: {
          template: '<task-form flex/>',
        },
        toolbar: {
          template: '<task-actions/>',
        },
      },
    });
}

export default routes;
