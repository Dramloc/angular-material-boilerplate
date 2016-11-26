/*@ngInject*/
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'app.title': 'Angular Material Boilerplate',
    'layout.menu': 'Menu',
    'add': 'Add',
    'save': 'Save',
    'update': 'Update',
    'edit': 'Edit',
    'delete': 'Delete',
    'cancel': 'Cancel',
    'retry': 'Retry',
    'search': 'Search'
  });

  $translateProvider.fallbackLanguage(['en'])
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();

  $translateProvider.useSanitizeValueStrategy('sanitize');
}

module.exports = translations;