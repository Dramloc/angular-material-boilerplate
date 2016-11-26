import template from './task-actions.tpl.html';

class TaskActionsController {

  /* @ngInject */
  constructor($stateParams, $state, $ambTaskService) {
    Object.assign(this, { $state, $ambTaskService });
    this.task = $stateParams.task;
  }

  remove(task) {
    return this.$ambTaskService.remove(task)
      .then(() => {
        this.$state.go('taskList');
      });
  }
}

export default {
  template,
  controller: TaskActionsController,
  selector: 'taskActions',
};
