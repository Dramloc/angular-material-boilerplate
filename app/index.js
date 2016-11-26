import angular from 'angular';
import core from './core';
import layout from './layout';
import task from './task';

export default angular.module('app', [
  core,
  layout,
  task,
]).name;
