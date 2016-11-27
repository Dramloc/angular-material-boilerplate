/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'menu.tasks': 'Tasks',
    'task.list.empty': 'You have no saved task',
    'task.no.match': 'No task matching "{{searchText}}" was found',
  });
}

export default translations;
