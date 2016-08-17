angular.module('app.task')
    .controller('TaskListToolbarController', TaskListToolbarController);

/*@ngInject*/
function TaskListToolbarController($state, $timeout, $mdMedia, taskService) {
    var vm = this;
    vm.searchVisible = $mdMedia('gt-md');
    vm.searchText = undefined;
    vm.selectedTask = undefined;
    vm.toggleSearch = toggleSearch;
    vm.search = search;
    vm.edit = edit;
    vm.$mdMedia = $mdMedia;

    activate();

    function activate() {
        console.info('TaskListToolbarController activated.');
    }

    function toggleSearch() {
        vm.searchVisible = !vm.searchVisible;
    }

    function search(searchText) {
        return taskService.search(searchText);
    }

    function edit(task) {
        // timeout is used to avoid autocomplete scroll mask to block input
        $timeout(function() {
            $state.go('task.edit', { id: task.id });
        }, 0);
    }
}