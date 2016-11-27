import template from './task-list.tpl.html';

class TaskListController {

  /* @ngInject */
  constructor($state, $ambTaskService, $mdToast) {
    Object.assign(this, { $state, $ambTaskService, $mdToast });
    this.activate();
  }

  activate() {
    this.tasks = undefined;
    this.loading = true;
    this.offline = false;
    this.getTasks()
      .catch(() => {
        this.offline = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  getTasks() {
    return this.$ambTaskService.query()
      .then((tasks) => {
        this.tasks = tasks;
      });
  }

  edit(task) {
    this.$state.go('taskEdit', {
      id: task.id,
    });
  }
}

export default {
  template,
  controller: TaskListController,
  selector: 'taskList',
};
