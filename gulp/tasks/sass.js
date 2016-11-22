const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');

gulp.task('build:sass', () => {
  return gulp.src(config.sass.sources)
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.concat(`${config.sass.destinationName}.css`))
    .pipe(gulp.dest(config.dist))
    .pipe(config.production ? $.sourcemaps.init({ loadMaps: true }) : $.util.noop())
    .pipe(config.production ? $.cleanCss() : $.util.noop())
    .pipe(config.production ? $.rename({ extname: '.min.css' }) : $.util.noop())
    .pipe(config.production ? $.rev() : $.util.noop())
    .pipe(config.production ? $.sourcemaps.write('.') : $.util.noop())
    .pipe(config.production ? gulp.dest(config.dist) : $.util.noop())
    .pipe($.connect.reload());
});

gulp.task('watch:sass', () => {
  gulp.watch(config.sass.sources, ['build:sass']);
});
