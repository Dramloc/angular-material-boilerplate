const pkg = require('../package.json');
const $ = require('gulp-load-plugins')();

module.exports = {
  scripts: {
    sources: './app/index.js',
    destinationName: pkg.name,
  },
  sass: {
    sources: './app/**/*.scss',
    destinationName: pkg.name,
  },
  html: {
    sources: './app/index.html',
  },
  port: process.env.PORT || 3000,
  dist: 'dist',
  production: $.util.env.production !== undefined || $.util.env.prod !== undefined || process.env.NODE_ENV === 'production',
};
