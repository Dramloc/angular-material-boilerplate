const gulp = require('gulp');
const swPrecache = require('sw-precache');
const path = require('path');
const config = require('../config');

gulp.task('build:service-worker', (callback) => {
  swPrecache.write(path.join(config.html.dest, 'service-worker.js'), {
    staticFileGlobs: [`${config.html.dest}/*`],
    stripPrefix: config.html.dest,
  }, callback);
});
