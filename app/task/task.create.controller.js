angular.module('app.task')
    .controller('TaskCreateController', TaskCreateController);

/*@ngInject*/
function TaskCreateController($state, $mdToast, $translate, taskService) {
    var vm = this;
    vm.task = {
        name: '',
        description: ''
    };
    vm.save = save;

    activate();

    function activate() {
        console.info('TaskCreateController activated.');
    }

    function save(task) {
        return taskService.save(task)
            .then(function () {
                $state.go('task.list');
            })
            .catch(function () {
                var toast = $mdToast.simple()
                    .textContent($translate.instant('task.save.error'))
                    .action($translate.instant('retry'))
                    .highlightAction(true)
                $mdToast.show(toast).then(function (response) {
                    if ('ok' === response) {
                        save(task);
                    }
                });
            });
    }
}