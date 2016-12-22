import template from './user-detail.component.html';
import './user-detail.component.scss';

class UserDetailController {

  /* @ngInject */
  constructor($stateParams, UserService) {
    Object.assign(this, { $stateParams, UserService });
  }

  $onInit() {
    this.id = this.$stateParams.id;
    this.user = undefined;
    return this.get(this.id);
  }

  get(id) {
    return this.UserService.get(id)
      .then((user) => {
        this.user = user;
      });
  }
}

export default {
  selector: 'userDetail',
  template,
  controller: UserDetailController,
};
