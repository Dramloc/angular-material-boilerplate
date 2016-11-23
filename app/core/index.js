module.exports = require('angular').module('app.core', [
  require('angular-ui-router'),
  require('angular-sanitize'),
  require('angular-translate')
])
.config(require('./core.routes'))
.config(require('./core.translations'))
.name;