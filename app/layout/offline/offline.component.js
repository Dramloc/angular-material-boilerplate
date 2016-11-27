import template from './offline.tpl.html';

class OfflineController {

  /* @ngInject */
  constructor($mdToast, $translate) {
    Object.assign(this, { $mdToast, $translate });
    this.activate();
  }

  activate() {
    if (undefined === this.onRetry) {
      return;
    }
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(this.$translate.instant('amb.offline.toast'))
        .action(this.$translate.instant('amb.offline.retry'))
        .highlightAction(true)
        .highlightClass('md-primary')
        .hideDelay(0),
    ).then(() => this.onRetry());
  }
}

export default {
  template,
  selector: 'ambOffline',
  controller: OfflineController,
  bindings: {
    onRetry: '&?',
  },
};
