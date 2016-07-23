angular.module('app.task')
    .controller('TaskCreateController', TaskCreateController);

/*@ngInject*/
function TaskCreateController() {
    var vm = this;
    activate();

    function activate() {
        console.info('TaskCreateController activated.');
    }
}