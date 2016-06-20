angular.module('app.layout')
    .directive('abpLayout', layout);

/*@ngInject*/
function layout() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'layout/layout.html',
        controller: 'LayoutController',
        controllerAs: 'layoutController'
    };
}
