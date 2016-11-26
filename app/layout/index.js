require('./dependencies.css');

module.exports = require('angular').module('app.layout', [
  require('angular-material'),
  require('./layout.html')
])
  .component('ambLayout', {
    templateUrl: 'layout.html',
    controller: require('./layout.controller')
  })
  .config(require('./layout.theme'))
  .name;