import angular from 'angular';
import AddTaskComponent from './add-task.component';
import translations from './translations';

export default angular.module('app.task.add-task', [])
  .component(AddTaskComponent.selector, AddTaskComponent)
  .config(translations)
  .name;
