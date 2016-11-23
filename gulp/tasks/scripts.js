const browserify = require('browserify');
const watchify = require('watchify');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const options = {
  entries: config.scripts.sources,
  transform: [
    require('browserify-ngannotate'),
    require('browserify-ng-html2js'),
    require('browserify-css')
  ]
};

let bundler = browserify(options);

function bundle() {
  return bundler.bundle()
    .pipe($.plumber())
    .pipe(source(`${config.scripts.destinationName}.js`))
    .pipe(buffer())
    .pipe(gulp.dest(config.dist))
    .pipe(config.production ? $.sourcemaps.init({ loadMaps: true }) : $.util.noop())
    .pipe(config.production ? $.uglify() : $.util.noop())
    .pipe(config.production ? $.rename({ extname: '.min.js' }) : $.util.noop())
    .pipe(config.production ? $.rev() : $.util.noop())
    .pipe(config.production ? $.sourcemaps.write('./') : $.util.noop())
    .pipe(config.production ? gulp.dest(config.dist) : $.util.noop())
    .pipe($.connect.reload());
}

gulp.task('build:scripts', bundle);

gulp.task('watch:scripts', () => {
  bundler = watchify(bundler);
  bundler.on('update', bundle);
});