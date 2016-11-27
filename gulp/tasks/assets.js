const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');

gulp.task('build:assets', () => {
  const stream = gulp.src(config.assets.src)
    .pipe($.plumber());

  if (config.production) {
    stream.pipe($.imagemin());
  }

  stream.pipe(gulp.dest(config.assets.dest))
    .pipe($.connect.reload());

  return stream;
});

gulp.task('watch:assets', () => {
  gulp.watch(config.assets.src, ['build:assets']);
});
