import angular from 'angular';
import TaskFormComponent from './task-form.component';

export default angular.module('app.task.task-form', [])
  .component(TaskFormComponent.selector, TaskFormComponent)
  .name;
