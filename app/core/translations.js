/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'app.title': 'Angular Material Boilerplate',
    'layout.menu': 'Menu',
    save: 'Save',
    update: 'Update',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    search: 'Search',
  });

  $translateProvider.fallbackLanguage(['en'])
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();

  $translateProvider.useSanitizeValueStrategy('sanitize');
}

export default translations;
