import template from './user-list.component.html';
import './user-list.component.scss';

class UserListController {

  /* @ngInject */
  constructor($state, UserService) {
    Object.assign(this, { $state, UserService });
  }

  $onInit() {
    return this.UserService
      .query()
      .then((users) => {
        this.users = users;
      });
  }

  view(user) {
    this.$state.go('userDetail', {
      id: user.id,
    });
  }
}

export default {
  selector: 'userList',
  template,
  controller: UserListController,
};
