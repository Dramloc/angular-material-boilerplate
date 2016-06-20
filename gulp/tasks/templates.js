var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('templates:clean', function () {
    return gulp.src([
        config.templates.destination + '/' + config.templates.destinationName
    ], { read: false }).pipe($.clean());
});

gulp.task('templates:build', ['templates:clean'], function () {
    return gulp.src(config.templates.sources)
        .pipe(config.production ? $.htmlmin({collapseWhitespace: true}) : $.util.noop())
        .pipe($.angularTemplatecache({
            standalone: true,
            filename: config.templates.destinationName,
            module: config.templates.destinationModule
        }))
        .pipe(gulp.dest(config.templates.destination))
        .pipe($.connect.reload());
});

gulp.task('templates:watch', ['templates:build'], function () {
    gulp.watch(config.templates.sources, ['templates:build']);
});
