(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*@ngInject*/
routes.$inject = ["$urlRouterProvider"];
function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/tasks');
}

module.exports = routes;
},{}],2:[function(require,module,exports){
/*@ngInject*/
translations.$inject = ["$translateProvider"];
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'app.title': 'Angular Material Boilerplate',
    'layout.menu': 'Menu',
    'menu.tasks': 'Tasks',
    'add': 'Add',
    'save': 'Save',
    'update': 'Update',
    'edit': 'Edit',
    'delete': 'Delete',
    'cancel': 'Cancel',
    'retry': 'Retry',
    'search': 'Search'
  });

  $translateProvider.fallbackLanguage(['en'])
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();

  $translateProvider.useSanitizeValueStrategy('sanitize');
}

module.exports = translations;
},{}],3:[function(require,module,exports){
(function (global){
module.exports = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('app.core', [
  'ui.router',
  'ngSanitize',
  'pascalprecht.translate'
])
.config(require('./core.routes'))
.config(require('./core.translations'))
.name;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./core.routes":1,"./core.translations":2}],4:[function(require,module,exports){
(function (global){
module.exports = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('app', [
  require('./core'),
  require('./layout'),
  require('./task')
]).name;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./core":3,"./layout":5,"./task":10}],5:[function(require,module,exports){
(function (global){
module.exports = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('app.layout', [
  'ngMaterial',
  require('./layout.html')
])
.component('ambLayout', {
  templateUrl: 'layout.html',
  controller: require('./layout.controller')
})
.config(require('./layout.theme'))
.name;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./layout.controller":6,"./layout.html":7,"./layout.theme":8}],6:[function(require,module,exports){
/*@ngInject*/
LayoutController.$inject = ["$mdSidenav", "$state", "$log"];
function LayoutController($mdSidenav, $state, $log) {
  var vm = this;
  vm.closeSidenav = closeSidenav;
  vm.handleBackMenuClick = handleBackMenuClick;
  vm.menuItems = [];
  vm.isMenuAvailable = isMenuAvailable;

  activate();

  function activate() {
    vm.menuItems.push({
      name: 'menu.tasks',
      state: 'taskList',
      icon: 'list'
    });
    $log.info('LayoutController activated.');
  }

  function closeSidenav() {
    $mdSidenav('sidebar').close();
  }

  function handleBackMenuClick() {
    if (isMenuAvailable()) {
      return $mdSidenav('sidebar').open();
    }
    $state.go($state.$current.back);
  }

  function isMenuAvailable() {
    return undefined === $state.$current.back;
  }
}

module.exports = LayoutController;
},{}],7:[function(require,module,exports){
var ngModule = angular.module('layout.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('layout.html',
    '<div layout flex>\n' +
    '  <md-sidenav md-component-id="sidebar" class="md-sidenav-left" md-whiteframe="16" md-is-locked-open="$mdMedia(\'gt-sm\')">\n' +
    '    <md-toolbar class="md-tall">\n' +
    '      <span flex></span>\n' +
    '      <div layout="column" class="user-profile inset">\n' +
    '        <user-avatar></user-avatar>\n' +
    '        <span class="user-name">Firstname Lastname</span>\n' +
    '        <span class="user-email">email@domainname.com</span>\n' +
    '      </div>\n' +
    '    </md-toolbar>\n' +
    '    <md-menu-content>\n' +
    '      <md-menu-item ng-repeat="menuItem in $ctrl.menuItems" ui-sref="{{menuItem.state}}" ng-click="$ctrl.closeSidenav()">\n' +
    '        <md-button>\n' +
    '          <md-icon md-font-library="material-icons">{{menuItem.icon}}</md-icon>\n' +
    '          {{menuItem.name | translate}}\n' +
    '        </md-button>\n' +
    '      </md-menu-item>\n' +
    '    </md-menu-content>\n' +
    '  </md-sidenav>\n' +
    '\n' +
    '  <div layout="column" flex>\n' +
    '    <md-toolbar md-whiteframe="4">\n' +
    '      <div class="md-toolbar-tools">\n' +
    '        <md-button class="md-icon-button" hide-gt-sm aria-label="{{\'layout.menu\' | translate}}" ng-click="$ctrl.handleBackMenuClick()">\n' +
    '          <div class="back-menu" ng-class="{\'toggled\': !$ctrl.isMenuAvailable()}">\n' +
    '            <div class="bar top"></div>\n' +
    '            <div class="bar middle"></div>\n' +
    '            <div class="bar bottom"></div>\n' +
    '          </div>\n' +
    '        </md-button>\n' +
    '        <md-button class="md-icon-button" ng-show="!$ctrl.isMenuAvailable()" hide show-gt-sm ng-click="$ctrl.handleBackMenuClick()"\n' +
    '          aria-label="{{\'layout.menu\' | translate}}">\n' +
    '          <md-icon md-font-library="material-icons">arrow_back</md-icon>\n' +
    '        </md-button>\n' +
    '        <span flex></span>\n' +
    '        <div ui-view="toolbar" layout flex layout-align="end center"></div>\n' +
    '      </div>\n' +
    '    </md-toolbar>\n' +
    '\n' +
    '    <md-content ui-view="content" layout flex></md-content>\n' +
    '\n' +
    '    <div ui-view="fab"></div>\n' +
    '  </div>\n' +
    '</div>');
}]);

module.exports = "layout.html";
},{}],8:[function(require,module,exports){
/*@ngInject*/
theme.$inject = ["$mdThemingProvider"];
function theme($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red')
    .warnPalette('orange');
}

module.exports = theme;
},{}],9:[function(require,module,exports){
var ngModule = angular.module('add-task-fab.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('add-task-fab.html',
    '<md-button class="md-fab md-fab-bottom-right" aria-label="{{ \'add\' | translate }}" ui-sref="taskCreate">\n' +
    '    <md-icon md-font-library="material-icons">add</md-icon>\n' +
    '</md-button>');
}]);

module.exports = "add-task-fab.html";
},{}],10:[function(require,module,exports){
(function (global){
module.exports = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('app.task', [
  require('./add-task-fab.html'),
  require('./tasks.html'),
  require('./task.html'),
  require('./task-search.html'),
  require('./task-actions.html'),
])
  .config(require('./routes'))
  .config(require('./translations'))
  .factory('taskService', require('./task.service'))
  .component('addTaskFab', {
    templateUrl: 'add-task-fab.html'
  })
  .component('tasks', {
    templateUrl: 'tasks.html',
    controller: require('./tasks.controller')
  })
  .component('task', {
    templateUrl: 'task.html',
    controller: require('./task.controller')
  })
  .component('taskSearch', {
    templateUrl: 'task-search.html',
    controller: require('./task-search.controller')
  })
  .component('taskActions', {
    templateUrl: 'task-actions.html',
    controller: require('./task-actions.controller')
  })
  .name;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./add-task-fab.html":9,"./routes":11,"./task-actions.controller":12,"./task-actions.html":13,"./task-search.controller":14,"./task-search.html":15,"./task.controller":16,"./task.html":17,"./task.service":18,"./tasks.controller":19,"./tasks.html":20,"./translations":21}],11:[function(require,module,exports){
/*@ngInject*/
routes.$inject = ["$stateProvider"];
function routes($stateProvider) {
  $stateProvider
    .state('taskList', {
      url: '/tasks',
      views: {
        content: {
          template: '<tasks flex layout/>'
        },
        toolbar: {
          template: '<task-search/>'
        },
        fab: {
          template: '<add-task-fab/>'
        }
      }
    })
    .state('taskEdit', {
      url: '/tasks/{id:int}',
      back: 'taskList',
      resolve: {
        taskService: 'taskService',
        task: ["$stateParams", "taskService", function ($stateParams, taskService) {
          return taskService.getTask($stateParams.id)
            .then(function (task) {
              $stateParams.task = task;
            });
        }]
      },
      views: {
        content: {
          template: '<task flex/>'
        },
        toolbar: {
          template: '<task-actions/>'
        }
      }
    })
    .state('taskCreate', {
      url: '/tasks/create',
      back: 'taskList',
      resolve: {
        taskService: 'taskService',
        task: ["$stateParams", "taskService", function ($stateParams, taskService) {
          return $stateParams.task = taskService.create();
        }]
      },
      views: {
        content: {
          template: '<task flex/>'
        },
        toolbar: {
          template: '<task-actions/>'
        }
      }
    });
}

module.exports = routes;
},{}],12:[function(require,module,exports){
/*@ngInject*/
TaskActionsController.$inject = ["$stateParams", "$state", "taskService"];
function TaskActionsController($stateParams, $state, taskService) {
  var vm = this;
  vm.task = $stateParams.task;
  vm.remove = remove;

  function remove(task) {
    return taskService.remove(task)
      .then(function () {
        $state.go('taskList');
      });
  }
}

module.exports = TaskActionsController;
},{}],13:[function(require,module,exports){
var ngModule = angular.module('task-actions.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('task-actions.html',
    '<md-button class="md-icon-button" aria-label="{{ \'save\' | translate }}" type="submit" form="taskForm" ng-if="undefined === $ctrl.task.id">\n' +
    '  <md-icon md-font-library="material-icons">save</md-icon>\n' +
    '</md-button>\n' +
    '\n' +
    '<md-button class="md-icon-button" aria-label="{{ \'delete\' | translate }}" ng-click="$ctrl.remove($ctrl.task)" ng-if="undefined !== $ctrl.task.id">\n' +
    '    <md-icon md-font-library="material-icons">delete</md-icon>\n' +
    '</md-button>\n' +
    '<md-button class="md-icon-button" aria-label="{{ \'update\' | translate }}" type="submit" form="taskForm" ng-if="undefined !== $ctrl.task.id">\n' +
    '    <md-icon md-font-library="material-icons">check</md-icon>\n' +
    '</md-button>');
}]);

module.exports = "task-actions.html";
},{}],14:[function(require,module,exports){
/*@ngInject*/
TaskSearchController.$inject = ["$state", "$timeout", "$mdMedia", "$log", "taskService"];
function TaskSearchController($state, $timeout, $mdMedia, $log, taskService) {
  var vm = this;
  vm.searchVisible = $mdMedia('gt-sm');
  vm.searchText = undefined;
  vm.selectedTask = undefined;
  vm.toggleSearch = toggleSearch;
  vm.search = search;
  vm.edit = edit;
  vm.$mdMedia = $mdMedia;

  activate();

  function activate() {
    $log.info('TaskListToolbarController activated.');
  }

  function toggleSearch() {
    vm.searchVisible = !vm.searchVisible;
  }

  function search(searchText) {
    return taskService.search(searchText);
  }

  function edit(task) {
    // timeout is used to avoid autocomplete scroll mask to block input
    $timeout(function () {
      $state.go('taskEdit', { id: task.id });
    }, 0);
  }
}

module.exports = TaskSearchController;
},{}],15:[function(require,module,exports){
var ngModule = angular.module('task-search.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('task-search.html',
    '<div layout="row">\n' +
    '    <md-button class="md-icon-button" aria-label="{{ \'search\' | translate }}" ng-click="$ctrl.toggleSearch()" ng-disabled="$ctrl.$mdMedia(\'gt-md\')">\n' +
    '        <md-icon md-font-library="material-icons">search</md-icon>\n' +
    '    </md-button>\n' +
    '    <md-autocomplete md-items="task in $ctrl.search($ctrl.searchText)" placeholder="{{ \'search\' | translate }}" md-search-text="$ctrl.searchText"\n' +
    '        md-selected-item="$ctrl.selectedTask" md-item-text="task.name" md-selected-item-change="$ctrl.edit($ctrl.selectedTask)" ng-show="$ctrl.searchVisible || $ctrl.$mdMedia(\'gt-md\')">\n' +
    '        <md-item-template>\n' +
    '            <span md-highlight-text="$ctrl.searchText" md-highlight-flags="^i">{{task.name}}</span>\n' +
    '        </md-item-template>\n' +
    '        <md-not-found>\n' +
    '            <span translate="task.no.match" translate-values="{searchText: \'{{$ctrl.searchText}}\'}"></span>\n' +
    '        </md-not-found>\n' +
    '    </md-autocomplete>\n' +
    '</div>');
}]);

