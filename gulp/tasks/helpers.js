var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('watch', ['browserify:build', 'scripts:watch', 'sass:watch', 'templates:watch', 'views:watch']);
gulp.task('build', ['browserify:build', 'scripts:build', 'sass:build', 'templates:build', 'views:build']);
gulp.task('lint', ['scripts:lint']);
gulp.task('clean', ['browserify:clean', 'scripts:clean', 'sass:clean', 'templates:clean']);

gulp.task('serve', config.production ? null : ['watch'], function () {
    $.connect.server({
        root: config.serve.root,
        livereload: !config.production,
        port: config.serve.port
    });
});

gulp.task('default', ['serve']);
