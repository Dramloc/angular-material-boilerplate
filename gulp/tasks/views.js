var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('views:build', function () {
    return gulp.src(config.views.sources)
        .pipe($.connect.reload());
});

gulp.task('views:watch', ['views:build'], function () {
    gulp.watch(config.views.sources, ['views:build']);
});
