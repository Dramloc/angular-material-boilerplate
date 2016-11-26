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
  const stream = bundler.bundle()
    .pipe($.plumber())
    .pipe(source(`${config.scripts.destinationName}.js`))
    .pipe(buffer())
    .pipe(gulp.dest(config.dist))

  if (config.production) {
    stream.pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.uglify())
      .pipe($.rename({ extname: '.min.js' }))
      .pipe($.rev())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(config.dist))
  }

  stream.pipe($.connect.reload());

  return stream;
}

gulp.task('build:scripts', bundle);

gulp.task('watch:scripts', () => {
  bundler = watchify(bundler);
  bundler.on('update', bundle);
});