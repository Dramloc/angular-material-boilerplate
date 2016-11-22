/*@ngInject*/
function theme($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red')
    .warnPalette('orange');
}

module.exports = theme;