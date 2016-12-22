import template from './user-list.component.html';

class UserListController {

  /* @ngInject */
  constructor($http, $users) {
    Object.assign(this, { $http });
    this.users = $users;
  }
}

export default {
  selector: 'userList',
  template,
  controller: UserListController,
};
