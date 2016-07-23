angular.module('app.task')
    .controller('TaskEditController', TaskEditController);

/*@ngInject*/
function TaskEditController($state, $stateParams, $mdToast, $translate, taskService) {
    var vm = this;
    var id = $stateParams.id;
    vm.task = undefined;

    vm.update = update;

    activate();

    function activate() {
        return getTask(id).then(function () {
            console.info('TaskEditController activated.');
        });
    }

    function getTask(id) {
        return taskService.getTask(id)
            .then(function (task) {
                vm.task = task;
            });
    }

    function update() {
        return taskService.update(vm.task)
            .then(function () {
                $state.go('task');
            })
            .catch(function () {
                var toast = $mdToast.simple()
                    .textContent($translate.instant('tasks.update.error'))
                    .action($translate.instant('retry'))
                    .highlightAction(true)
                $mdToast.show(toast).then(function (response) {
                    if ('ok' === response) {
                        update();
                    }
                });
            });
    }
}