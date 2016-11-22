/*@ngInject*/
function TaskController($stateParams, $state, taskService) {
  var vm = this;
  vm.task = $stateParams.task;
  vm.saveOrUpdate = saveOrUpdate;

  function saveOrUpdate(task) {
    if (!taskService.validate(task)) {
      return;
    }
    if (undefined === task.id) {
      return save(task);
    }
    return update(task);
  }

  function save(task) {
    return taskService.save(task)
      .then(function () {
        $state.go('taskList');
      });
  }

  function update(task) {
    return taskService.update(task)
      .then(function () {
        $state.go('taskList');
      });
  }
}

module.exports = TaskController;