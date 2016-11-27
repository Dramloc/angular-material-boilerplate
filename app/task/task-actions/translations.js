/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'task.save': 'Save task',
    'task.delete': 'Delete task',
  });
}

export default translations;
