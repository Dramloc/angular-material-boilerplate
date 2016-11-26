import template from './task-actions.tpl.html';

class TaskActionsController {

  /* @ngInject */
  constructor($stateParams, $state, $ambTaskService) {
    Object.assign(this, { $state, $ambTaskService });
    this.task = $stateParams.task;
  }

  delete(task) {
    return this.$ambTaskService.delete(task)
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
