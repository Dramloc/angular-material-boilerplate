class $ambTaskService {

  /* @ngInject */
  constructor($q, $timeout) {
    Object.assign(this, { $q, $timeout });
    this.stubIndex = 0;
    this.stub = [];
  }

  getTaskIndex(id) {
    for (let index = 0; index < this.stub.length; index += index) {
      if (id === this.stub[index].id) {
        return index;
      }
    }
    return undefined;
  }

  getTask(id) {
    const deferred = this.$q.defer();
    this.$timeout(() => {
      const index = this.getTaskIndex(id);
      if (undefined === index) {
        return deferred.reject();
      }
      return deferred.resolve(this.stub[index]);
    }, 100);
    return deferred.promise;
  }

  getTasks() {
    const deferred = this.$q.defer();
    this.$timeout(() => {
      deferred.resolve(this.stub);
    }, 100);
    return deferred.promise;
  }

  validate(task) {
    if (undefined === task.name) {
      return false;
    }
    if (typeof task.name !== 'string') {
      return false;
    }
    if (task.name.trim() === '') {
      return false;
    }
    return true;
  }

  create() {
    return {
      name: '',
      description: '',
      done: false,
    };
  }

  save(task) {
    const deferred = this.$q.defer();
    this.$timeout(() => {
      this.stubIndex += 1;
      task.id = this.stubIndex;
      this.stub.push(task);
      deferred.resolve();
    }, 100);
    return deferred.promise;
  }

  update(task) {
    const deferred = this.$q.defer();
    this.$timeout(() => {
      const index = this.getTaskIndex(task.id);
      if (undefined === index) {
        deferred.reject();
        return;
      }
      this.stub[index] = task;
      deferred.resolve();
    }, 100);
    return deferred.promise;
  }

  remove(task) {
    const deferred = this.$q.defer();
    const index = this.getTaskIndex(task.id);
    this.$timeout(() => {
      this.stub.splice(index, 1);
      deferred.resolve();
    }, 100);
    return deferred.promise;
  }

  search(searchText) {
    const deferred = this.$q.defer();
    this.$timeout(() => {
      const lowerCaseSearchText = searchText.toLocaleLowerCase();
      const tasks = this.stub.filter(task =>
        task.name.toLocaleLowerCase().indexOf(lowerCaseSearchText) > -1,
      );
      return deferred.resolve(tasks);
    }, 300);
    return deferred.promise;
  }
}

export default $ambTaskService;
