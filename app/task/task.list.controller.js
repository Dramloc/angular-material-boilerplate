angular.module('app.task')
    .controller('TaskListController', TaskListController);

/*@ngInject*/
function TaskListController($state, taskService) {
    var vm = this;
    vm.tasks = undefined;
    vm.edit = edit;

    activate();

    function activate() {
        return getTasks().then(function () {
            console.info('TaskListController activated.');
        });
    }

    function edit(task) {
        $state.go('task.edit', { id: task.id });
    }

    function getTasks() {
        return taskService.getTasks()
            .then(function (tasks) {
                vm.tasks = tasks;
            });
    }
}