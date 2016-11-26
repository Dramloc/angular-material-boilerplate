/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'menu.tasks': 'Tasks',
    'task.name': 'Name',
    'task.description': 'Description',
    'task.list.empty': 'You have no saved task',
    'task.not.found': 'Task not found',
    'task.no.match': 'No task matching "{{searchText}}" was found',
  });
}

export default translations;