module.exports = "task-search.html";
},{}],16:[function(require,module,exports){
/*@ngInject*/
TaskController.$inject = ["$stateParams", "$state", "taskService"];
function TaskController($stateParams, $state, taskService) {
  var vm = this;
  vm.task = $stateParams.task;
  vm.saveOrUpdate = saveOrUpdate;

  function saveOrUpdate(task) {
    if (!taskService.validate(task)) {
      return;
    }
    if (undefined === task.id) {
      return save(task);
    }
    return update(task);
  }

  function save(task) {
    return taskService.save(task)
      .then(function () {
        $state.go('taskList');
      });
  }

  function update(task) {
    return taskService.update(task)
      .then(function () {
        $state.go('taskList');
      });
  }
}

module.exports = TaskController;
},{}],17:[function(require,module,exports){
var ngModule = angular.module('task.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('task.html',
    '<div class="md-padding" flex>\n' +
    '  <form id="taskForm" ng-submit="$ctrl.saveOrUpdate($ctrl.task)">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label>{{ \'task.name\' | translate }}</label>\n' +
    '      <input name="name" ng-model="$ctrl.task.name" required aria-label="{{ \'task.name\' | translate }}" />\n' +
    '    </md-input-container>\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label>{{ \'task.description\' | translate }}</label>\n' +
    '      <textarea name="description" ng-model="$ctrl.task.description" aria-label="{{ \'task.description\' | translate }}"></textarea>\n' +
    '    </md-input-container>\n' +
    '  </form>\n' +
    '</div>');
}]);

