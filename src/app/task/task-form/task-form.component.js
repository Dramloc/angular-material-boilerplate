import template from './task-form.tpl.html';

class TaskFormController {

  /* @ngInject */
  constructor($stateParams, $state, $ambTaskService) {
    Object.assign(this, { $state, $ambTaskService });
    this.task = $stateParams.task;
  }

  save(task) {
    return this.$ambTaskService.save(task)
      .then(() => {
        this.$state.go('taskList');
      });
  }
}

export default {
  template,
  controller: TaskFormController,
  selector: 'taskForm',
};
