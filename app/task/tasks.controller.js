/*@ngInject*/
function TasksController($state, $log, taskService) {
  var vm = this;
  vm.tasks = undefined;
  vm.edit = edit;

  activate();

  function activate() {
    return getTasks().then(function () {
      $log.info('TaskListContentController activated.');
    });
  }

  function edit(task) {
    $state.go('taskEdit', { id: task.id });
  }

  function getTasks() {
    return taskService.getTasks()
      .then(function (tasks) {
        vm.tasks = tasks;
      });
  }
}

module.exports = TasksController;