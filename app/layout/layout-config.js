angular.module('app.layout')
    .config(themeConfiguration);

/*@ngInject*/
function themeConfiguration($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red')
        .warnPalette('orange')
}