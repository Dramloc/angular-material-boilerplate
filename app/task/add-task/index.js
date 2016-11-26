import angular from 'angular';
import AddTaskComponent from './add-task.component';

export default angular.module('app.task.add-task', [])
  .component(AddTaskComponent.selector, AddTaskComponent)
  .name;
