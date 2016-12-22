/* @ngInject */
function routes($stateProvider) {
  $stateProvider
    .state('userList', {
      url: '/users',
      views: {
        content: {
          template: '<user-list flex layout/>',
        },
      },
    });
}

export default routes;
