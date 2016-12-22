import angular from 'angular';

import routes from './routes';
import i18n from './i18n';
import UserService from './user.service';
import UserListService from './user-list.service';
import UserListComponent from './user-list.component';
import UserDetailComponent from './user-detail.component';

export default angular.module('users', [])
  .service('UserService', UserService)
  .service('UserListService', UserListService)
  .component(UserListComponent.selector, UserListComponent)
  .component(UserDetailComponent.selector, UserDetailComponent)
  .config(routes)
  .config(i18n)
  .name;
