/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'task.list.empty': 'You have no saved task',
  });
}

export default translations;
