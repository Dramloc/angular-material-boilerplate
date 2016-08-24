angular.module('app.task')
    .factory('taskService', taskService);

/*@ngInject*/
function taskService($q, $timeout) {
    var stubIndex = 0;
    var stub = [
        {
            id: ++stubIndex,
            name: 'AngularJS — Superheroic JavaScript MVW Framework',
            description: 'HTML enhanced for web apps!',
            done: true
        }, {
            id: ++stubIndex,
            name: 'Angular Material',
            description: 'For developers using AngularJS, Angular Material is both a UI Component framework and a reference implementation of Google\'s Material Design Specification. This project provides a set of reusable, well-tested, and accessible UI components based on Material Design.',
            done: true
        }, {
            id: ++stubIndex,
            name: 'gulp.js - the streaming build system',
            description: 'Automate and enhance your workflow',
            done: false
        }, {
            id: ++stubIndex,
            name: 'angular translate',
            description: 'i18n for your Angular app, made easy!',
            done: false
        }, {
            id: ++stubIndex,
            name: 'Browserify',
            description: 'Browserify lets you require(`\'modules\') in the browser by bundling up all of your dependencies.',
            done: false
        }, {
            id: ++stubIndex,
            name: 'Sass: Syntactically Awesome Style Sheets',
            description: 'CSS with superpowers',
            done: true
        }, {
            id: ++stubIndex,
            name: 'ESLint - Pluggable JavaScript linter',
            description: 'The pluggable linting utility for JavaScript and JSX',
            done: true
        }, {
            id: ++stubIndex,
            name: 'angular-ui/ui-router',
            description: 'The de-facto solution to flexible routing with nested views in AngularJS',
            done: false
        }, {
            id: ++stubIndex,
            name: 'The MIT License',
            description: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
            done: false
        }, {
            id: ++stubIndex,
            name: 'Material icons',
            description: 'Material icons are beautifully crafted, delightful, and easy to use in your web, Android, and iOS projects. Learn more about material design and our process for making these icons in the system icons section of the material design guidelines.',
            done: false
        }, {
            id: ++stubIndex,
            name: 'LiveReload',
            description: 'The Web Developer Wonderland (a happy land where browsers don\'t need a Refresh button)',
            done: false
        }
    ];

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