import template from './task-search.tpl.html';

class TaskSearchController {

  /* @ngInject */
  constructor($state, $timeout, $mdMedia, $ambTaskService) {
    Object.assign(this, { $state, $timeout, $mdMedia, $ambTaskService });
    this.searchVisible = $mdMedia('gt-sm');
    this.searchText = undefined;
    this.selectedTask = undefined;
  }

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }

  search(searchText) {
    return this.$ambTaskService.query({
      q: searchText,
    });
  }

  edit(task) {
    // timeout is used to avoid autocomplete scroll mask to block input
    this.$timeout(() => {
      this.$state.go('taskEdit', {
        id: task.id,
      });
    }, 0);
  }
}

export default {
  template,
  controller: TaskSearchController,
  selector: 'taskSearch',
};
