angular.module('app.task')
    .controller('TaskListContentController', TaskListContentController);

/*@ngInject*/
function TaskListContentController($state, taskService) {
    var vm = this;
    vm.tasks = undefined;
    vm.edit = edit;

    activate();

    function activate() {
        return getTasks().then(function () {
            console.info('TaskListContentController activated.');
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