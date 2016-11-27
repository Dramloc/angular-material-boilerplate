/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'app.title': 'Angular Material Boilerplate',
    'layout.menu': 'Menu',
    search: 'Search',
  });

  $translateProvider.fallbackLanguage(['en'])
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();

  $translateProvider.useSanitizeValueStrategy('sanitize');
}

export default translations;
