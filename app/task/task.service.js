class $ambTaskService {

  /* @ngInject */
  constructor($q, $resource) {
    Object.assign(this, { $q });
    const url = 'http://localhost/api';
    this.Task = $resource(`${url}/tasks/:id`, null, {
      create: { method: 'POST' },
      update: { method: 'PUT' },
    });
  }

  query(options) {
    const deferred = this.$q.defer();
    this.Task.query(options, (tasks) => {
      deferred.resolve(tasks);
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  get(id) {
    const deferred = this.$q.defer();
    this.Task.get({ id }, (task) => {
      deferred.resolve(task);
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  create() {
    return new this.Task({
      name: '',
      description: '',
      done: false,
    });
  }

  save(task) {
    const deferred = this.$q.defer();
    if (undefined === task.id) {
      task.$save(() => {
        deferred.resolve();
      }, (error) => {
        deferred.reject(error);
      });
    } else {
      this.Task.update({ id: task.id }, task, () => {
        deferred.resolve();
      }, (error) => {
        deferred.reject(error);
      });
    }

    return deferred.promise;
  }

  delete(task) {
    const deferred = this.$q.defer();
    this.Task.delete({ id: task.id }, () => {
      deferred.resolve();
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }
}

export default $ambTaskService;
