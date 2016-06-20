var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('sass:clean', function () {
    return gulp.src([
        config.sass.destination + '/' + config.sass.destinationName,
        config.sass.destination + '/' + config.sass.destinationName + '.map'
    ], { read: false }).pipe($.clean());
});

gulp.task('sass:build', ['sass:clean'], function () {
    return gulp.src(config.sass.sources)
        .pipe(config.production ? $.util.noop() : $.sourcemaps.init())
        .pipe($.plumber())
        .pipe($.concat(config.sass.destinationName))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(config.production ? $.cleanCss() : $.util.noop())
        .pipe(config.production ? $.util.noop() : $.sourcemaps.write('.'))
        .pipe(gulp.dest(config.sass.destination))
        .pipe($.connect.reload());
});

gulp.task('sass:watch', ['sass:build'], function () {
    gulp.watch(config.sass.sources, ['sass:build']);
});
