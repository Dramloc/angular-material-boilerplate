angular.module('app.core.translations')
    .config(translationsConfiguration);

/*@ngInject*/
function translationsConfiguration($translateProvider) {
    $translateProvider.translations('en', {
        'app.title': 'Boilerplate',
        'app.name': 'Boilerplate',
        'layout.menu': 'Menu',
        'menu.tasks': 'Tasks',
        'task.name': 'Name',
        'task.description': 'Description',
        'tasks.count': '{{count}} tasks',
        'submit': 'Submit',
        'add': 'Add',
        'save': 'Save',
        'edit': 'Edit',
        'delete': 'Delete',
        'cancel': 'Cancel',
        'more': 'More'
    });

    $translateProvider.fallbackLanguage(['en'])
        .uniformLanguageTag('bcp47')
        .determinePreferredLanguage();

    $translateProvider.useSanitizeValueStrategy('sanitize');
}

