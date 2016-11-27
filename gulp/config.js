const pkg = require('../package.json');
const $ = require('gulp-load-plugins')();

module.exports = {
  scripts: {
    src: 'app/index.js',
    destName: pkg.name,
    dest: 'dist',
  },
  html: {
    src: 'app/index.html',
    dest: 'dist',
  },
  assets: {
    src: 'app/assets/**',
    dest: 'dist',
  },
  port: process.env.PORT || 3000,
  production: $.util.env.production !== undefined || $.util.env.prod !== undefined || process.env.NODE_ENV === 'production',
};
