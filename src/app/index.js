import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

// webpack-specific configuration
// webpack will resolve $env module to corresponding enviroment
import $env from '$env'; // eslint-disable-line
import OfflineRuntime from 'offline-plugin/runtime'; // eslint-disable-line

import AppComponent from './app.component';
import theme from './theme';
import routes from './routes';
import i18n from './i18n';
import users from './users';

// Only install service-worker if livereload is disabled
// this avoids conflicts (service worker caching reloaded resources)
if ($env.serviceWorker) {
  OfflineRuntime.install();
}

export default angular.module('app', [
  angularUiRouter,
  angularSanitize,
  angularTranslate,
  angularMaterial,
  users,
])
  .constant('$env', $env)
  .component(AppComponent.selector, AppComponent)
  .config(theme)
  .config(routes)
  .config(i18n)
  .name;
