const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');

gulp.task('clean', () => {
  gulp.src(config.dist, {
    read: false,
  })
    .pipe($.plumber())
    .pipe($.clean());
});
