/* @ngInject */
function translations($translateProvider) {
  $translateProvider.translations('en', {
    'menu.users': 'Users',
    'user.list.empty': 'No user found',
  });
}

export default translations;
