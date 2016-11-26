import angular from 'angular';
import TaskSearchComponent from './task-search.component';

export default angular.module('app.task.task-search', [])
  .component(TaskSearchComponent.selector, TaskSearchComponent)
  .name;
