angular.module('app.layout')
    .directive('ambLayout', ambLayout);

/*@ngInject*/
function ambLayout() {
    return {
        restrict: 'E',
        transclude: {
            'toolbar': '?ambLayoutToolbar',
            'content': 'ambLayoutContent',
            'fab': '?ambLayoutFab',
        },
        templateUrl: 'layout/layout.directive.html'
    };
}