module.exports = "task.html";
},{}],18:[function(require,module,exports){
/*@ngInject*/
taskService.$inject = ["$q", "$timeout"];
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
    create: create,
    save: save,
    update: update,
    remove: remove,
    search: search,
    validate: validate
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

  function validate(task) {
    if (undefined === task.name) {
      return false;
    }
    if ('string' !== typeof task.name) {
      return false;
    }
    if ('' === task.name.trim()) {
      return false;
    }
    return true;
  }

  function create() {
    return {
      name: '',
      description: '',
      done: false
    };
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
      var index = getTaskIndex(task.id);
      if (undefined === index) {
        return deferred.reject();
      }
      stub[index] = task;
      deferred.resolve();
    }, 100);
    return deferred.promise;
  }

  function remove(task) {
    var deferred = $q.defer();
    var index = getTaskIndex(task.id);
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
      if (id === stub[index].id) {
        return index;
      }
    }
    return undefined;
  }
}

module.exports = taskService;
},{}],19:[function(require,module,exports){
/*@ngInject*/
TasksController.$inject = ["$state", "$log", "taskService"];
function TasksController($state, $log, taskService) {
  var vm = this;
  vm.tasks = undefined;
  vm.edit = edit;

  activate();

  function activate() {
    return getTasks().then(function () {
      $log.info('TaskListContentController activated.');
    });
  }

  function edit(task) {
    $state.go('taskEdit', { id: task.id });
  }

  function getTasks() {
    return taskService.getTasks()
      .then(function (tasks) {
        vm.tasks = tasks;
      });
  }
}

module.exports = TasksController;
},{}],20:[function(require,module,exports){
var ngModule = angular.module('tasks.html', []);
ngModule.run(['$templateCache', function($templateCache) {
  $templateCache.put('tasks.html',
    '<md-list ng-if="$ctrl.tasks.length > 0" flex class="tasks">\n' +
    '  <div ng-repeat="task in $ctrl.tasks track by task.id">\n' +
    '    <md-list-item class="md-3-line" ng-click="$ctrl.edit(task)">\n' +
    '      <md-checkbox ng-model="task.done"></md-checkbox>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{task.name}}</h3>\n' +
    '        <p>{{task.description}}</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider ng-show="!$last"></md-divider>\n' +
    '  </div>\n' +
    '</md-list>\n' +
    '<div ng-if="$ctrl.tasks.length === 0" flex layout layout-align="center center" class="no-tasks">\n' +
    '  <span translate="task.list.empty"></span>\n' +
    '</div>');
}]);

module.exports = "tasks.html";
},{}],21:[function(require,module,exports){
/*@ngInject*/
translations.$inject = ["$translateProvider"];
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'menu.tasks': 'Tasks',
    'task.name': 'Name',
    'task.description': 'Description',
    'task.list.empty': 'You have no saved task',
    'task.not.found': 'Task not found',
    'task.no.match': 'No task matching "{{searchText}}" was found'
  });
}

module.exports = translations;
},{}]},{},[4]);
