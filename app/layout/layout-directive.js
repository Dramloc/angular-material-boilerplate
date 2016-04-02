angular.module('app.layout')
    .directive('abpLayout', layout);

/*@ngInject*/
function layout($templateCache) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('layout/layout.html'),
        controller: 'LayoutController',
        controllerAs: 'layoutController'
    };
}
