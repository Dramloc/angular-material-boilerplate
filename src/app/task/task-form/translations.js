/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'task.name': 'Name',
    'task.description': 'Description',
  });
}

export default translations;
