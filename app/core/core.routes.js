/*@ngInject*/
function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/tasks');
}

module.exports = routes;