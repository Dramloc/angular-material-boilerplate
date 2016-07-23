angular.module('app.task')
    .factory('taskService', taskService);

/*@ngInject*/
function taskService($q, $timeout) {
    var service = {
        getTask: getTask,
        getTasks: getTasks,
        save: save,
        update: update
    };

    return service;

    function getTask(id) {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve(build(id));
        }, 100);
        return deferred.promise;
    }

    function getTasks() {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve([
                build(1),
                build(2),
                build(3),
                build(4),
                build(5),
                build(6),
                build(7),
                build(8),
                build(9),
                build(10),
                build(11),
                build(12),
                build(13),
                build(14),
                build(15),
                build(16),
                build(17),
                build(18),
                build(19),
                build(20),
                build(21),
            ]);
        }, 100);
        return deferred.promise;
    }

    function save() {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    function update() {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    function build(id) {
        return {
            id: id,
            name: 'Task ' + id,
            description: 'Bar'
        };
    }
}