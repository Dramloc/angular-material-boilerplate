var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var package = require('../../package.json');

gulp.task('scripts:clean', function () {
    return gulp.src([
        config.scripts.destination + '/' + config.scripts.destinationName,
        config.scripts.destination + '/' + config.scripts.destinationName + '.map'
    ], { read: false }).pipe($.clean());
});

gulp.task('scripts:lint', function () {
    return gulp.src(config.scripts.sources)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('scripts:build', ['scripts:lint', 'scripts:clean'], function () {
    return gulp.src(config.scripts.sources)
        .pipe(config.production ? $.util.noop() : $.sourcemaps.init())
        .pipe($.plumber())
        .pipe($.header(config.scripts.header, package))
        .pipe($.footer(config.scripts.footer, package))
        .pipe($.ngAnnotate())
        .pipe($.angularFilesort())
        .pipe($.concat(config.scripts.destinationName))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe(config.production ? $.util.noop() : $.sourcemaps.write('.'))
        .pipe(gulp.dest(config.scripts.destination))
        .pipe($.connect.reload());
});

gulp.task('scripts:watch', ['scripts:build'], function () {
    gulp.watch(config.scripts.sources, ['scripts:build']);
});
