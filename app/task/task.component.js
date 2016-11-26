import template from './task.tpl.html';

class TaskController {

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

  update(task) {
    return this.$ambTaskService.update(task)
      .then(() => {
        this.$state.go('taskList');
      });
  }

  saveOrUpdate(task) {
    if (!this.$ambTaskService.validate(task)) {
      return;
    }
    if (undefined === task.id) {
      this.save(task);
      return;
    }
    this.update(task);
  }
}

export default {
  template,
  controller: TaskController,
  selector: 'task',
};
