/*@ngInject*/
function TaskSearchController($state, $timeout, $mdMedia, $log, taskService) {
  var vm = this;
  vm.searchVisible = $mdMedia('gt-sm');
  vm.searchText = undefined;
  vm.selectedTask = undefined;
  vm.toggleSearch = toggleSearch;
  vm.search = search;
  vm.edit = edit;
  vm.$mdMedia = $mdMedia;

  activate();

  function activate() {
    $log.info('TaskListToolbarController activated.');
  }

  function toggleSearch() {
    vm.searchVisible = !vm.searchVisible;
  }

  function search(searchText) {
    return taskService.search(searchText);
  }

  function edit(task) {
    // timeout is used to avoid autocomplete scroll mask to block input
    $timeout(function () {
      $state.go('taskEdit', { id: task.id });
    }, 0);
  }
}

module.exports = TaskSearchController;