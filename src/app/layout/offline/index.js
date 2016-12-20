import angular from 'angular';
import OfflineComponent from './offline.component';
import translations from './translations';

export default angular.module('app.layout.offline', [])
  .component(OfflineComponent.selector, OfflineComponent)
  .config(translations)
  .name;
