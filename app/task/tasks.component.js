import template from './tasks.tpl.html';

class TasksController {

  /* @ngInject */
  constructor($state, $ambTaskService) {
    Object.assign(this, { $state, $ambTaskService });
    this.tasks = undefined;
    this.getTasks();
  }

  getTasks() {
    return this.$ambTaskService.getTasks()
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
  controller: TasksController,
  selector: 'tasks',
};
