import angular from 'angular';

import UserListComponent from './user-list.component';
import routes from './routes';
import i18n from './i18n';
import $users from './user.service';

export default angular.module('users', [])
  .service('$users', $users)
  .component(UserListComponent.selector, UserListComponent)
  .config(routes)
  .config(i18n)
  .name;
