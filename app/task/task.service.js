angular.module('app.task')
    .factory('taskService', taskService);

/*@ngInject*/
function taskService($q, $timeout) {
    var stubIndex = 0;
    var stub = [{
        id: ++stubIndex,
        name: "learn angular",
        description: "first things first",
        done: true
    }, {
            id: ++stubIndex,
            name: "learn angular material",
            description: "with great power comes great design",
            done: true
        }, {
            id: ++stubIndex,
            name: "build boilerplate",
            description: "put it all together",
            done: false
        }];

    var service = {
        getTask: getTask,
        getTasks: getTasks,
        save: save,
        update: update,
        remove: remove,
        search: search
    };

    return service;

    function getTask(id) {
        var deferred = $q.defer();
        $timeout(function () {
            var index = getTaskIndex(id);
            if (undefined === index) {
                return deferred.reject();
            }
            return deferred.resolve(stub[index]);
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
            stub.push(task);
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    function update(task) {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    function remove(id) {
        var deferred = $q.defer();
        var index = getTaskIndex(id);
        $timeout(function () {
            stub.splice(index, 1);
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    function search(searchText) {
        var deferred = $q.defer();
        $timeout(function () {
            searchText = searchText.toLocaleLowerCase();
            var tasks = [];
            for (var index = 0; index < stub.length; ++index) {
                var task = stub[index];
                if (task.name.toLocaleLowerCase().indexOf(searchText) > -1) {
                    tasks.push(task);
                }
            }
            return deferred.resolve(tasks);
        }, 300);
        return deferred.promise;
    }

    function getTaskIndex(id) {
        for (var index = 0; index < stub.length; ++index) {
            var task = stub[index];
            if (id === task.id) {
                return index;
            }
        }
        return undefined;
    }
}