module.exports = require('angular').module('app.task', [
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