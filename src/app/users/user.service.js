import angular from 'angular';

class UserService {

  /* @ngInject */
  constructor($http, $env, $log) {
    Object.assign(this, { $http, $log });
    this.url = $env.userApi.url;
    this.seed = $env.userApi.seed;
    this.length = 200;
    this.pageSize = 20;
  }

  query(options) {
    return this.$http({
      url: this.url,
      params: angular.extend({}, options, { page: options.page, seed: this.seed }),
    })
      .then((response) => {
        const users = response.data.results;
        let index = options.page * options.results;
        return users.map((user) => {
          const usr = angular.extend(user, { id: index });
          index += 1;
          return usr;
        });
      })
      .catch((error) => {
        this.$log.error('Failed to execute user query.', error);
      });
  }

  get(id) {
    return this.query({ page: Math.floor(id / this.pageSize), results: this.pageSize })
      .then(users => users[id % this.pageSize]);
  }
}

export default UserService;
