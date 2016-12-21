import angular from 'angular';
import OfflineRuntime from 'offline-plugin/runtime'; // eslint-disable-line

import core from './core';
import layout from './layout';
import task from './task';

OfflineRuntime.install();

export default angular.module('app', [
  core,
  layout,
  task,
]).name;
