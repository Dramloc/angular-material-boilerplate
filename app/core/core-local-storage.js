angular.module('app.core')
    .config(localStorageConfiguration);

/*@ngInject*/
function localStorageConfiguration(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('jenkins-dashboard')
        .setStorageType('localStorage')
        .setNotify(true, true);
}