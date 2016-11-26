import angular from 'angular';
import TaskActionsComponent from './task-actions.component';

export default angular.module('app.task.task-actions', [])
  .component(TaskActionsComponent.selector, TaskActionsComponent)
  .name;
