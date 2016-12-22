import angular from 'angular';

import MenuIconComponent from './menu-icon.component';

export default angular.module('app.menu-icon', [])
  .component(MenuIconComponent.selector, MenuIconComponent)
  .name;
