import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';
import routes from './routes';
import translations from './translations';

export default angular.module('app.core', [
  angularUiRouter,
  angularSanitize,
  angularTranslate,
])
  .config(routes)
  .config(translations)
  .name;
