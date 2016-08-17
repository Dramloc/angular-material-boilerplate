angular.module('app.task')
    .controller('TaskEditContentController', TaskEditContentController);

/*@ngInject*/
function TaskEditContentController($state, $stateParams, $mdToast, $translate, taskService) {
    var vm = this;
    var id = $stateParams.id;
    vm.master = {};
    vm.task = {};
    vm.update = update;

    activate();

    function activate() {
        return getTask(id).then(function () {
            console.info('TaskEditContentController activated.');
        });
    }

    function getTask(id) {
        return taskService.getTask(id)
            .then(function (task) {
                vm.master = task;
                angular.copy(vm.master, vm.task);
            })
            .catch(function () {
                var toast = $mdToast.simple()
                    .textContent($translate.instant('task.not.found'));
                $mdToast.show(toast);
                $state.go('task.list');
            });
    }

    function update() {
        angular.copy(vm.task, vm.master);
        return taskService.update(vm.master)
            .then(function () {
                $state.go('task.list');
            });
    }
}