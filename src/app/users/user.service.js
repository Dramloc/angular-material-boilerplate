class $users {

  /* @ngInject */
  constructor($http, $timeout, $env) {
    Object.assign(this, { $http, $timeout, $env });
    this.loadedPages = {};
    this.length = undefined;
    this.fetchLength();
  }

  getItemAtIndex(index) {
    const pageNumber = Math.floor(index / this.$env.userApi.pageSize);
    const page = this.loadedPages[pageNumber];

    if (page instanceof Array) {
      return page[index % this.$env.userApi.pageSize];
    }

    if (undefined === page) {
      this.loadedPages[pageNumber] = this.fetchPage(pageNumber);
    }
    return undefined;
  }

  getLength() {
    return this.length;
  }

  fetchLength() {
    this.$timeout(() => {
      this.length = 200;
    }, 0);
  }

  fetchPage(pageNumber) {
    return this.$http.get(`${this.$env.userApi.url}/?page=${pageNumber}&results=${this.$env.userApi.pageSize}&seed=${this.$env.userApi.seed}`)
      .then((response) => {
        this.loadedPages[pageNumber] = response.data.results;
      });
  }
}

export default $users;
