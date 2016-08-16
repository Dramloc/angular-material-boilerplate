angular.module('app.task')
    .config(translationsConfiguration);

/*@ngInject*/
function translationsConfiguration($translateProvider) {
    $translateProvider.translations('en', {
        'menu.tasks': 'Tasks',
        'task.name': 'Name',
        'task.description': 'Description',
        'task.update.error': 'Can\'t update task',
        'task.remove.error': 'Can\'t remove task',
        'task.save.error': 'Can\'t save task',
        'task.list.empty': 'You have no task',
        'task.not.found': 'Task not found'
    });
}