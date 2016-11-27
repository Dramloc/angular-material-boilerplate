const browserify = require('browserify');
const watchify = require('watchify');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const es = require('event-stream');

let bundler = browserify({
  debug: true,
  entries: config.scripts.src,
  transform: [
    ['babelify', {
      presets: ['es2015'],
    }],
    ['stringify', {
      appliesTo: { includeExtensions: ['.html'] },
      minify: config.production,
    }],
    'browserify-ngannotate',
    ['browserify-css', {
      minify: config.production,
    }],
  ],
});

function bundle() {
  let stream = bundler.bundle()
    .pipe($.plumber())
    .pipe(source(`${config.scripts.destName}.js`))
    .pipe(buffer())
    .pipe(gulp.dest(config.scripts.dest));

  if (config.production) {
    const minify = stream
      .pipe($.uglify())
      .pipe($.rename({
        extname: '.min.js',
      }))
      .pipe($.rev())
      .pipe(gulp.dest(config.scripts.dest));
    stream = es.concat(minify, stream);
  }

  stream.pipe($.connect.reload());

  return stream;
}

gulp.task('build:scripts', bundle);

gulp.task('watch:scripts', () => {
  bundler = watchify(bundler);
  bundler.on('update', () => gulp.start('build:scripts'));
});
