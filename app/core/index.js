module.exports = require('angular').module('app.core', [
  require('angular-ui-router'),
  require('angular-sanitize'),
  require('angular-translate')
])
  .config(require('./routes'))
  .config(require('./translations'))
  .name;