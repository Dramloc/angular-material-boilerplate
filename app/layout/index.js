import angular from 'angular';
import angularMaterial from 'angular-material';

import LayoutComponent from './layout.component';
import loader from './loader';
import offline from './offline';
import theme from './theme';

require('./dependencies.css');

export default angular.module('app.layout', [
  angularMaterial,
  loader,
  offline,
])
  .component(LayoutComponent.selector, LayoutComponent)
  .config(theme)
  .name;
