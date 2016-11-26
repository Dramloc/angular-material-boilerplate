import angular from 'angular';
import TasksComponent from './task-list.component';

export default angular.module('app.task.task-list', [])
  .component(TasksComponent.selector, TasksComponent)
  .name;
