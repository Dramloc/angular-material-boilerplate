/*@ngInject*/
function TaskActionsController($stateParams, $state, taskService) {
  var vm = this;
  vm.task = $stateParams.task;
  vm.remove = remove;

  function remove(task) {
    return taskService.remove(task)
      .then(function () {
        $state.go('taskList');
      });
  }
}

module.exports = TaskActionsController;