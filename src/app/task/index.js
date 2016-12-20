import angular from 'angular';
import angularMaterial from 'angular-material';
import angularResource from 'angular-resource';

import routes from './routes';
import translations from './translations';
import $ambTaskService from './task.service';
import addTask from './add-task';
import taskForm from './task-form';
import taskList from './task-list';
import taskSearch from './task-search';
import taskActions from './task-actions';

export default angular.module('app.task', [
  angularMaterial,
  angularResource,
  addTask,
  taskForm,
  taskList,
  taskSearch,
  taskActions,
])
  .config(routes)
  .config(translations)
  .service('$ambTaskService', $ambTaskService)
  .name;
