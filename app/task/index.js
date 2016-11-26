import angular from 'angular';

import routes from './routes';
import translations from './translations';
import $ambTaskService from './task.service';
import AddTaskComponent from './add-task.component';
import TaskComponent from './task.component';
import TasksComponent from './tasks.component';
import TaskSearchComponent from './task-search.component';
import TaskActionsComponent from './task-actions.component';

export default angular.module('app.task', [])
  .config(routes)
  .config(translations)
  .service('$ambTaskService', $ambTaskService)
  .component(AddTaskComponent.selector, AddTaskComponent)
  .component(TasksComponent.selector, TasksComponent)
  .component(TaskComponent.selector, TaskComponent)
  .component(TaskSearchComponent.selector, TaskSearchComponent)
  .component(TaskActionsComponent.selector, TaskActionsComponent)
  .name;
