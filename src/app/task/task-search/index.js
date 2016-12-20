import angular from 'angular';
import TaskSearchComponent from './task-search.component';
import translations from './translations';

export default angular.module('app.task.task-search', [])
  .component(TaskSearchComponent.selector, TaskSearchComponent)
  .config(translations)
  .name;
