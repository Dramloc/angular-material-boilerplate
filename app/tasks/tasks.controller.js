angular.module('app.tasks')
    .controller('TaskController', TaskController);
    
/*@ngInject*/
function TaskController($scope) {
    var vm = this;
    var creation = undefined;
    var master = undefined;
    vm.tasks = [{
        name: 'Foo',
        description: 'Bar Baz quux'
    }];
    vm.task = undefined;
    
    vm.create = create;
    vm.edit = edit;
    vm.cancel = cancel;
    vm.save = save;
    vm.remove = remove;
    
    function create() {
        creation = true;
        vm.task = {};
    }
    
    function edit(task) {
        creation = false;
        vm.task = task;
        master = angular.copy(vm.task);
    }
    
    function cancel() {
        if (!creation) {
            angular.copy(master, vm.task);
        }
        vm.task = undefined;
    }
    
    function save() {
        if (creation) {
            vm.task.creationDate = Date.now();
            vm.tasks.push(vm.task);
        }
        vm.editionDate = Date.now();
        vm.task = undefined;
    }
    
    function remove(task) {
         var index = vm.tasks.indexOf(task);
         vm.tasks.splice(index, 1);
    }
}