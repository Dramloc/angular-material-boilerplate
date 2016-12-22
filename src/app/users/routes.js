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
    })
    .state('userDetail', {
      url: '/users/{id:int}',
      back: 'userList',
      views: {
        content: {
          template: '<user-detail flex layout/>',
        },
      },
    });
}

export default routes;
