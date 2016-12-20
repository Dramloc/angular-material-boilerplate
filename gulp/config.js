const pkg = require('../package.json');
const $ = require('gulp-load-plugins')();

module.exports = {
  scripts: {
    src: 'src/app/index.js',
    destName: pkg.name,
    dest: 'dist',
  },
  html: {
    src: 'src/index.html',
    dest: 'dist',
  },
  assets: {
    src: 'src/assets/**',
    dest: 'dist',
  },
  port: process.env.PORT || 3000,
  production: $.util.env.production !== undefined || $.util.env.prod !== undefined || process.env.NODE_ENV === 'production',
};
