var browserify = require('browserify');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserifyCss = require('browserify-css');

gulp.task('browserify:clean', function () {
    return gulp.src([
        config.browserify.destination + '/' + config.browserify.destinationName,
        config.browserify.destination + '/' + config.browserify.destinationName + '.map',
    ], { read: false }).pipe($.clean());
});

gulp.task('browserify:build', ['browserify:clean'], function () {
    var b = browserify({
        entries: config.browserify.sources,
        transform: [browserifyCss]
    });

    return b.bundle()
        .pipe(source(config.browserify.destinationName))
        .pipe(buffer())
        .pipe(config.production ? $.util.noop() : $.sourcemaps.init())
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe(config.production ? $.util.noop() : $.sourcemaps.write('.'))
        .pipe(gulp.dest(config.browserify.destination))
        .pipe($.connect.reload());
});

gulp.task('browserify:watch', ['browserify:build'], function() {
    gulp.watch(config.browserify.sources, ['browserify:build']);
});