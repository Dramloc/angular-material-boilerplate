class UserListService {

  /* @ngInject */
  constructor(UserService) {
    Object.assign(this, { UserService });
    this.loadedPages = {};
    this.length = UserService.length;
    this.pageSize = UserService.pageSize;
  }

  getItemAtIndex(index) {
    const pageNumber = Math.floor(index / this.pageSize);
    const page = this.loadedPages[pageNumber];
    if (page instanceof Array) {
      return page[index % this.pageSize];
    }
    if (undefined === page) {
      this.loadedPages[pageNumber] = this.fetchPage(pageNumber);
    }
    return undefined;
  }

  getLength() {
    return this.length;
  }

  fetchPage(pageNumber) {
    return this.UserService.query({
      page: pageNumber,
      results: this.pageSize,
    })
      .then((users) => {
        this.loadedPages[pageNumber] = users;
      });
  }
}

export default UserListService;
