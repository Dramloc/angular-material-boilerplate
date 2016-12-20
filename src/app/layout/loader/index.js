import angular from 'angular';
import LoaderComponent from './loader.component';

export default angular.module('app.layout.loader', [])
  .component(LoaderComponent.selector, LoaderComponent)
  .name;
