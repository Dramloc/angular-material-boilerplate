import angular from 'angular';

import MenuIconComponent from './menu-icon.component';
import MenuButtonComponent from './menu-button.component';

export default angular.module('app.menu', [])
  .component(MenuIconComponent.selector, MenuIconComponent)
  .component(MenuButtonComponent.selector, MenuButtonComponent)
  .name;
