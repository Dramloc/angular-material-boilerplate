angular.module('app.task')
    .factory('taskService', taskService);

/*@ngInject*/
function taskService($q, $timeout) {
    var stubIndex = 0;
    var stub = [{
        id: ++stubIndex,
        name: "learn angular",
        description: "first things first"
    }, {
        id: ++stubIndex,
        name: "learn angular material",
        description: "with great design comes great responsibilities"
    }, {
        id: ++stubIndex,
        name: "build boilerplate",
        description: "put it all together"
    }];
    
    var service = {
        getTask: getTask,
        getTasks: getTasks,
        save: save,
        update: update,
        remove: remove
    };

    return service;

    function getTask(id) {
        console.log('Searching task with id', id);
        var deferred = $q.defer();
        $timeout(function () {
            for (var index = 0; index < stub.length; ++index) {
                var task = stub[index];
                if (id === task.id) {
                    return deferred.resolve(task);
                }
            }
            return deferred.reject();
        }, 100);
        return deferred.promise;
    }

    function getTasks() {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve(stub);
        }, 100);
        return deferred.promise;
    }

    function save(task) {
        var deferred = $q.defer();
        $timeout(function () {
            task.id = ++stubIndex;
            console.log('Saving task', task);
            stub.push(task);
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    function update(task) {
        console.log('Updating task', task);
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    function remove(task) {
        console.log('Removing task', task);
        var deferred = $q.defer();
        $timeout(function () {
            stub.splice(stub.indexOf(task), 1);
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }
}