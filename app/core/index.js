module.exports = require('angular').module('app.core', [
  'ui.router',
  'ngSanitize',
  'pascalprecht.translate'
])
.config(require('./core.routes'))
.config(require('./core.translations'))
.name;