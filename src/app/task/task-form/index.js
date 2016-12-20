import angular from 'angular';
import TaskFormComponent from './task-form.component';
import translations from './translations';

export default angular.module('app.task.task-form', [])
  .component(TaskFormComponent.selector, TaskFormComponent)
  .config(translations)
  .name;
