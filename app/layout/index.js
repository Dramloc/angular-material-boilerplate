import angular from 'angular';
import angularMaterial from 'angular-material';

import LayoutComponent from './layout.component';
import theme from './theme';

require('./dependencies.css');

export default angular.module('app.layout', [
  angularMaterial,
])
  .component(LayoutComponent.selector, LayoutComponent)
  .config(theme)
  .name;
