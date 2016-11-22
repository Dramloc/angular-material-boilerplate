const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');

gulp.task('watch', ['watch:scripts', 'watch:sass', 'watch:html']);
gulp.task('build', $.sequence('clean', ['build:sass', 'build:scripts'], 'build:html'));

gulp.task('serve', ['build', 'watch'], () => {
  $.connect.server({
    root: config.dist,
    livereload: !config.production,
    port: config.port
  });
});

gulp.task('default', ['build']);
