const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const es = require('event-stream');

gulp.task('build:sass', () => {
  let stream = gulp.src(config.sass.sources)
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.concat(`${config.sass.destinationName}.css`))
    .pipe(gulp.dest(config.dist));

  if (config.production) {
    const minify = stream.pipe($.sourcemaps.init({
      loadMaps: true,
    }))
      .pipe($.cleanCss())
      .pipe($.rename({
        extname: '.min.css',
      }))
      .pipe($.rev())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(config.dist));
    stream = es.concat(minify, stream);
  }

  stream.pipe($.connect.reload());

  return stream;
});

gulp.task('watch:sass', () => {
  gulp.watch(config.sass.sources, ['build:sass']);
});
