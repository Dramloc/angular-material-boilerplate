/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'task.search': 'Search',
    'task.no.match': 'No task matching "{{searchText}}" was found',
  });
}

export default translations;
