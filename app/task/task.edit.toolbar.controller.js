angular.module('app.task')
    .controller('TaskEditToolbarController', TaskEditToolbarController);

/*@ngInject*/
function TaskEditToolbarController($state, $stateParams, taskService) {
    var vm = this;
    var id = $stateParams.id;
    vm.remove = remove;

    activate();

    function activate() {
        console.info('TaskEditToolbarController activated.');
    }

    function remove() {
        return taskService.remove(id)
            .then(function () {
                $state.go('task.list');
            });
    }
}