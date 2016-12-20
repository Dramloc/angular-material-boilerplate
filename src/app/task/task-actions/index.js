import angular from 'angular';
import TaskActionsComponent from './task-actions.component';
import translations from './translations';

export default angular.module('app.task.task-actions', [])
  .component(TaskActionsComponent.selector, TaskActionsComponent)
  .config(translations)
  .name;
