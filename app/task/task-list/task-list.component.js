import template from './task-list.tpl.html';

class TaskListController {

  /* @ngInject */
  constructor($state, $ambTaskService) {
    Object.assign(this, { $state, $ambTaskService });
    this.tasks = undefined;
    this.getTasks();
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
