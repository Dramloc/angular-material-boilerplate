/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'amb.offline.retry': 'Retry',
    'amb.offline.mode': 'Offline mode',
    'amb.offline.toast': 'No connection available',
  });
}

export default translations;
