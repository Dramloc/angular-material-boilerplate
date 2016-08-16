angular.module('app.core')
    .config(translationsConfiguration);

/*@ngInject*/
function translationsConfiguration($translateProvider) {
    $translateProvider.translations('en', {
        'app.title': 'Angular Material Boilerplate',
        'layout.menu': 'Menu',
        'menu.tasks': 'Tasks',
        'add': 'Add',
        'save': 'Save',
        'edit': 'Edit',
        'delete': 'Delete',
        'cancel': 'Cancel',
        'more': 'More',
        'retry': 'Retry',
        'search': 'Search',
        'settings': 'Settings'
    });

    $translateProvider.fallbackLanguage(['en'])
        .uniformLanguageTag('bcp47')
        .determinePreferredLanguage();

    $translateProvider.useSanitizeValueStrategy('sanitize');
}

