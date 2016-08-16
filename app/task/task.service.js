angular.module('app.task')
    .factory('taskService', taskService);

/*@ngInject*/
function taskService($q, $timeout) {
    var stub = [{
        id: 1,
        name: "Foo",
        description: "Bar"
    }, {
        id: 2,
        name: "Foo",
        description: "Bar"
    }, {
        id: 3,
        name: "Foo",
        description: "Bar"
    }, {
        id: 4,
        name: "Foo",
        description: "Bar"
    }, {
        id: 5,
        name: "Foo",
        description: "Bar"
    }, {
        id: 6,
        name: "Foo",
        description: "Bar"
    }, {
        id: 7,
        name: "Foo",
        description: "Bar"
    }, {
        id: 8,
        name: "Foo",
        description: "Bar"
    }, {
        id: 9,
        name: "Foo",
        description: "Bar"
    }, {
        id: 10,
        name: "Foo",
        description: "Bar"
    }, {
        id: 11,
        name: "Foo",
        description: "Bar"
    }, {
        id: 12,
        name: "Foo",
        description: "Bar"
    }, {
        id: 13,
        name: "Foo",
        description: "Bar"
    }, {
        id: 14,
        name: "Foo",
        description: "Bar"
    }];
    var stubIndex = 0;
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