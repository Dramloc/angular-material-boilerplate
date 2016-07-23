angular.module('app.task')
    .config(translationsConfiguration);

/*@ngInject*/
function translationsConfiguration($translateProvider) {
    $translateProvider.translations('en', {
        'task.name': 'Name',
        'task.description': 'Description',
        'tasks.save.error': 'Failed to save task'
    });
}