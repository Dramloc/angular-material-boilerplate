angular.module('app.task')
    .controller('TaskCreateContentController', TaskCreateContentController);

/*@ngInject*/
function TaskCreateContentController($state, $mdToast, $translate, taskService) {
    var vm = this;
    vm.task = {
        name: '',
        description: ''
    };
    vm.save = save;

    activate();

    function activate() {
        console.info('TaskCreateContentController activated.');
    }

    function save(task) {
        return taskService.save(task)
            .then(function () {
                $state.go('task.list');
            });
    }
}