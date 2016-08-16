angular.module('app.task')
    .controller('TaskEditController', TaskEditController);

/*@ngInject*/
function TaskEditController($state, $stateParams, $mdToast, $translate, taskService) {
    var vm = this;
    var id = $stateParams.id;
    vm.master = {};
    vm.task = {};
    vm.update = update;
    vm.remove = remove;

    activate();

    function activate() {
        return getTask(id).then(function () {
            console.info('TaskEditController activated.');
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

    function update(task) {
        angular.copy(task, vm.master);
        return taskService.update(vm.master)
            .then(function () {
                $state.go('task.list');
            })
            .catch(function () {
                var toast = $mdToast.simple()
                    .textContent($translate.instant('task.update.error'))
                    .action($translate.instant('retry'))
                    .highlightAction(true);
                $mdToast.show(toast).then(function (response) {
                    if ('ok' === response) {
                        update(task);
                    }
                });
            });
    }

    function remove(task) {
        return taskService.remove(task)
            .then(function () {
                $state.go('task.list');
            })
            .catch(function () {
                var toast = $mdToast.simple()
                    .textContent($translate.instant('task.remove.error'))
                    .action($translate.instant('retry'))
                    .highlightAction(true);
                $mdToast.show(toast).then(function (response) {
                    if ('ok' === response) {
                        remove(task);
                    }
                });
            });
    }
}