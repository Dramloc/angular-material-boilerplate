import template from './user-list.component.html';
import './user-list.component.scss';

class UserListController {

  /* @ngInject */
  constructor($state, UserListService) {
    Object.assign(this, { $state });
    this.users = UserListService;
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
